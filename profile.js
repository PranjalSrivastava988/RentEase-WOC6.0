  firebase.initializeApp(firebaseConfig);
  
  // Check if the user is authenticated
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in, retrieve user details
      const userName = user.displayName || "Pranjal Srivastava";
      const userEmail = user.email || "23je0732@iitism.ac.in";
      const userContact = "123-456-7890"; 
      const userAddress = "IIT(ISM),DHANBAD"; 
  
      // Update profile details in the HTML
      document.getElementById('userName').innerText = userName;
      document.getElementById('userEmail').innerText = "Email: " + userEmail;
      document.getElementById('userContact').innerText = "Contact: " + userContact;
      document.getElementById('userAddress').innerText = "Address: " + userAddress;
    } else {
      // User is not signed in, redirect to login page
      window.location.href = 'login.html';
    }
  });
  
  // Function to handle profile editing 
  function editProfile() {
   
    console.log('Editing profile...');
  }
  
  // Function to handle password change
  function changePassword() {
    
    console.log('Changing password...');
  }
  
  // Function to handle account deletion
  function deleteAccount() {

    console.log('Deleting account...');
  }
  