// In Node.js, modules are reusable blocks of code.
// Each file in Node.js is a module.

// The import statement is used to include a module in another module.
// Here, we are including the 'my-module.js' file.
import { message, greet } from './my-module.js';

// Now we can use the functions and variables exported from 'my-module.js'.
console.log(message); // Outputs: "Hello from my-module.js!"
greet(); // Outputs: "Hello, there!"
