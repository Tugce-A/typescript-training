// Function using a callback to fetch data
function fetchDataCallbak(callback: (data: string) => void) {
  setTimeout(() => {
    callback('Data Fetched');
  }, 2000);
}

fetchDataCallbak((data) => {
  console.log(data);
});

// Function to get data with a callback
function getData(callback: (result: string) => void) {
  setTimeout(() => {
    console.log(`Data is fetched`);
    callback('Veri 1');
  }, 1000);
}

// Function to process data with a callback
function processData(data: string, callback: (result: string) => void) {
  setTimeout(() => {
    console.log(`${data} is processing`);
    callback(data + ' Processed');
  }, 1000);
}

// Function to save data with a callback
function saveData(data: string, callback: (result: string) => void) {
  setTimeout(() => {
    console.log(`${data} is saving`);
    callback(data + ' Saved');
  }, 1000);
}

// Callback Hell: Nested callbacks for sequential execution
getData((data1) => {
  processData(data1, (processedData) => {
    saveData(processedData, (savedData) => {
      console.log(savedData);
    });
  });
});
