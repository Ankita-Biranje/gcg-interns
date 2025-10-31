# Error Handling in Node.js

Error handling is a crucial aspect of building robust and reliable Node.js applications. Proper error handling ensures that your application can gracefully recover from unexpected situations and provide meaningful feedback to users or developers.

## 1. Types of Errors

In Node.js, you'll typically encounter a few types of errors:

-   **Operational Errors**: These are errors that can be anticipated and handled gracefully, such as invalid user input, network timeouts, or file not found errors. They represent expected failures in the application's operation.
-   **Programmer Errors**: These are bugs in your code that should be fixed, such as `ReferenceError`, `TypeError`, or `SyntaxError`. These usually indicate a flaw in the application logic.

## 2. Asynchronous Error Handling

Node.js is heavily asynchronous, and handling errors in asynchronous code requires special attention.

### Callbacks

When using callbacks, the common pattern is to pass an `error` object as the first argument to the callback function.

```javascript
// callback-error.js
function fetchData(callback) {
  setTimeout(() => {
    const error = new Error('Failed to fetch data');
    const data = { id: 1, name: 'Example' };

    if (Math.random() > 0.5) {
      callback(null, data); // No error, data is present
    } else {
      callback(error); // Error is present, no data
    }
  }, 1000);
}

fetchData((err, data) => {
  if (err) {
    console.error('Error with callback:', err.message);
  } else {
    console.log('Data with callback:', data);
  }
});
```

### Promises

Promises provide a more structured way to handle asynchronous errors using `.catch()`.

```javascript
// promise-error.js
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ id: 2, name: 'Promise Example' });
      } else {
        reject(new Error('Failed to fetch data via Promise'));
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then(data => console.log('Data with Promise:', data))
  .catch(err => console.error('Error with Promise:', err.message));
```

### Async/Await

With `async/await`, you can use `try...catch` blocks to handle errors in asynchronous code, making it look more like synchronous error handling.

```javascript
// async-await-error.js
async function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ id: 3, name: 'Async/Await Example' });
      } else {
        reject(new Error('Failed to fetch data via Async/Await'));
      }
    }, 1000);
  });
}

async function processData() {
  try {
    const data = await fetchDataAsync();
    console.log('Data with Async/Await:', data);
  } catch (err) {
    console.error('Error with Async/Await:', err.message);
  }
}

processData();
```

## 3. Centralized Error Handling (Express.js Example)

In web applications (e.g., with Express.js), it's common to have a centralized error handling middleware.

```javascript
// express-error-handler.js
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  // Simulate an error
  if (Math.random() > 0.5) {
    next(new Error('Something went wrong on the main route!'));
  } else {
    res.send('Welcome!');
  }
});

app.get('/broken', (req, res, next) => {
  // Simulate an error that might not be caught by a try-catch in an async handler
  throw new Error('This is a synchronous error on /broken');
});

// Error handling middleware (must have 4 arguments: err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## 4. Uncaught Exceptions and Unhandled Rejections

It's important to catch uncaught exceptions and unhandled promise rejections to prevent your Node.js process from crashing.

```javascript
// process-error-handlers.js

// Catch uncaught exceptions (synchronous errors not caught by try-catch)
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1); // Exit the process with a failure code
});

// Catch unhandled promise rejections (asynchronous errors not caught by .catch())
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1); // Exit the process with a failure code
});

// Example of an unhandled promise rejection
Promise.reject(new Error('This is an unhandled promise rejection!'));

// Example of an uncaught exception
// nonExistentFunction();
```
