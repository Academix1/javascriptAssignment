//1//
const BASE_URL = "https://api.example.com/v1";
   let apiKey = "your-api-key-here";

   console.log(BASE_URL); // Output: https://api.example.com/v1
   console.log(apiKey);
//2//
   function constructApiUrl(endpoint, params) {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    return url.toString();
  }

  console.log(constructApiUrl("weather", { city: "London", units: "metric" }));
//3//
const apiResponse = {
  status: 200,
  data: {
    temperature: 22,
    humidity: 60,
    windSpeed: 5
  },
  error: null
};

console.log(JSON.stringify(apiResponse, null, 2));


//4//
const weatherEndpoints = ["current","forecast","current","alerts"];

   console.log(weatherEndpoints);

//5//

function simplifyWeatherData(data) {
  // Transform the data into an array of objects with `date` and `temp` properties
  return data.map(entry => ({
    date: entry.date,
    temp: entry.temperature
  }));
}

const weatherData = [
  { date: '2023-07-01', temperature: 22 },
  { date: '2023-07-02', temperature: 24 }
];

console.log(simplifyWeatherData(weatherData));

//6/
function filterApiResults(resultsArray, condition) {
  return resultsArray.filter(condition);

}
const results = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];

console.log(filterApiResults(results, (item) => item.value > 15));



//7//
  function handleApiError(response) {
  if (response.status >= 400) {
    console.error(`Error ${response.status}: ${response.message}`);
    if (response.errors && response.errors.length > 0) {
      response.errors.forEach((error, index) => {
        console.error(`- ${error}`);
      });
    }
  } else {
    console.log(`Success ${response.status}: ${response.message}`);
  }
}

// Test cases
handleApiError({
  status: 404,
  message: 'Not Found',
  errors: ['Resource does not exist']
});


//8//
async function fetchApiData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
  }
}


   // Usage:
   const data=await fetchApiData("weather");
   console.log(data);

//9//
function fetchData() {
  return Promise.resolve([1, 2, 3, 4, 5]);
}

function processData(data) {
  return data.map(n => n * 2);
}

async function getProcessedData() {
  const rawData = await fetchData(); 
  return processData(rawData); // Process the data
}

getProcessedData().then(console.log); // Log the processed data

//10//
  function createRateLimiter(limit, interval) {
  let calls = 0;
  let startTime = Date.now();

  return function() {
    const currentTime = Date.now();
    if (currentTime - startTime >= interval) {
      calls = 0;
      startTime = currentTime;
      console.log("Interval reset. Calls count cleared.");
    }

    if (calls < limit) {
      calls++;
      return true;
    } else {
      return false;
    }
  };
}

// Create a rate limiter with 3 calls per second
const rateLimiter = createRateLimiter(3, 1000); 

// Test the rate limiter
console.log(rateLimiter()); // Call allowed. true
console.log(rateLimiter()); // Call allowed. true
console.log(rateLimiter()); // Call allowed. true
console.log(rateLimiter()); // Rate limit exceeded. Call denied. false



