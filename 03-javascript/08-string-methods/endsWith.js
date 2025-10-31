// String.prototype.endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('?'));
// expected output: true
