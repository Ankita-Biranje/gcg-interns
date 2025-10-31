function functionStep1() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("Step 1 complete"); }, 1000);
  });
}

function functionStep2(message) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(`${message}, Step 2 complete`); }, 1000);
  });
}

function functionStep3(message) {
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
