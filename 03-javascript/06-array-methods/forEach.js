// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];

// console.log("Using forEach to log elements:");
array1.forEach(element => console.log(element));

// console.log("\nUsing forEach to log elements and their indices:");
array1.forEach((element, index) => console.log(`Index ${index}: ${element}`));
