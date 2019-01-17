import authReducer from './authReducer'
import chatReducer from './chatReducer'
import { combineReducers } from 'redux';
///redux-firestore
import { firestoreReducer } from 'redux-firestore'
///firebase do auth
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer