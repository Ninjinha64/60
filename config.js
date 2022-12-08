import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyAoCDKJvXIiB4K7dTJVYmv1hPQOpHApMHw",
  authDomain: "program-4502e.firebaseapp.com",
  projectId: "program-4502e",
  storageBucket: "program-4502e.appspot.com",
  messagingSenderId: "175033067363",
  appId: "1:175033067363:web:50fa7196a207c490129556"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore();
 

  