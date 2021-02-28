// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1hX4H59_iyjqMY4Tt3nru5_Ut01IPlwg",
  authDomain: "slack-clone-8b911.firebaseapp.com",
  projectId: "slack-clone-8b911",
  storageBucket: "slack-clone-8b911.appspot.com",
  messagingSenderId: "1071844314712",
  appId: "1:1071844314712:web:496ac99011eea00b29042d",
  measurementId: "G-0D9FP513G9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
