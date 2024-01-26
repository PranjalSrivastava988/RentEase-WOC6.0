
  
  firebase.initializeApp(firebaseConfig);
  
  document.getElementById('logoutBtn').addEventListener('click', function () {
    // Perform Firebase logout
    firebase.auth().signOut().then(() => {
      // Logout successful
      alert('Logout Successful!');
      // Redirect to the login page
      window.location.href = 'login.html';
    }).catch((error) => {
      // Handle errors here
      console.error('Logout Error:', error);
    });
  });
  