// Object.prototype.hasOwnProperty()
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const object1 = {};
object1.property1 = 42;

console.log("object1:", object1);
console.log("object1.hasOwnProperty('property1'):", object1.hasOwnProperty('property1'));
console.log("object1.hasOwnProperty('toString'):", object1.hasOwnProperty('toString'));
console.log("object1.hasOwnProperty('hasOwnProperty'):", object1.hasOwnProperty('hasOwnProperty'));
