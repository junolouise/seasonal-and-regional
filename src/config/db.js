import foods from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyCeEXdHCml2I7ieN1epGgyHgnmv40dCWYo",
    authDomain: "seasonal-regional.firebaseapp.com",
    databaseURL: "https://seasonal-regional.firebaseio.com",
    projectId: "seasonal-regional",
    storageBucket: "seasonal-regional.appspot.com",
    messagingSenderId: "96103047575",
    appId: "1:96103047575:web:89426ad8b8981e3fe464d2",
    measurementId: "G-TDNR11BWY6"
  };
  // Initialize Firebase
  let app = foods.initializeApp(firebaseConfig);
  export const db = app.database()
