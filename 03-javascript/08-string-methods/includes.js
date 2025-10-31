// String.prototype.includes()
// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));
// expected output: true

console.log(str.includes('question'));
// expected output: true

console.log(str.includes('nonexistent'));
// expected output: false

console.log(str.includes('To be', 1));
// expected output: false

console.log(str.includes('TO BE'));
// expected output: false
