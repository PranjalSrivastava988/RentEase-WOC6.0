  
  // Check if the user is authenticated
  firebase.auth().onAuthStateChanged( (user)=>{
   
    if (!user) {
      location.replace("login.html")
    }
  })
  
  // Function to set up the dashboard with user information
  function setupDashboard(user) {
    console.log('Setting up dashboard for user:', user);
    // Get elements from the DOM
    const userNameElement = document.querySelector(".user-details h2");
    const userEmailElement = document.querySelector(".user-details p:nth-child(2)");
  
    // Set user information
    userNameElement.textContent = user.displayName || "USER";
    userEmailElement.textContent = "Email: " + user.email || "user@gmail.com";
  }
  
  // Function to handle logout
  function logout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful, redirect to login page
      window.location.href = "login.html";
    }).catch(function (error) {
      // An error happened.
      console.error("Logout error:", error);
    });
  }
  
  // Event listener for logout button
  document.querySelector(".logout-btn").addEventListener("click", logout);
  