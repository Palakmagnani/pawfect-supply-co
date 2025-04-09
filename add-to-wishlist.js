function addToWishlist(name, image, description = "", price = 0) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    const isDuplicate = wishlist.some(item => item.name === name);
    if (isDuplicate) {
      alert("This item is already in your wishlist.");
      return;
    }
  
    wishlist.push({ name, image, price });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${name} added to wishlist!`);
  }
  