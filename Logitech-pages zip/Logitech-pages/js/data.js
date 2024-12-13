// users.js: Store user credentials
const users = [
  {
    username: "thienbinhq@gmail.com",  // Example email
    password: "123456789"       // Example password
  },
  {
    username: "simrandeepdhillon@gmail.com", // Another example email
    password: "123456789"
  },
  {
    username: "humayunkhan@gmail.com", // Another example email
    password: "123456789"
  },
];

// Function to validate login
function validateLogin(email, password) {
  return users.some(user => user.username === email && user.password === password);
}

// Export the validateLogin function for use in other scripts
export { validateLogin };
