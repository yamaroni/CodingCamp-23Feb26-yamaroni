welcomeMessage();

/// JavaScript code for Yama Company website
function welcomeMessage() {
    /// Prompt the user to enter their name
    let name = prompt("Please enter your name:");

    /// Check if the name is not null and not just whitespace
    if (name == null || name.trim() === "") {
        /// If the user cancels the prompt or enters an empty name, set a default name
        name = "Guest";
    }

    /// Display a welcome message using the entered name
    document.getElementById("welcome-speech").innerHTML = "Welcome to Yama Company, " + name + "!";
}

/// Function to validate the contact form (to be implemented)
function validateForm() {

}