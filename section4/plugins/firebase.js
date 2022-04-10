// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqo2yXHNrBN1xA7TESxnXOpcyMA5RgC0A",
  authDomain: "nuxt-spa-book-app-1c095.firebaseapp.com",
  projectId: "nuxt-spa-book-app-1c095",
  storageBucket: "nuxt-spa-book-app-1c095.appspot.com",
  messagingSenderId: "592450000483",
  appId: "1:592450000483:web:c96855298746eefda8ca56"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default ( context, inject) => {
  inject('firebase', firebaseApp)
}
