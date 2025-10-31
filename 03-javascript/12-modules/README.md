# JavaScript Modules (ES Modules)

ES Modules (ECMAScript Modules) provide a standardized system for organizing and reusing JavaScript code. They allow you to break down your code into smaller, manageable pieces (modules) and then import and export functionality between them.

## 1. Exporting Modules

You can export functions, classes, variables, or any other JavaScript primitive from a module using the `export` keyword.

### Named Exports

Named exports allow you to export multiple values from a module. When importing, you must use the same name.

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export function multiply(a, b) {
  return a * b;
}
```

### Default Exports

A module can have only one default export. When importing, you can give it any name you like.

```javascript
// greeter.js
const greet = (name) => `Hello, ${name}!`;
export default greet;
```

## 2. Importing Modules

You can import exported values into another module using the `import` keyword.

### Named Imports

```javascript
// app.js
import { add, subtract, multiply } from './math.js';

console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(5, 3));
console.log('Multiply:', multiply(5, 3));
```

### Default Imports

```javascript
// app.js
import myGreetFunction from './greeter.js';

console.log(myGreetFunction('Alice'));
```

### Importing All as a Namespace

You can import all named exports from a module into a single object using `* as`.

```javascript
// app.js
import * as MathFunctions from './math.js';

console.log('Add (namespace):', MathFunctions.add(10, 2));
```

## 3. Module Scope

Variables declared within a module are scoped to that module and are not accessible globally unless explicitly exported.

## 4. Browser Usage

To use ES Modules in a browser, you need to include your script with `type="module"`.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Modules</title>
</head>
<body>
    <script type="module" src="./app.js"></script>
</body>
</html>
```

## 5. Node.js Usage

In Node.js, you can use ES Modules by:

-   Using the `.mjs` file extension for your module files.
-   Setting `"type": "module"` in your `package.json` file.

```json
// package.json
{
  "type": "module"
}
```

Then you can use `import` and `export` syntax directly in your `.js` files.
