import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEE5-HA7I7lxRw4ozH9eGd2u5I5zcaMmc",
    authDomain: "fir-login-9266b.firebaseapp.com",
    projectId: "fir-login-9266b",
    storageBucket: "fir-login-9266b.appspot.com",
    messagingSenderId: "36943156333",
    appId: "1:36943156333:web:6c71704a5dc4eecd71db64"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };