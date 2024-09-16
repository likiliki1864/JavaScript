//Async_Await

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000);  // Simulate a 2-second network request
    });
  }
  
  async function getData() {
    console.log("Fetching data...");
    
    let result = await fetchData();  // Wait until fetchData resolves
    console.log(result);  // Output: Data fetched!
  }
  
  getData();  // Output: Fetching data...
              // After 2 seconds: Data fetched!
