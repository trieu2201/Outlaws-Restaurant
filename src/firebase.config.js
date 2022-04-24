import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCgncmf_11tSqBLR0d0T7suFWEZJuaRmow",
    authDomain: "outlaws-restaurant.firebaseapp.com",
    databaseURL: "https://outlaws-restaurant-default-rtdb.firebaseio.com",
    projectId: "outlaws-restaurant",
    storageBucket: "outlaws-restaurant.appspot.com",
    messagingSenderId: "214378165780",
    appId: "1:214378165780:web:41458cfa890e0285d51901"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };