document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
  
        const product = {
          id: button.getAttribute("data-id"),
          name: button.getAttribute("data-name"),
          price: parseFloat(button.getAttribute("data-price")),
          image: button.getAttribute("data-image"),
          quantity: 1
        };
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        const existingProduct = cart.find(item => item.id === product.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push(product);
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      });
    });
  });
  