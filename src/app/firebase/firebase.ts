import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_KEY_FIREBASE,
    authDomain: "soudemy-diplom.firebaseapp.com",
    projectId: "soudemy-diplom",
    storageBucket: "soudemy-diplom.appspot.com",
    messagingSenderId: "607890731166",
    appId: process.env.NEXT_PUBLIC_APP_ID_FIREBASE
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)