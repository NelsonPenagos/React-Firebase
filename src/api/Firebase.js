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

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  