
# 10 JavaScript Assignments for API Work with Example Outputs

1. **Variable Declaration and API Configuration**
   Create variables to store API configuration details. Use `const` for values that won't change (like the base URL) and `let` for values that might change (like an API key).

   ```javascript
   const BASE_URL = "https://api.example.com/v1";
   let apiKey = "your-api-key-here";

   console.log(BASE_URL); // Output: https://api.example.com/v1
   console.log(apiKey); // Output: your-api-key-here
   ```

2. **Function to Construct API URL**
   Write a function that takes endpoint parameters and constructs a full API URL.

   ```javascript
   function constructApiUrl(endpoint, params) {
     const url = new URL(`${BASE_URL}/${endpoint}`);
     Object.keys(params).forEach((key) =>
       url.searchParams.append(key, params[key])
     );
     return url.toString();
   }

   console.log(constructApiUrl("weather", { city: "London", units: "metric" }));
   // Output: https://api.example.com/v1/weather?city=London&units=metric
   ```

3. **Object for API Response**
   Create an object to represent a typical API response, including status, data, and error properties.

   ```javascript
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
   /* Output:
   {
     "status": 200,
     "data": {
       "temperature": 22,
       "humidity": 60,
       "windSpeed": 5
     },
     "error": null
   }
   */
   ```

4. **Array of API Endpoints**
   Create an array of common API endpoints for a hypothetical weather service.

   ```javascript
   const weatherEndpoints = ["current", "forecast", "historical", "alerts"];

   console.log(weatherEndpoints);
   // Output: ['current', 'forecast', 'historical', 'alerts']
   ```

5. **Map Function for Data Transformation**
   Write a function that uses `map` to transform an array of API response objects into a simplified format.

   ```javascript
   function transformApiData(dataArray) {
     return dataArray.map((item) => ({
       date: item.date,
       temp: item.main.temp,
     }));
   }

   const apiData = [
     {
       date: "2023-07-01",
       main: { temp: 22, humidity: 60 },
       wind: { speed: 5 },
     },
     {
       date: "2023-07-02",
       main: { temp: 24, humidity: 55 },
       wind: { speed: 4 },
     },
   ];

   console.log(transformApiData(apiData));
   /* Output:
   [
     { date: '2023-07-01', temp: 22 },
     { date: '2023-07-02', temp: 24 }
   ]
   */
   ```

6. **Filter Function for API Results**
   Create a function that uses `filter` to extract specific items from an API response array based on a condition.

   ```javascript
   function filterApiResults(resultsArray, condition) {
     return resultsArray.filter(condition);
   }

   const results = [
     { id: 1, value: 10 },
     { id: 2, value: 20 },
     { id: 3, value: 30 },
   ];

   console.log(filterApiResults(results, (item) => item.value > 15));
   /* Output:
   [
     { id: 2, value: 20 },
     { id: 3, value: 30 }
   ]
   */
   ```

7. **API Error Handling Function**
   Write a function that takes an API response object and handles potential errors, using object destructuring.

   ```javascript
   function handleApiError({ status, message, errors }) {
     if (status >= 400) {
       console.error(`Error ${status}: ${message}`);
       if (errors) {
         errors.forEach((err) => console.error(`- ${err}`));
       }
     }
   }

   handleApiError({
     status: 404,
     message: "Not Found",
     errors: ["Resource does not exist"],
   });
   /* Output:
   Error 404: Not Found
   - Resource does not exist
   */
   ```

8. **Async Function for API Call**
   Create an async function that simulates making an API call and handling the response.

   ```javascript
   async function fetchApiData(endpoint) {
     try {
       const response = await fetch(`${BASE_URL}/${endpoint}`);
       const data = await response.json();
       return data;
     } catch (error) {
       console.error("API call failed:", error);
     }
   }

   // Usage (in an async context):
   const data = await fetchApiData("weather");
   console.log(data);
   /* Output (example):
   {
     temperature: 25,
     humidity: 65,
     windSpeed: 10
   }
   */
   ```

9. **Data Processing Pipeline**
   Write a series of functions that process API data through multiple steps (fetch, transform, filter).

   ```javascript
   async function processApiData() {
     const rawData = await fetchApiData("forecast");
     const transformedData = transformApiData(rawData);
     const filteredData = filterApiResults(
       transformedData,
       (item) => item.temp > 20
     );
     return filteredData;
   }

   // Usage (in an async context):
   const processedData = await processApiData();
   console.log(processedData);
   /* Output (example):
   [
     { date: '2023-07-01', temp: 22 },
     { date: '2023-07-03', temp: 25 }
   ]
   */
   ```

10. **API Rate Limiting Function**
    Create a function that implements basic rate limiting for API calls using closures.

    ```javascript
    function createRateLimiter(limit, interval) {
      let calls = 0;
      let startTime = Date.now();

      return function () {
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

    console.log(rateLimiter()); // Output: true
    console.log(rateLimiter()); // Output: true
    console.log(rateLimiter()); // Output: true
    console.log(rateLimiter()); // Output: false (rate limit exceeded)
    ```

Remember, these are example outputs. Your actual implementation might vary slightly, but the general structure and functionality should be similar.
