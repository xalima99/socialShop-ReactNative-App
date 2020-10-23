import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBwBe61__jkbkvlKYxluPyTWrFlkKiFV1M",
  authDomain: "rninsta-c83dd.firebaseapp.com",
  databaseURL: "https://rninsta-c83dd.firebaseio.com",
  projectId: "rninsta-c83dd",
  storageBucket: "rninsta-c83dd.appspot.com",
  messagingSenderId: "390071418478",
  appId: "1:390071418478:web:967d2cf6966f73f87d707f",
  measurementId: "G-M2GKBP2N25",
};

if (firebase.apps.length === 0) {
   firebase.initializeApp(firebaseConfig);
}


export default firebase;
