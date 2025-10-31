// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// Function Declaration
// This is the most common way to define a function.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function Invocation (Calling the function)
greet("John"); // Outputs: "Hello, John!"

// Function with a return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("The sum is:", sum); // Outputs: "The sum is: 8"