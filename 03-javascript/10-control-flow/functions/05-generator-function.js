// Generator Function
// Generator functions are a special class of functions that can be paused and resumed, allowing for the creation of iterators.
// They are defined using the function* syntax.
// The yield keyword is used to pause the function and return a value.

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().done); // true
