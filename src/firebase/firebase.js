import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq7feIuUuwkde0Sl52_LRoVURSHDVD3Dk",
  authDomain: "socialmediaanalyticstool.firebaseapp.com",
  projectId: "socialmediaanalyticstool",
  storageBucket: "socialmediaanalyticstool.appspot.com",
  messagingSenderId: "391935800888",
  appId: "1:391935800888:web:4ed340a1416c00c6e018cd",
  measurementId: "G-D7Z6XXQSSG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
