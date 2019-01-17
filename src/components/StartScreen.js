import React, { Component } from 'react'
import { logIn } from '../actions/authActions'
import { connect } from 'react-redux'

class StartScreen extends Component {
  state = {
    tempName: "", tempId: ""
  }

  onChange = (e) => {
    this.setState({
      tempName: e.target.value
    })
  }
  logInAnonymous = (e) => {
    e.preventDefault();
    if (this.state.tempName.length > 0){
      let number = Math.random()*10;
      this.setState({
        tempId: number
      }, function(){
        this.props.logIn()
        this.props.saveTempNameAndId(this.state)
      })
    } else {
      this.props.noNameError()
    }
  } 
  render() { 
    const { auth } = this.props;
    if (auth.Logged){
      this.props.history.push('./home')
    }
    return (
      <div className="container">
          <div className="card col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-center mt-5">
            <div className="card-body">
                <h2 className="card-title">Welcome to LiveChat</h2>
                <form onSubmit={this.logInAnonymous}>
                  <input type="text" className="form-control-md p-2 mb-3 mx-auto" placeholder="Nickname" aria-label="Username" aria-describedby="basic-addon1" style={{display: "block", width:"100%"}} onChange={this.onChange}/>

                  { auth.nnError ? <p className="text-danger">You must write temporary name</p> : null}

                  <button type="button" className="btn btn-dark" style={{width: "100%"}} onClick={this.logInAnonymous}>Enter to chat</button>
                </form>
            </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      logIn: () => dispatch(logIn()),
      saveTempNameAndId: (data) => { dispatch({ type: 'SAVE_TEMP_NAME_AND_ID', data })},
      noNameError: () => { dispatch({ type: 'NO_NAME_ERROR' })}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StartScreen)
