// Array.prototype.reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;


// 1 + 2 + 3 + 4
console.log("Original array:", array1);
console.log("Sum of array elements:", array1.reduce(reducer));

// 5 + 1 + 2 + 3 + 4
console.log("Sum of array elements with initial value:", array1.reduce(reducer, 5));
