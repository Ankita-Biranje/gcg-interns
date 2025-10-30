// Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

const object1 = {
  a: 'somestring',
  b: 42
};

console.log("Original object:", object1);
console.log("Entries of the object:", Object.entries(object1));

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
