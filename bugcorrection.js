Certainly! Below are the corrected assignments with both the questions (including the errors) and the corrected solutions.

### 1. **API Configuration Variables**

**Question (with Error):**
```javascript
const BASE_URL = 'https://api.example.com/v1';
const API_KEY = 'your-api-key-here'; // Incorrect use of const

API_KEY = 'new-api-key'; // This line will throw an error

console.log(BASE_URL);
console.log(API_KEY);
```

**Solution:**
```javascript
const BASE_URL = 'https://api.example.com/v1';
let API_KEY = 'your-api-key-here'; // Change const to let

API_KEY = 'new-api-key'; // This line is now valid

console.log(BASE_URL);
console.log(API_KEY);
```

### 2. **Simple API URL Constructor**

**Question (with Error):**
```javascript
function constructApiUrl(endpoint) {
  return `${endpoint}`; // Missing base URL
}

console.log(constructApiUrl('weather'));
// Expected output: https://api.example.com/v1/weather
```

**Solution:**
```javascript
const BASE_URL = 'https://api.example.com/v1'; // Add the base URL

function constructApiUrl(endpoint) {
  return `${BASE_URL}/${endpoint}`;
}

console.log(constructApiUrl('weather'));
// Expected output: https://api.example.com/v1/weather
```

### 3. **Basic API Response Object**

**Question (with Error):**
```javascript
const apiResponse = {
  status: 200,
  temperature: 22,
  humidity: 60,
  windSpeed: 5,
  error: null
}; // Incorrect nesting of properties

console.log(JSON.stringify(apiResponse, null, 2));
```

**Solution:**
```javascript
const apiResponse = {
  status: 200,
  data: { // Nest properties under a 'data' key
    temperature: 22,
    humidity: 60,
    windSpeed: 5
  },
  error: null
};

console.log(JSON.stringify(apiResponse, null, 2));
```

### 4. **API Endpoints Array**

**Question (with Error):**
```javascript
const weatherEndpoints = [
  'current',
  'forecast',
  'current', // Duplicate endpoint
  'alerts'
];

console.log(weatherEndpoints);
```

**Solution:**
```javascript
const weatherEndpoints = [
  'current',
  'forecast',
  'alerts' // Remove the duplicate 'current'
];

console.log(weatherEndpoints);
```

### 5. **Simple Data Transformation**

**Question (with Error):**
```javascript
function simplifyWeatherData(data) {
  return {
    temp: data.temperature,
    humid: data.humid // Incorrect property name
  };
}

const weatherData = { temperature: 25, humidity: 70 };
console.log(simplifyWeatherData(weatherData));
```

**Solution:**
```javascript
function simplifyWeatherData(data) {
  return {
    temp: data.temperature,
    humid: data.humidity // Correct the property name to 'humidity'
  };
}

const weatherData = { temperature: 25, humidity: 70 };
console.log(simplifyWeatherData(weatherData));
```

### 6. **Basic API Result Filter**

**Question (with Error):**
```javascript
function filterHotDays(temperatures) {
  return temperatures.filter(temp => temp >= 30); // Incorrect comparison operator
}

const temps = [28, 32, 30, 25, 35];
console.log(filterHotDays(temps));
// Expected output: [32, 35]
```

**Solution:**
```javascript
function filterHotDays(temperatures) {
  return temperatures.filter(temp => temp > 30); // Change comparison to '>'
}

const temps = [28, 32, 30, 25, 35];
console.log(filterHotDays(temps));
// Expected output: [32, 35]
```

### 7. **Simple Error Handler**

**Question (with Error):**
```javascript
function handleApiError(response) {
  console.error(`Error ${response.status}: ${response.message}`); // Missing condition check
}

handleApiError({ status: 200, message: 'OK' });
// Should not log anything for status 200
```

**Solution:**
```javascript
function handleApiError(response) {
  if (response.status !== 200) { // Add condition check
    console.error(`Error ${response.status}: ${response.message}`);
  }
}

handleApiError({ status: 200, message: 'OK' });
// Should not log anything for status 200
```

### 8. **Basic Async API Call**

**Question (with Error):**
```javascript
async function fetchWeather(city) {
  const response = fetch(`https://api.example.com/weather?city=${city}`); // Missing await keyword
  const data = response.json(); // Missing await keyword
  return data;
}

// Usage:
fetchWeather('London').then(console.log);
```

**Solution:**
```javascript
async function fetchWeather(city) {
  const response = await fetch(`https://api.example.com/weather?city=${city}`); // Add await
  const data = await response.json(); // Add await
  return data;
}

// Usage:
fetchWeather('London').then(console.log);
```

### 9. **Simple Data Processing Chain**

**Question (with Error):**
```javascript
function fetchData() {
  return Promise.resolve([1, 2, 3, 4, 5]);
}

function processData(data) {
  return data.map(n => n * 2);
}

async function getProcessedData() {
  const rawData = fetchData(); // Missing await
  return processData(rawData);
}

getProcessedData().then(console.log);
```

**Solution:**
```javascript
function fetchData() {
  return Promise.resolve([1, 2, 3, 4, 5]);
}

function processData(data) {
  return data.map(n => n * 2);
}

async function getProcessedData() {
  const rawData = await fetchData(); // Add await
  return processData(rawData);
}

getProcessedData().then(console.log);
```

### 10. **Basic Rate Limiter**

**Question (with Error):**
```javascript
function createRateLimiter(limit, interval) {
  let calls = 0;
  let startTime = Date.now();

  return function() {
    const currentTime = Date.now();
    if (currentTime - startTime < interval) { // Incorrect time comparison
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
console.log(rateLimiter()); // true (incorrect, should be false)
```

**Solution:**
```javascript
function createRateLimiter(limit, interval) {
  let calls = 0;
  let startTime = Date.now();

  return function() {
    const currentTime = Date.now();
    if (currentTime - startTime > interval) { // Fix the comparison to '>'
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
console.log(rateLimiter()); // false (corrected)
```

These are the corrected versions of each assignment, addressing the initial errors and providing the correct solutions.
