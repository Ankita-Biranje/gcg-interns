// Array.prototype.indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log("Original array:", beasts);
console.log("Index of 'bison':", beasts.indexOf('bison'));

// start from index 2
console.log("Index of 'bison' starting from index 2:", beasts.indexOf('bison', 2));

console.log("Index of 'giraffe':", beasts.indexOf('giraffe')); // Output of not found elements is -1
