import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB8Trf_Fl56PMKAlCiKrsABxF2ouE48W8I",
    authDomain: "chat-app-9d72d.firebaseapp.com",
    databaseURL: "https://chat-app-9d72d.firebaseio.com",
    projectId: "chat-app-9d72d",
    storageBucket: "chat-app-9d72d.appspot.com",
    messagingSenderId: "882969008404"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots: true})
  export default firebase
