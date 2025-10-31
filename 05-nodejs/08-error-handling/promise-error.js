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
