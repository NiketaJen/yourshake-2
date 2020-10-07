import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDfiLtF4pUi3XDKonWTcxFxiIw2gY8UXXg",
    authDomain: "yourshake-fe77e.firebaseapp.com",
    databaseURL: "https://yourshake-fe77e.firebaseio.com",
    projectId: "yourshake-fe77e",
    storageBucket: "yourshake-fe77e.appspot.com",
    messagingSenderId: "817527593332",
    appId: "1:817527593332:web:dd45d31626e72759dbb421",
    measurementId: "G-PP1Q671VX1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
