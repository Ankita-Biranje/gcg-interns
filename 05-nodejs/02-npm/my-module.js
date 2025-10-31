// This is a module.
// By default, the variables and functions in this file are private to this module.

const message = "Hello from my-module.js!";

function greet() {
    console.log("Hello, there!");
}

// To make variables and functions available to other modules, we need to export them.
// We can do this by assigning them to the module.exports object.

module.exports = {
    message: message,
    greet: greet
};
