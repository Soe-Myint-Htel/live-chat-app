import firebase from "firebase/app"
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA29PY1oKbENZkr7JvbsyuCVt8KUUxd6mg",
  authDomain: "live-chat-app-d9412.firebaseapp.com",
  projectId: "live-chat-app-d9412",
  storageBucket: "live-chat-app-d9412.appspot.com",
  messagingSenderId: "810066192736",
  appId: "1:810066192736:web:76fd913fb12d69d5bc5605",
  measurementId: "G-VSV0YQE4G1"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timeStamp = firebase.firestore.FieldValue.severTimestamp;

export { db, timeStamp } 