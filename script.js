document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // You can add your backend fake logic here
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Example validation
      if (username === "I" && password === "I") {
        alert("Login successful!");
        // Redirect or do something else after successful login
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  