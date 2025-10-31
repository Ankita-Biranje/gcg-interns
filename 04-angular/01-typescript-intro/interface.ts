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
