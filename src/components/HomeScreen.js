import React, { Component } from 'react';
import ChatRooms from './ChatRooms';
import Message from './Message';
import ChatScreen from './ChatScreen'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { logOut } from '../actions/authActions'

class HomeScreen extends Component {
    state = {
        openChat: "room1", openChatPassword: ""
    }
    changeOpenChat = (name, password) => {
        this.setState({
            openChat: name,
            openChatPassword: password
        })
    }
  render() { 
    const { auth, chat, chatArray } = this.props
    if (!auth.Logged) {
        this.props.history.push('./')
    }
    return (
      <div className="container">
            <div className="row">
                <div className="mt-3 col-lg-4 order-lg-1 order-sm-2 order-2">
                    <ChatRooms chatArray={chatArray} changeOpenChat={this.changeOpenChat} openChat={this.state.openChat}/>

                    <button className="btn btn-dark" onClick={() => {this.props.logOut()}} style={{width: "100%"}}>LOGOUT</button>
                </div>
                <div className="mt-3 col-lg-8 order-lg-2 order-sm-1 order-1">
                    <ChatScreen chat={chat} openChat={this.state.openChat}/>
                    <Message tempData={auth} openChatData={this.state}/>
                </div>
            </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        chat: state.firestore.data.chat,
        chatArray: state.firestore.ordered.chat,
        user: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => dispatch(logOut())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection: 'chat' }
    ])
  )(HomeScreen)
