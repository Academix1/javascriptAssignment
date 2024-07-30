# Assignments with Errors to Fix

For each of the following assignments, there is one intentional error. Your task is to identify and fix the error.

1. **API Configuration Variables (Error: Incorrect use of const)**
   ```javascript
   const BASE_URL = 'https://api.example.com/v1';
   const API_KEY = 'your-api-key-here';

   API_KEY = 'new-api-key'; // This line should cause an error

   console.log(BASE_URL);
   console.log(API_KEY);
   ```

2. **Simple API URL Constructor (Error: Missing base URL)**
   ```javascript
   function constructApiUrl(endpoint) {
     return `/${endpoint}`;
   }

   console.log(constructApiUrl('weather'));
   // Expected output: https://api.example.com/v1/weather
   ```

3. **Basic API Response Object (Error: Incorrect nesting of properties)**
   ```javascript
   const apiResponse = {
     status: 200,
     temperature: 22,
     humidity: 60,
     windSpeed: 5,
     error: null
   };

   console.log(JSON.stringify(apiResponse, null, 2));
   ```

4. **API Endpoints Array (Error: Duplicate endpoint)**
   ```javascript
   const weatherEndpoints = [
     'current',
     'forecast',
     'current',
     'alerts'
   ];

   console.log(weatherEndpoints);
   ```

5. **Simple Data Transformation (Error: Incorrect property access)**
   ```javascript
   function simplifyWeatherData(data) {
     return {
       temp: data.temperature,
       humid: data.humid
     };
   }

   const weatherData = { temperature: 25, humidity: 70 };
   console.log(simplifyWeatherData(weatherData));
   ```

6. **Basic API Result Filter (Error: Incorrect comparison operator)**
   ```javascript
   function filterHotDays(temperatures) {
     return temperatures.filter(temp => temp >= 30);
   }

   const temps = [28, 32, 30, 25, 35];
   console.log(filterHotDays(temps));
   // Expected output: [32, 30, 35]
   ```

7. **Simple Error Handler (Error: Missing condition check)**
   ```javascript
   function handleApiError(response) {
     console.error(`Error ${response.status}: ${response.message}`);
   }

   handleApiError({ status: 200, message: 'OK' });
   // Should not log anything for status 200
   ```

8. **Basic Async API Call (Error: Missing await keyword)**
   ```javascript
   async function fetchWeather(city) {
     const response = fetch(`https://api.example.com/weather?city=${city}`);
     const data = response.json();
     return data;
   }

   // Usage:
   fetchWeather('London').then(console.log);
   ```

9. **Simple Data Processing Chain (Error: Incorrect function call)**
   ```javascript
   function fetchData() {
     return Promise.resolve([1, 2, 3, 4, 5]);
   }

   function processData(data) {
     return data.map(n => n * 2);
   }

   async function getProcessedData() {
     const rawData = fetchData();
     return processData(rawData);
   }

   getProcessedData().then(console.log);
   ```

10. **Basic Rate Limiter (Error: Incorrect time comparison)**
    ```javascript
    function createRateLimiter(limit, interval) {
      let calls = 0;
      let startTime = Date.now();

      return function() {
        const currentTime = Date.now();
        if (currentTime - startTime <= interval) {
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
    ```

For each assignment, try to identify the error and propose a fix. This exercise will help you improve your debugging skills and deepen your understanding of these JavaScript concepts in the context of API interactions.