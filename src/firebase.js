// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDxS_z7xaZk-yPuTZgroHJqjH-0eYB0uPg",
    authDomain: "linkdinclone-384511.firebaseapp.com",
    projectId: "linkdinclone-384511",
    storageBucket: "linkdinclone-384511.appspot.com",
    messagingSenderId: "655702671199",
    appId: "1:655702671199:web:8ce6b266145762241680ea",
    measurementId: "G-CE857H18YX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth,provider,storage};

  export default db;
