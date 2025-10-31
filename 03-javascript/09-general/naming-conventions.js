
// JavaScript Naming Conventions

// 1. Variable and Function Names: Use camelCase
// For variables and functions, the convention is to start with a lowercase letter, and then capitalize the first letter of each subsequent word.

let myVariableName = "some value";
const MAXIMUM_LOGIN_ATTEMPTS = 10; // Constants are an exception, see below

function doSomething() {
  // function body
}

// 2. Class Names: Use PascalCase
// For classes, the convention is to start with an uppercase letter, and then capitalize the first letter of each subsequent word.

class MyClass {
  constructor() {
    // constructor body
  }
}

// 3. Constant Names: Use UPPERCASE_SNAKE_CASE
// For constants (values that are not expected to change), the convention is to use all uppercase letters, with words separated by underscores.

const PI = 3.14159;
const API_KEY = "your_api_key_here";

// 4. Private Members: Use a leading underscore
// For properties or methods that are intended to be "private" to a class, it's a common convention to prefix them with an underscore.
// Note: This is just a convention, it does not actually make the member private.

class MyPrivateClass {
  constructor() {
    this._privateVariable = "I am private";
  }

  _privateMethod() {
    console.log("This is a private method");
  }
}

// 5. File Names: Use kebab-case or camelCase
// For file names, the two most common conventions are kebab-case (all lowercase, with words separated by hyphens) or camelCase.
// kebab-case is often preferred as it is more readable in URLs.

// Example:
// my-file-name.js
// myFileName.js

// Be consistent with the naming convention you choose for your project.
