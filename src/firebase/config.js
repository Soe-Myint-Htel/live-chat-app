import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA29PY1oKbENZkr7JvbsyuCVt8KUUxd6mg",
  authDomain: "live-chat-app-d9412.firebaseapp.com",
  projectId: "live-chat-app-d9412",
  storageBucket: "live-chat-app-d9412.appspot.com",
  messagingSenderId: "810066192736",
  appId: "1:810066192736:web:76fd913fb12d69d5bc5605"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timeStamp = firebase.firestore.FieldValue.severTimeStamp;
export {db, auth, timeStamp}