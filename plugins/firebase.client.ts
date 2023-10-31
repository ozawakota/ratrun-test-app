import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyB-vK_7o1w8TiOc6NEeXP1LUfBVxdZqCos",
    authDomain: "ratrun-564ac.firebaseapp.com",
    databaseURL: "https://ratrun-564ac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ratrun-564ac",
    storageBucket: "ratrun-564ac.appspot.com",
    messagingSenderId: "941672873663",
    appId: "1:941672873663:web:56acf75e182854cecb100a",
    measurementId: "G-Q6JYSDLLXM"
  };
  initializeApp(firebaseConfig);
});
