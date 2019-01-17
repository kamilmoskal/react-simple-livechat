import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRoom } from '../actions/chatActions'

class ChatRooms extends Component {
    state = {
        nameRoom: "", passwordRoom: "", showInputPassword: false
    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    addRoom = (e) => {
        e.preventDefault()
        if (this.state.nameRoom.length > 0){
            this.props.addRoom(this.state)
            this.setState({
                nameRoom: '',
                passwordRoom: '',
            })
        }
    }
    showInputPassword = (e) => {
        if (e.target.checked){
        this.setState({
            showInputPassword: true
        })} else {
            this.setState({
                showInputPassword: false,
                passwordRoom: ""
            })
        }
    }
  render() {
      const { chatArray, changeOpenChat, openChat } = this.props
      
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    Rooms:
                </div>
                <ul className="list-group list-group-flush">
                    {chatArray && chatArray.map(room => {
                        return (
                            <li style={{cursor: "pointer", background: `${openChat === room.id ? "#efef" : "none" }`}} onClick={() => {changeOpenChat(room.id, room.password)}}className="list-group-item" key={room.id}>{room.id} {room.password.length > 0 ? <i className="fas fa-lock" style={{float:"right"}}></i> : null}</li>
                        )
                    })}
                </ul>
            </div>
            <form action="" className="my-3" onSubmit={this.addRoom}>

                <input type="text" className="form-control-md p-2 my-1 mx-auto" placeholder="Room name" style={{display: "block", width:"100%"}} onChange={this.onChange} id="nameRoom" value={this.state.nameRoom}/>

                { this.state.showInputPassword ? <input type="text" className="form-control-md p-2 my-1 mx-auto" placeholder="Room password" style={{display: "block", width:"100%"}} onChange={this.onChange} id="passwordRoom" value={this.state.passwordRoom}/> : null}

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="setPassword" onClick={this.showInputPassword}/>
                    <label className="form-check-label" htmlFor="setPassword">Set Password</label>
                </div>

                <button type="button" className="btn btn-dark" style={{width: "100%"}} onClick={this.addRoom}>Add room</button>
            </form>
        </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addRoom: (data) => dispatch(addRoom(data))
    }
}

export default connect(null, mapDispatchToProps)(ChatRooms)
