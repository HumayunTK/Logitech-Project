
import { validateLogin } from './data.js';

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validateLogin(username, password)) {
    window.location.href = "index.html"; // GO TO THE MAIN WEBSITE IF TYPE THE CORRECT USERNAME AND PASSWORD
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
}
