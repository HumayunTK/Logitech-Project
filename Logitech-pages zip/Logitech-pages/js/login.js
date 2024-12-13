// DOM Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPasswordButton = document.querySelector(".show-password");
const errorMessage = document.getElementById("error-message");
const loginButton = document.querySelector(".login-button");
const form = document.querySelector("form");

// Toggle Password Visibility
showPasswordButton.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  showPasswordButton.textContent = isPasswordVisible ? "👁️" : "🙈";
});

// Validate Email Format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Handle Form Submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate Email
  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  // Perform Login Logic
  if (email && password) {
    // Redirect or handle further logic
    window.location.href = "index.html"; // Replace with your desired URL
  } else {
    alert("Please fill in all fields!");
  }
});
