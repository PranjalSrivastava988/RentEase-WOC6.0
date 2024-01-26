
// Import the functions you need from the SDKs you need
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

firebase.initializeApp(firebaseConfig);

document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Redirect to the dashboard page on successful login
      window.location.href = "dashboard.html";
      return false;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      // Display error message to the user
      document.getElementById('error-message').textContent = errorMessage;
    });
}

function forgotpass() {
  const email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset your password by email sent to your mail id")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
}