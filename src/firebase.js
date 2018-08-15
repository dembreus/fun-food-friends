// src/firebase.js
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBv2FvVlWC_Hd5L1iRoHNZZbsmY6VkWOSA",
    authDomain: "fun-food-friends-441a3.firebaseapp.com",
    databaseURL: "https://fun-food-friends-441a3.firebaseio.com",
    projectId: "fun-food-friends-441a3",
    storageBucket: "fun-food-friends-441a3.appspot.com",
    messagingSenderId: "983661614893"
};
firebase.initializeApp(config);
export default firebase