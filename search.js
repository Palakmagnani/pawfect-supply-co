document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const searchInput = document.getElementById("search");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
  
      const query = searchInput.value.trim();
  
      if (query === "") {
        alert("Please enter a search term.");
      } else {
        // Simulated search result — you'd connect to a product database in real app
        alert(`Searching for: "${query}"... (This is just a demo)`);
        form.reset();
      }
    });
  });
  