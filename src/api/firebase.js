import firebase from 'firebase';

const config = {
    
    apiKey: "AIzaSyBnexT65AOn2tZp0TrykUW5sLZlNaJbcqs",
    authDomain: "react-tutorial-957c0.firebaseapp.com",
    databaseURL: "https://react-tutorial-957c0.firebaseio.com",
    projectId: "react-tutorial-957c0",
    storageBucket: "",
    messagingSenderId: "976077365476"
}

firebase.initializeApp(config);

export default firebase;

export const DATABASE_FIREBASE = firebase.database();
export const AUTH_FIREBASE = firebase.auth();
export const STORAGE_FIREBASE = firebase.storage();
export const PROVIDER_FIREBASE = new firebase.auth.GoogleAuthProvider();

  