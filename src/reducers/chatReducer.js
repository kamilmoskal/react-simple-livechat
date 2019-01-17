const initState = {
    enteredPassword: ""
}

const chatReducer = (state = initState, action) => {
    switch (action.type){
        case 'MESSAGE_SUCCESS_SEND':
            console.log('message send');
            return state;
        case 'MESSAGE_ERROR_SEND':
            console.log('message error send');
            return state;
        case 'ROOM_SUCCESS_ADD':
            console.log('room added');
            return state;
        case 'ROOM_ERROR_ADD':
            console.log('room added error');
            return state;
        case 'ENTERED_PASSWORD':
            console.log('password entered');
            return {
                ...state,
                enteredPassword: action.password
            }
        default:
            return state  
        }
}

export default chatReducer