// String.prototype.padStart()
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '203439933';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "*****9333"
