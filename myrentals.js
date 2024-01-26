 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database
  const db = firebase.firestore();

  // Check if the user is authenticated
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in

      // Call the function to load the user's rented items
      loadRentedItems(user.uid);
    } else {
      // User is signed out. Redirect to the login page.
  
      alert("User is not authenticated. Redirect to login page.");
    }
  });

  // Function to load user's rented items from Firestore
  function loadRentedItems(userId) {
    const rentedItemsContainer = document.querySelector('.my-rentals');

    // Clear previous rental cards
    rentedItemsContainer.innerHTML = '';

    // Reference to the user's rented items collection
    const rentedItemsRef = db.collection('rentedItems').where('userId', '==', userId);

    // Get the documents from the collection
    rentedItemsRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Create a rental card for each rented item
        const item = doc.data();
        const rentalCard = document.createElement('div');
        rentalCard.classList.add('rental-card');
        rentalCard.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}">
          <div class="rental-details">
            <h2>${item.name}</h2>
            <p>Category: ${item.category}</p>
            <p>Status: Rented</p>
            <p>Rented From: ${item.renterName}</p>
            <p>Rental Period: ${item.rentalPeriod} days</p>
            <p>Information: ${item.description}</p>
          </div>
          <div class="rental-actions">
            <button onclick="returnItem('${doc.id}')">Return Item</button>
            <button onclick="giveItemReview('${doc.id}')">Give Item Review</button>
            <button onclick="giveRenterReview('${item.renterUserId}')">Give Renter Review</button>
          </div>
        `;
        rentedItemsContainer.appendChild(rentalCard);
      });
    });
  }

  // Example function for returning an item
  function returnItem(itemId) {
   
    alert(`Returning item with ID: ${itemId}`);
  }

  // Example function for giving item review
  function giveItemReview(itemId) {
  
    alert(`Giving review for item with ID: ${itemId}`);
  }

  // Example function for giving renter review
  function giveRenterReview(renterUserId) {
   
    alert(`Giving review for renter with ID: ${renterUserId}`);
  }