import { add, subtract, multiply } from './math.js';
import myGreetFunction from './greeter.js';
import * as MathFunctions from './math.js';

console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(5, 3));
console.log('Multiply:', multiply(5, 3));

console.log(myGreetFunction('Alice'));

console.log('Add (namespace):', MathFunctions.add(10, 2));
