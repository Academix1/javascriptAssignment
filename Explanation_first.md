1. First, we define our constants:

```javascript
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "49a5508b99e54cbf67438655e1565e32";
```

These are used to construct the URL for the API request. The base URL points to The Movie Database (TMDB) API, and the API key is required for authentication.

2. Next, we define our `fetchPopularMovies` function:

```javascript
const fetchPopularMovies = async () => {
  // ... function body ...
};
```

This is an asynchronous function that will fetch popular movies from the TMDB API.

3. Inside the function, we use a try-catch block for error handling:

```javascript
try {
  // ... API request and data processing ...
} catch (error) {
  console.error("Error fetching popular movies:", error);
  return [];
}
```

4. We make the API request:

```javascript
const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
```

This sends a GET request to the TMDB API's "popular movies" endpoint.

5. We check if the response is OK:

```javascript
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
```

If the response is not in the 200-299 range, we throw an error.

6. We parse the JSON response:

```javascript
const data = await response.json();
```

7. We process the data:

```javascript
return data.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  posterPath: movie.poster_path,
  voteAverage: movie.vote_average,
  releaseDate: movie.release_date,
}));
```

This maps over the results array, extracting specific properties from each movie object.

8. Finally, we use the function:

```javascript
fetchPopularMovies()
  .then((movies) => {
    console.log(movies);
    movies.forEach((movie) => {
      console.log(
        `${movie.title} (${movie.releaseDate.split("-")[0]}) - Rating: ${
          movie.voteAverage
        }`
      );
    });
  })
  .catch((error) => console.error(error));
```

This calls the `fetchPopularMovies` function, then logs the entire array of movies, and then logs a formatted string for each movie. The `releaseDate.split("-")[0]` extracts just the year from the release date.

To run this code and see the results, you would execute it in a JavaScript environment (like Node.js or a browser console). The output would be an array of movie objects, followed by a series of lines, each containing a movie title, its release year, and its rating.

For example, the output might look something like this:

```
[{id: 123, title: "Movie 1", posterPath: "/path1.jpg", voteAverage: 7.5, releaseDate: "2023-07-15"}, ...]
Movie 1 (2023) - Rating: 7.5
Movie 2 (2022) - Rating: 8.1
...
```

This code provides a practical example of how to fetch data from an API, process it, and display the results.
