import { signInWithEmailAndPassword } from 'firebase/auth'; // Update the import

document.addEventListener('DOMContentLoaded', function () {
  const loginform = document.querySelector('#loginform');
  loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginform['email'].value;
    const password = loginform['password'].value;

    console.log('Email:', email);
    console.log('Password:', password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href="dashboard.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        document.getElementById('error-message').textContent = errorMessage;
      });
  });
})
