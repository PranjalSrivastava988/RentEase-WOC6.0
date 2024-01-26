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

// Add event listener to the signup form
document.getElementById('signupform').addEventListener('submit', function (event) {
  event.preventDefault();
  signUp();
});

// Function to handle user signup
function signUp() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const password = document.getElementById('password').value;
  console.log(email, password)

  // Create user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log('User created', user);
      // Signup successful, redirect to login page or dashboard
      alert('Sign up successful!');
      window.location.href = 'login.html';
      return false;

    })

    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
    })
}


