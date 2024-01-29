
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByE7q00lI6dpNaCiSsoOYvjs-f1wIBEsY",
  authDomain: "authentication-c1f77.firebaseapp.com",
  projectId: "authentication-c1f77",
  storageBucket: "authentication-c1f77.appspot.com",
  messagingSenderId: "636785756648",
  appId: "1:636785756648:web:1675e9bf5778953b793c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const fireDb = getFirestore(app)

export {auth,fireDb}