import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDyHM2ZShXLMvP5Zp1JrT3se5sOy8U0Nlg",
    authDomain: "photoappgallery-aaabd.firebaseapp.com",
    projectId: "photoappgallery-aaabd",
    storageBucket: "photoappgallery-aaabd.appspot.com",
    messagingSenderId: "769809561053",
    appId: "1:769809561053:web:fbf97a32d3baa97fc8b234",
    measurementId: "G-65V8BP4VQW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };

  export default firebase;
