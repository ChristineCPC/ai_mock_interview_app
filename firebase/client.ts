
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "prepwise-b66b6.firebaseapp.com",
    projectId: "prepwise-b66b6",
    storageBucket: "prepwise-b66b6.firebasestorage.app",
    messagingSenderId: "568541793705",
    appId: "1:568541793705:web:e23342859f48c2d349c8b8",
    measurementId: "G-8YC1D9WVV7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);