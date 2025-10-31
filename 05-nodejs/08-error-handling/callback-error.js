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
