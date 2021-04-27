import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBwjxT_V7FJtH_NNe6l8lG4t-wQy87A49s",
    authDomain: "todo-app-89766.firebaseapp.com",
    projectId: "todo-app-89766",
    storageBucket: "todo-app-89766.appspot.com",
    messagingSenderId: "416304407251",
    appId: "1:416304407251:web:cfe15088e6401f12f1aa26",
    measurementId: "G-TBH14LDWSC"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  export default db