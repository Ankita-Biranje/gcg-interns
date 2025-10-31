# Introduction to TypeScript

TypeScript is a superset of JavaScript that adds optional static typing to the language. It compiles down to plain JavaScript, meaning it can run in any JavaScript environment (browsers, Node.js, etc.). The main benefit of TypeScript is that it helps catch errors during development, before your code even runs, leading to more robust and maintainable applications.

## 1. Why TypeScript?

-   **Static Typing**: Catch errors early during development.
-   **Improved Readability**: Code becomes easier to understand with explicit types.
-   **Better Tooling**: Enhanced autocompletion, navigation, and refactoring in IDEs.
-   **Scalability**: Easier to manage large codebases.
-   **Modern JavaScript Features**: Supports the latest ECMAScript features.

## 2. Basic Types

TypeScript introduces several basic types:

```typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
let fullName: string = `Bob Bobbington`; // Template strings

// Array
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];

// Tuple (fixed number of elements whose types are known)
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum (a way of giving more friendly names to sets of numeric values)
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Any (opt-out of type-checking)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void (for functions that don't return a value)
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never (for functions that never return)
function error(message: string): never {
  throw new Error(message);
}

// Object (non-primitive type)
let obj: object = { name: "Alice" };
```

## 3. Interfaces

Interfaces are a powerful way to define contracts within your code and with code outside of your project. They define the shape of an object.

```typescript
// interface.ts
interface User {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  readonly id: number; // Readonly property
}

function greetUser(user: User) {
  console.log(`Hello, ${user.firstName} ${user.lastName}!`);
  if (user.age) {
    console.log(`You are ${user.age} years old.`);
  }
}

let user1: User = { firstName: "John", lastName: "Doe", id: 1 };
greetUser(user1);

let user2: User = { firstName: "Jane", lastName: "Smith", age: 25, id: 2 };
greetUser(user2);

// user1.id = 3; // Error: Cannot assign to 'id' because it is a read-only property.
```

## 4. Classes

TypeScript fully supports ES6 classes, adding features like access modifiers (`public`, `private`, `protected`).

```typescript
// class.ts
class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

## 5. Compilation

TypeScript code needs to be compiled into JavaScript. You can do this using the TypeScript compiler (`tsc`).

1.  **Install TypeScript globally (if not already installed):**
    ```bash
    npm install -g typescript
    ```
2.  **Compile a TypeScript file:**
    ```bash
    tsc your-file.ts
    ```
    This will generate a `your-file.js` file in the same directory.

3.  **Initialize a TypeScript project (creates `tsconfig.json`):**
    ```bash
    tsc --init
    ```
    The `tsconfig.json` file allows you to configure various TypeScript compiler options.
