// Array.prototype.reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const array1 = ['one', 'two', 'three'];
console.log('original array:', array1);

const reversed = array1.reverse();
console.log('reversed array:', reversed);

// careful: reverse is destructive -- it changes the original array.
console.log('original array after reverse:', array1);

