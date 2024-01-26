// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Firestore reference
const db = firebase.firestore();

// Event listener for the form submission
document.getElementById('addItemForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const itemName = document.getElementById('itemName').value;
  const itemCategory = document.getElementById('itemCategory').value;
  const itemInfo = document.getElementById('itemInfo').value;
  const itemStatus = document.getElementById('itemStatus').value;

  // Add item to Firestore
  db.collection('items').add({
    itemName,
    itemCategory,
    itemInfo,
    itemStatus
  })
  .then(() => {
    console.log('Item added successfully');
    // Clear the form after submission
    document.getElementById('addItemForm').reset();
    // Refresh the items list
    fetchItems();
  })
  .catch(error => {
    console.error('Error adding item: ', error);
  });
});

// Fetch items from Firestore
function fetchItems() {
  const itemsContainer = document.getElementById('existingItemsContainer');
  itemsContainer.innerHTML = ''; // Clear existing items

  db.collection('items').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const item = doc.data();
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        // Build your item card content here
        // Example:
        itemCard.innerHTML = `
          <img src="item_placeholder.jpg" alt="${item.itemName}">
          <div class="item-details">
            <h2>${item.itemName}</h2>
            <p>Category: ${item.itemCategory}</p>
            <p>Status: ${item.itemStatus}</p>
            <p>Information: ${item.itemInfo}</p>
          </div>
          <div class="item-actions">
            <button>Edit</button>
            <button>Delete</button>
            <button onclick="showItemReviews('${doc.id}')">Item Reviews</button>
          </div>
        `;

        itemsContainer.appendChild(itemCard);
      });
    })
    .catch(error => {
      console.error('Error fetching items: ', error);
    });
}

// Call fetchItems on page load
window.onload = fetchItems;

// Function to show item reviews
function showItemReviews(itemId) {
  // Add your logic to show reviews for the selected item
  alert(`Showing reviews for item with ID: ${itemId}`);
}
