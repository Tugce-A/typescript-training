// Async function returning a Promise
function fetchDataAwait(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000);
  });
}

// Async function using await to fetch data
async function displayData() {
  try {
    const data = await fetchDataAwait();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//displayData(); // Uncomment to execute

// Function returning a Promise with a delay
function getDataAwait(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Data is fetched`);
      resolve('Data 1');
    }, 1000);
  });
}

// Function that processes data asynchronously
function processDataAwait(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${data} is fetching`);
      resolve(data + ' - Processed');
    }, 1000);
  });
}

// Function that saves processed data asynchronously
function saveDataAwait(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${data} is saving`);
      resolve('Data saved');
    }, 1000);
  });
}

// Async function that handles the entire data process
async function processAndSaveData() {
  try {
    const data = await getDataAwait();
    const processedData = await processDataAwait(data);
    console.log('Example');
    const savedData = await saveDataAwait(processedData);
    console.log(savedData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

processAndSaveData(); // Initiates the async process
