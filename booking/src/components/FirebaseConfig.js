import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA8EsDIyItqth4f3a8Hx8FLstUmmT_KrZI",
    authDomain: "firstproject-16cb4.firebaseapp.com",
    databaseURL: "https://firstproject-16cb4.firebaseio.com",
    projectId: "firstproject-16cb4",
    storageBucket: "firstproject-16cb4.appspot.com",
    messagingSenderId: "110850772675",
    appId: "1:110850772675:web:d9316e47ea0c65f5cf9c76",
    measurementId: "G-4VGSMV8CDS"
  };

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({timestampsInSnapshots:true});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

export const auth = firebase.auth();
export  default firebase;