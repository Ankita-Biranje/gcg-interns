// Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax.
const subtract = (a, b) => {
    return a - b;
};

let difference = subtract(10, 4);
console.log("The difference is:", difference); // Outputs: "The difference is: 6"

// If the function has only one statement, and the statement returns a value,
// you can remove the brackets and the return keyword.
const square = x => x * x;

let squaredNumber = square(5);
console.log("The squared number is:", squaredNumber); // Outputs: "The squared number is: 25"
