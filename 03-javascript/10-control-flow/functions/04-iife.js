// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is created.
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
//    This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately executing function expression (),
//    through which the JavaScript engine will directly interpret the function.

(function() {
  console.log("This is an Immediately Invoked Function Expression (IIFE)");
})();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name + "!");
})("World");
