// Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log("Original object:", object1);
console.log("Keys of the object:", Object.keys(object1));
