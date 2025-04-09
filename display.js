document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart-btn");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
  
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const image = btn.dataset.image;
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        // Check if item already in cart
        const existingItem = cart.find(item => item.name === name);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
          });
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} added to cart!`);
      });
    });
  });
  