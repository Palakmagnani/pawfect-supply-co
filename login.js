document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
  
      if (username.value.trim() === "" || password.value.trim() === "") {
        alert("Please enter both username and password.");
      } else {
        // Placeholder logic — real apps would check with server
        alert(`Welcome, ${username.value.trim()}!`);
        form.reset();
      }
    });
  });
  