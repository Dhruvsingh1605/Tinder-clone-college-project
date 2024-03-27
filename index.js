const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.get("/", (req, res) => {
    // Serve index.html as the homepage
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/signup", (req, res) => {
    // Redirect to signup.html when the user clicks on "CREATE ACCOUNT"
    res.redirect("/signup.html");
});

app.get("/login", (req, res) => {
    // Redirect to login.html when the user clicks on "Login"
    res.redirect("/login.html");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
