// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqvgrouhN8e9Og1lXgASHPMa9IeumPLM",
    authDomain: "nuxt-spa-book-app-3915a.firebaseapp.com",
    projectId: "nuxt-spa-book-app-3915a",
    storageBucket: "nuxt-spa-book-app-3915a.appspot.com",
    messagingSenderId: "438023319304",
    appId: "1:438023319304:web:b0484fa70e3166980046bd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default (context, inject) => {
    inject('firebase', firebaseApp)
}