import * as firebase from 'firebase';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDoyvcfccM3LgAD3TX3Dor399gmtdopQN8",
    authDomain: "gogoteam.firebaseapp.com",
    databaseURL: "https://gogoteam.firebaseio.com",
    projectId: "gogoteam",
    storageBucket: "gogoteam.appspot.com",
    messagingSenderId: "20800795285"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
