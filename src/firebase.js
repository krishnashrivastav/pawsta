// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   import firebase from "firebase";
  import firebase from 'firebase/compat/app';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQdwxNslDk4nOsqbL1dhzXe5Io4nwf5fc",
    authDomain: "pawsta-f02c1.firebaseapp.com",
    projectId: "pawsta-f02c1",
    storageBucket: "pawsta-f02c1.appspot.com",
    messagingSenderId: "160033755561",
    appId: "1:160033755561:web:03efbc08eeb1c63c8834b8",
    measurementId: "G-297K1QXHE4"
  }); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

//   export default db;