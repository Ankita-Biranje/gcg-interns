// Asynchronous JavaScript is a crucial concept in Node.js.
// Many operations in Node.js, such as reading files or making network requests, are asynchronous.
// This means that they don't block the execution of the rest of the code.

// Promises are a way to handle asynchronous operations in a more readable way than callbacks.
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

// async/await is a modern syntax for working with Promises.
// It makes asynchronous code look and behave more like synchronous code.

// This function simulates an asynchronous operation that takes 2 seconds to complete.
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data has been fetched!");
        }, 2000);
    });
}

// An async function is a function that is declared with the 'async' keyword.
// Inside an async function, you can use the 'await' keyword.
async function processData() {
    console.log("Fetching data...");

    // The 'await' keyword pauses the execution of the function until the Promise is resolved.
    const data = await fetchData();

    console.log(data);
    console.log("Data has been processed.");
}

processData();

console.log("This message is logged before the data is fetched.");
