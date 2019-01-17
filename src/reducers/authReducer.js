const initState = {
    Logged: false, tempName: "", tempId: "", nnError: false
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'SAVE_TEMP_NAME_AND_ID':
            console.log('temporary named and id saved');
            return {
                ...state,
                tempName: action.data.tempName,
                tempId: action.data.tempId,
                nnError: false
            }
        case 'LOGIN_SUCCESS':
            console.log('login anonymous success');
            return {
                ...state,
                Logged: true
            }
        case 'LOGIN_ERROR':
            console.log('login error');
            return state;  
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return {
                ...state,
                Logged: false
            } 
        case 'LOGOUT_ERROR':
            console.log('logout error');
            return state; 
        case 'NO_NAME_ERROR':
            console.log('no name error');
            return {
                ...state,
                nnError: true
            } 
        default:
            return state
    }
}

export default authReducer