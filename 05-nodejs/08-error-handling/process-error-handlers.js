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
