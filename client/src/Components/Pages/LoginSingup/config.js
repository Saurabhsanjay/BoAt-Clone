// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChjUdaHoiCQ_xCgXHRUdh_5yFInlVmBiw",
  authDomain: "boat-login.firebaseapp.com",
  projectId: "boat-login",
  storageBucket: "boat-login.appspot.com",
  messagingSenderId: "382428521186",
  appId: "1:382428521186:web:0ea7a1f24dcf41210c74bb",
  measurementId: "G-LXLV5JKPNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}