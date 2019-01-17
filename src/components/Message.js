import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/chatActions'

class Message extends Component {
  state = {
    message: "", tempName: "", tempId: "", id: "", room: "", messageEmpty: false
  }
  componentDidMount(){
    this.setState({
      tempName: this.props.tempData.tempName,
      tempId: this.props.tempData.tempId,
    })
  }
  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  sendMessage = (e) => {
    e.preventDefault();
    if (this.state.message.length > 0 && e.target.classList.contains('active')){
      let number = Math.random()*10;
      this.setState({
        room: this.props.openChatData.openChat,
        id: number
      }, function(){
        this.props.sendMessage(this.state)
        this.setState({
          message: ''
        })
      })
    }
  }
  render() {
    const { openChatData, password} = this.props
    return (
     <div className="text-center mt-2">
       <form onSubmit={this.sendMessage} className="active">
          <input onChange={this.onChange} type="text" className="form-control-md p-2 mb-3 mx-auto" placeholder="Message" style={{width: "75%"}} value={this.state.message}/>

          <button onClick={this.sendMessage} type="button" className={`btn btn-dark 
          ${openChatData.openChatPassword === password || openChatData.openChatPassword.length === 0 
          ? 'active' : 'disabled' }`} style={{width: "25%"}}>Send</button>
       </form>
       { this.state.messageEmpty ? <p className="text-danger">You can't send empty message</p> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    password: state.chat.enteredPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => dispatch(sendMessage(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message)
