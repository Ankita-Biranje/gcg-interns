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
