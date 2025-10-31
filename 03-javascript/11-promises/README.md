# JavaScript Promises

Promises are a fundamental concept for asynchronous programming in JavaScript. A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

## 1. States of a Promise

A promise can be in one of three states:

-   **Pending**: Initial state, neither fulfilled nor rejected.
-   **Fulfilled** (or **Resolved**): The operation completed successfully.
-   **Rejected**: The operation failed.

## 2. Creating a Promise

A promise is created using the `Promise` constructor, which takes a single function (the `executor`) as an argument. The executor function itself takes two arguments: `resolve` and `reject`.

```javascript
// promise-creation.js
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Operation successful!"); // Resolve the promise with a value
    } else {
      reject("Operation failed!"); // Reject the promise with an error
    }
  }, 2000);
});

console.log("Promise created and pending...");

myPromise.then((message) => {
  console.log("Promise fulfilled:", message);
}).catch((error) => {
  console.error("Promise rejected:", error);
});
```

## 3. Chaining Promises

Promises can be chained together using the `.then()` method. Each `.then()` returns a new promise, allowing you to perform a sequence of asynchronous operations.

```javascript
// promise-chaining.js
functionStep1() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("Step 1 complete"); }, 1000);
  });
}

functionStep2(message) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(`${message}, Step 2 complete`); }, 1000);
  });
}

functionStep3(message) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(`${message}, Step 3 complete`); }, 1000);
  });
}

functionStep1()
  .then((result1) => {
    console.log(result1);
    return functionStep2(result1);
  })
  .then((result2) => {
    console.log(result2);
    return functionStep3(result2);
  })
  .then((result3) => {
    console.log(result3);
    console.log("All steps complete!");
  })
  .catch((error) => {
    console.error("An error occurred in the chain:", error);
  });
```

## 4. `Promise.all()` and `Promise.race()`

-   **`Promise.all()`**: Takes an iterable of promises as input and returns a single `Promise` that resolves when all of the input promises have resolved, or rejects when any of the input promises rejects.

    ```javascript
    // promise-all.js
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log('Promise.all results:', values);
    });
    // Expected output: Promise.all results: [3, 42, "foo"]
    ```

-   **`Promise.race()`**: Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.

    ```javascript
    // promise-race.js
    const promiseA = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'one');
    });

    const promiseB = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'two');
    });

    Promise.race([promiseA, promiseB]).then((value) => {
      console.log('Promise.race result:', value);
    });
    // Expected output: Promise.race result: "two"
    ```
