const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const emptyCartMessage = document.getElementById("empty-cart-message");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    cartTotal.textContent = "Subtotal: $0.00";
    return;
  } else {
    emptyCartMessage.style.display = "none";
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity-input" />
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(itemEl);
  });

  cartTotal.textContent = `Subtotal: $${total.toFixed(2)}`;
}

cartItemsContainer.addEventListener("input", (e) => {
  if (e.target.classList.contains("quantity-input")) {
    const index = e.target.dataset.index;
    cart[index].quantity = parseInt(e.target.value);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
});

updateCart();

