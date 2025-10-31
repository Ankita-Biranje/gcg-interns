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
