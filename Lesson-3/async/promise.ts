// Function returning a Promise with a delay
function fetchDataPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Data');
    }, 2000);
  });
}

/* fetchDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  }); */

// Function to fetch data asynchronously
function getDataPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Data is fetched`);
      resolve('Data 1');
    }, 1000);
  });
}

// Function to process fetched data asynchronously
function processDataPromise(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${data} is fetching`);
      resolve(data + ' - Processed');
    }, 1000);
  });
}

// Function to save processed data asynchronously
function saveDataPromise(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${data} is saving`);
      resolve('Data saved');
    }, 1000);
  });
}

// Chained promise calls to handle data processing
getDataPromise()
  .then((data1) => processDataPromise(data1))
  .then((processedData) => saveDataPromise(processedData))
  .then((savedData) => console.log(savedData))
  .catch((error) => console.error(error));
