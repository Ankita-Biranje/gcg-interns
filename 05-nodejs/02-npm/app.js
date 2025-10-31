// In Node.js, modules are reusable blocks of code.
// Each file in Node.js is a module.

// The require() function is used to include a module in another module.
// Here, we are including the 'my-module.js' file.
const myModule = require('./my-module');

// Now we can use the functions and variables exported from 'my-module.js'.
console.log(myModule.message); // Outputs: "Hello from my-module.js!"
myModule.greet(); // Outputs: "Hello, there!"
