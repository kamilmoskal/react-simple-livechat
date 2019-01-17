import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

class ChatScreen extends Component {
  state = {
      enteredPassword: "", wrongPassword: false
  }
  onChange = (e) => {
    this.setState({
      enteredPassword: e.target.value
    })
  }
  enteredPassword = (e) => {
    e.preventDefault()
    if (this.state.enteredPassword.length > 0) {
      this.props.enteredPassword(this.state.enteredPassword)
      this.setState({
        enteredPassword: ""
      })
    }
  }
  componentDidUpdate() {
    const chatscreen = document.getElementById("chatscreen");
    chatscreen.scrollTop = chatscreen.scrollHeight;
  }
  render() {
    const { chat, openChat, password, auth } = this.props

    const screen = (chat && chat[`${openChat}`].password.length === 0) || (chat && chat[`${openChat}`].password === password) ? (
      chat[`${openChat}`].messages.map(message => { 
        return (
          <div className={`list-group-item px-5 ${message.tempId === auth.tempId ? 
          'text-right bg-light' : 'text-left'}`} key={message.id}>

          <span className="text-secondary" style={{fontSize: "11px"}}>{moment(message.createdAt.toDate()).calendar()} - {message.tempName} </span>
          <br/>
          <span className="py-2" style={{borderRadius: "14px"}}>{message.message}</span>
        </div>
        )
    })
    ) : (
      <form action="" className="text-center" onSubmit={this.enteredPassword} style={{position: "absolute",top:"50%", left:"50%",transform:"translate(-50%,-50%)", width: "100%"}}>
        
          <input type="text" className="form-control-md p-2 my-1 mx-auto" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" style={{display: "block", width:"200px"}} onChange={this.onChange} value={this.state.enteredPassword}/>

          <button type="button" className="btn btn-dark mt-2" style={{width: "200px"}} onClick={this.enteredPassword}>Enter password</button>

          {this.state.wrongPassword ? <p className="text-danger">Wrong password</p> : null}
      </form>
    )
    return (
      
      <div className="card" style={{height: "400px", overflow: "auto"}} id="chatscreen">
          {screen}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    password: state.chat.enteredPassword,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      enteredPassword: (password) => { dispatch({ type: 'ENTERED_PASSWORD', password })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)


