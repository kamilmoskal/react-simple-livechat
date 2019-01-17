export const logIn = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInAnonymously()
        .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'LOGIN_ERROR', error })
        })
    }
}

export const logOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().currentUser.delete()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'LOGOUT_ERROR', error })
        })
    }
}