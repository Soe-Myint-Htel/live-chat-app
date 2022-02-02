import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCnNy4FrTJZSBVaTpWbP77keraAGrqeJlo",
  authDomain: "vue-blog-system-5a2cc.firebaseapp.com",
  projectId: "vue-blog-system-5a2cc",
  storageBucket: "vue-blog-system-5a2cc.appspot.com",
  messagingSenderId: "965074123527",
  appId: "1:965074123527:web:afdcbc0d1221c79937e3a2"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timeStamp = firebase.firestore.FieldValue.severTimestamp;

export { db, timeStamp } 