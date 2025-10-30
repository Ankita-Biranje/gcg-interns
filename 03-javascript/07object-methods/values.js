// Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log("Original object:", object1);
console.log("Values of the object:", Object.values(object1));
