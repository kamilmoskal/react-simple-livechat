import React from 'react'
import { logOut } from '../actions/authActions'
import { connect } from 'react-redux'

const OnlinePPL = (props) => {

  return (
    <div className="card">
        <div className="card-header">
            Your nick: {props.userName}
        </div>
        <ul className="list-group list-group-flush">
            <button className="btn btn-dark" onClick={() => {props.logOut()}}>LOGOUT</button>

            { console.log(props.user)}
         
        </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(OnlinePPL)
