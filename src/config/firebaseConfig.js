import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDaAWfvkzL8vId79oPXrwggvmsnCsXOSfQ",
    authDomain: "dreamwed-a2c93.firebaseapp.com",
    projectId: "dreamwed-a2c93",
    storageBucket: "dreamwed-a2c93.appspot.com",
    messagingSenderId: "692398797716",
    appId: "1:692398797716:web:a0bb451b9bb6672a735581",
    measurementId: "G-EBXRCGFFEC"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase