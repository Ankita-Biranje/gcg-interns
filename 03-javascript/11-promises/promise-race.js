const promiseA = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promiseA, promiseB]).then((value) => {
  console.log('Promise.race result:', value);
});
