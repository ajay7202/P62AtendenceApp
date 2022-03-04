 import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJFu_SRf85DRtQZNxWwhbJlCsYGw6Dak",
  authDomain: "schoolatendence-f3b36.firebaseapp.com",
  databaseURL: "https://schoolatendence-f3b36-default-rtdb.firebaseio.com",
  projectId: "schoolatendence-f3b36",
  storageBucket: "schoolatendence-f3b36.appspot.com",
  messagingSenderId: "988591120965",
  appId: "1:988591120965:web:b6c683c0736d6a1fd9b92c",
  measurementId: "G-JSZFXS58FZ"
};
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  