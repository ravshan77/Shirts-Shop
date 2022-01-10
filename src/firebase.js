import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyAWS5FOuzV4qM0CXkv3ts54MV4RZrE5MXM",
    authDomain: "nike-ecommerce.firebaseapp.com",
    projectId: "nike-ecommerce",
    storageBucket: "nike-ecommerce.appspot.com",
    messagingSenderId: "572486559300",
    appId: "1:572486559300:web:5f845faee271b839343e11"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;