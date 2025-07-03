import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLuUclMD6L3ym-F-Ob_of1L3RGKFkSbk0",
  authDomain: "vistaar-a6571.firebaseapp.com",
  projectId: "vistaar-a6571",
  storageBucket: "vistaar-a6571.appspot.com",
  messagingSenderId: "631233525141",
  appId: "1:631233525141:web:506f9d2da48ca5a34a329c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
