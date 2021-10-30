import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHfU8mNb11WpNcwB1U0V1vSi4kzftOn1k",
  authDomain: "vimeet-chatroom.firebaseapp.com",
  projectId: "vimeet-chatroom",
  storageBucket: "vimeet-chatroom.appspot.com",
  messagingSenderId: "81423973897",
  appId: "1:81423973897:web:68961acc309d3f7902c2d8"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} 
else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };