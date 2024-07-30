`program1`
   const BASE_URL = 'https://api.example.com/v1';
   const API_KEY = 'your-api-key-here';

   console.log(BASE_URL);
   console.log(API_KEY);


`program2`
   function constructApiUrl(endpoint) {
    return `${BASE_URL}/${endpoint}`;
  }

  console.log(constructApiUrl('weather'));

`program3`
const apiResponse = {
    status: 200,
    data: {
      temperature: 22,
      humidity: 60,
      windSpeed: 5,
    },
    error: null,
  };

  console.log(JSON.stringify(apiResponse, null, 2));

`program4`
const weatherEndpoints = ["current","forecast", "current","alerts"];

  console.log(weatherEndpoints);

 `program5`
 function simplifyWeatherData(data) {
    return {
      temp: data.temperature,
      humid: data.humidity
    };
  }

  const weatherData = { temperature: 25, humidity: 70 };
  console.log(simplifyWeatherData(weatherData)); 

`program6`
function filterHotDays(temperatures) {
    return temperatures.filter(temp => temp >= 30);
  }

  const temps = [28, 32, 30, 25, 35];
  console.log(filterHotDays(temps));

  `program7`
  function handleApiError(response) {
    if(response.status>=200){
      console.error(`Error ${response.status}: ${response.message} `);
      }
      if(response.errors){
        response.errors.forEach((err) => console.error(`- ${err}`));
      }
    }
  
    handleApiError({ status: 200, message: 'OK',errors:["Resources doesnot exist"]});

    `program8`
globalThis.fetch = async (url) => {
  console.log(`Fetching URL: ${url}`);
  return {
    ok: true,
    json: async () => ({
      city: 'London',
      temperature: '15°C',
      description: 'cloudy',
      humidity: '82%'
    })
  };
};

async function fetchWeather(city) {
    const response = await fetch(`https://api.example.com/weather?city=${city}`);
    const data = await response.json();
    return data;
  } 

fetchWeather('London').then(console.log);


`program9`
function fetchData() {
  return Promise.resolve([1, 2, 3, 4, 5]);
}

function processData(data) {
  return data.map(n => n * 2);
}

async function getProcessedData() {
  const rawData = await fetchData();
  return processData(rawData);
}

getProcessedData().then(console.log);

`program10`
function createRateLimiter(limit, interval) {
  let calls = 0;
  let startTime = Date.now();

  return function() {
    const currentTime = Date.now();
    if (currentTime - startTime >= interval) {
      calls = 0;
      startTime = currentTime;
    }

    if (calls < limit) {
      calls++;
      return true;
    } else {
      return false;
    }
  };
}

const rateLimiter = createRateLimiter(3, 1000); // 3 calls per second
console.log(rateLimiter()); // true
console.log(rateLimiter()); // true
console.log(rateLimiter()); // true
console.log(rateLimiter()); // Should be false, but might be true
