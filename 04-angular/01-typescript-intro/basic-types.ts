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
