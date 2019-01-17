export const sendMessage = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('chat').doc(`${data.room}`).update({
           
            messages: firestore.FieldValue.arrayUnion({ 
                message: data.message,
                tempName: data.tempName,
                tempId:  data.tempId,
                id: data.id,
                createdAt: new Date(),
            })

        }).then(() => {
            dispatch({ type: 'MESSAGE_SUCCESS_SEND' })
        }).catch(error => {
            dispatch({ type: 'MESSAGE_ERROR_SEND', error })
        })
    }
}

export const addRoom = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('chat').doc(`${data.nameRoom}`).set({
            messages: [],
            password: data.passwordRoom
        }).then(() => {
            dispatch({ type: 'ROOM_SUCCESS_ADD' })
        }).catch(error => {
            dispatch({ type: 'ROOM_ERROR_ADD', error })
        })
    }
}