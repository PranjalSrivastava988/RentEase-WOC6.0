// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpDrwyrQYVl2Jd4UGZzHFure-s_uVy_CM",
  authDomain: "rentease-21dd1.firebaseapp.com",
  projectId: "rentease-21dd1",
  storageBucket: "rentease-21dd1.appspot.com",
  messagingSenderId: "318499391560",
  appId: "1:318499391560:web:c70291d673635e1d14307d",
  measurementId: "G-J0LEJ8LM9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



