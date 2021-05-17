import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDgJQllG_nArin7Pi1Kovn8z_3Gl5rMXlY",
  authDomain: "security-dashboard-8d43e.firebaseapp.com",
  projectId: "security-dashboard-8d43e",
  storageBucket: "security-dashboard-8d43e.appspot.com",
  messagingSenderId: "407903182406",
  appId: "1:407903182406:web:ca46fbc99798db4d7fb447"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;