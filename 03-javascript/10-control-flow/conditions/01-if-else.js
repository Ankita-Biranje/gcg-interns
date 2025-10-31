// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement in the optional else clause will be executed.

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
