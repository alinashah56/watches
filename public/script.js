const products = [
  { id: 1, name: "Fashion", price: 10, desc: "Best for style", img: "./images/Fashion.jpg"},
  { id: 2, name: "Luxury", price: 20, desc: "Best for style, prestige & collecting", img: "./images/Luxury.jpeg"},
  { id: 3, name: "Smart", price: 15, desc: "Best for syncing with your home", img: "./images/Smart.webp"},
  { id: 4, name: "Classic", price: 12, desc: "Timeless design", img: "./images/Classic.jpeg"},
  { id: 5, name: "Sport", price: 18, desc: "Perfect for active lifestyle", img: "./images/Sport.jpeg"}
];

// Show products if #product-list exists
const productList = document.getElementById("product-list");
if (productList) {
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.img}" class="card-img-top" alt="${product.name}" 
             style="height: 300px; width: 80%; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="fw-bold">$${product.price}</p>
          <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

// Handle Add to Cart
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart!`);
  }
});

// Show cart if cart elements exist
document.addEventListener("DOMContentLoaded", function() {
  let cartItemsContainer = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  if (cartItemsContainer && cartTotal) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cartItemsContainer.innerHTML = "";

    cart.forEach((item, index) => {
      total += item.price;
      let li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        ${item.name} - $${item.price}
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(li);
    });
   document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await fetch("/logout", { method: "POST" }); // Call server logout
    window.location.href = "/login.html"; // Redirect to login
  } catch (err) {
    console.error("Logout failed:", err);
  }
});
    cartTotal.textContent = total;
    window.removeFromCart = function(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    };
  }
});