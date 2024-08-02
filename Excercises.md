### **Step 1: Understanding Variables and Data Types**

1. **Q:** Create variables to store your name, age, and city using `let`, `const`, and `var`. Try changing the value of each variable and observe what happens.
2. **Q:** Declare a string variable with your favorite quote. Use a string method to convert it to uppercase.
3. **Q:** Create a number variable to represent your age. Write code to increment the age by 1.
4. **Q:** Declare a boolean variable to indicate if you are a student. Toggle its value from true to false.
5. **Q:** Create an array of your favorite fruits. Add a new fruit to the beginning of the array.
6. **Q:** Declare an object representing a car with properties: make, model, and year. Log the car’s make to the console.
7. **Q:** Create a variable with a null value and another with an undefined value. Print both to the console.
8. **Q:** Declare a string variable with your full name. Use a string method to extract and log just your first name.
9. **Q:** Create an object representing a book with properties title, author, and pages. Add a new property `genre` to the object.
10. **Q:** Declare a variable using `var` inside a function. Try accessing this variable outside the function. What happens?

### **Step 2: Learning Functions**

11. **Q:** Write a function that takes two numbers as arguments and returns their sum. Call the function with two numbers and log the result.
12. **Q:** Convert the above function into an arrow function and log the result.
13. **Q:** Write a function that returns the square of a number. Use default parameters to make the number default to 2 if no argument is provided.
14. **Q:** Write a function that takes a string as a parameter and returns the string reversed.
15. **Q:** Create a function that logs a greeting message using a name passed as an argument. Call the function multiple times with different names.
16. **Q:** Write an Immediately Invoked Function Expression (IIFE) that logs "This function runs immediately!" to the console.
17. **Q:** Write a function that returns an object with properties `name`, `age`, and `city`. Call the function and log the returned object.
18. **Q:** Write a recursive function that calculates the factorial of a number. Test it with the number 5.
19. **Q:** Write a function that takes a callback function as an argument and executes it. Test it with a callback that logs a message.
20. **Q:** Write a function that logs the square of a number passed as an argument. Use arrow function syntax for this task.

### **Step 3: Working with Objects and Arrays**

21. **Q:** Create an object representing a student with properties `name`, `age`, and `grades`. Add a method to the object that logs a summary of the student’s details.
22. **Q:** Use object destructuring to extract the `name` and `age` properties from the student object created above.
23. **Q:** Create an object with a nested object for `address`. Access and log the city from the nested object.
24. **Q:** Create an array of numbers. Use a loop to log each number multiplied by 3.
25. **Q:** Use array destructuring to assign the first three elements of an array to separate variables. Log these variables.
26. **Q:** Use the spread operator to merge two arrays into a new array and add a new element at the end. Log the new array.
27. **Q:** Merge two objects into a new object using the spread operator. Log the resulting object.
28. **Q:** Write a function that takes an object and updates its `city` property. Log the updated object.
29. **Q:** Create an array of objects representing different movies. Use a loop to log the title of each movie.
30. **Q:** Write a function that filters out even numbers from an array and returns the remaining odd numbers. Log the result.

### **Step 4: Using Array Methods**

31. **Q:** Use the `map` method to create a new array that contains the square roots of numbers in an existing array. Log the new array.
32. **Q:** Use the `filter` method to create a new array containing only strings that start with the letter "A" from an existing array of strings. Log the new array.
33. **Q:** Use the `reduce` method to calculate the product of all numbers in an array. Log the result.
34. **Q:** Use the `find` method to locate the first number in an array that is greater than 10. Log the result.
35. **Q:** Use the `some` method to check if any string in an array has a length greater than 5. Log the result.
36. **Q:** Use the `every` method to check if all numbers in an array are positive. Log the result.
37. **Q:** Write a function that sorts an array of numbers in descending order. Log the sorted array.
38. **Q:** Chain the `filter`, `map`, and `reduce` methods to filter out even numbers from an array, square the remaining numbers, and find their sum. Log the result.
39. **Q:** Use the `reverse` method to reverse the order of elements in an array. Log the resulting array.
40. **Q:** Use the `flat` method to flatten a deeply nested array into a single-level array. Log the resulting array.

### **Step 5: Working with Promises (Remove this step)**

### **Step 6: Working with Async/Await (Remove this step)**

### **Step 7: Fetch API for HTTP Requests**

41. **Q:** Write a function that makes a GET request to `https://jsonplaceholder.typicode.com/users` using the Fetch API. Log the names of all users.
42. **Q:** Create a function that makes a POST request to `https://jsonplaceholder.typicode.com/posts` with a new post object. Log the response.
43. **Q:** Write a function that makes a GET request to `https://jsonplaceholder.typicode.com/posts/1` and logs the post’s title and body.
44. **Q:** Create a function that handles errors when making a fetch request to an invalid URL. Log the error message to the console.
45. **Q:** Write a function that fetches data from `https://jsonplaceholder.typicode.com/comments` and filters out comments containing a specific keyword. Log the filtered comments.

### **Step 8: Combining Everything to Work with APIs**

46. **Q:** Write a function that fetches a list of users from `https://jsonplaceholder.typicode.com/users` and processes the data to return an array of user names.
47. **Q:** Create a function that fetches posts from `https://jsonplaceholder.typicode.com/posts` and sorts them by title. Log the sorted list.
48. **Q:** Write a function that fetches albums from `https://jsonplaceholder.typicode.com/albums` and counts how many albums there are. Log the total count.
49. **Q:** Create a function that fetches data from `https://jsonplaceholder.typicode.com/todos` and returns only the completed todos. Log the completed todos.
50. **Q:** Write a function that fetches posts from `https://jsonplaceholder.typicode.com/posts` and updates the title of the first post using a PUT request. Log the updated post.

---

### **Answers**

1. 
```javascript
let name = "John"; 
const age = 30; 
var city = "New York"; 

name = "Jane"; // Reassigned successfully
age = 31; // Error: Assignment to constant variable.
city = "Los Angeles"; // Reassigned successfully
```

2. 
```javascript
let quote = "The quick brown fox jumps over the lazy dog.";
console.log(quote.toUpperCase()); // Outputs: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```

3. 
```javascript
let age = 25;
age += 1; 
console.log(age); // Outputs: 26
```

4. 
```javascript
let isStudent = true;
isStudent = !isStudent; 
console.log(isStudent); // Outputs: false
```

5. 
```javascript
let fruits = ["apple", "banana", "orange"];
fruits.unshift("grape");
console.log(fruits); // Outputs: ["grape", "apple", "banana", "orange"]
```

6. 
```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log(car.make); // Outputs: Toyota
```

7. 
```javascript
let value1 = null;
let value2 = undefined;
console.log(value1); // Outputs: null
console.log(value2); // Outputs: undefined
```

8. 
```javascript
let fullName = "John Doe";
console.log(fullName.split(" ")[0]); // Outputs: John
```

9. 
```javascript
let book = {
  title: "1984",
  author: "George Orwell",
  pages: 328
};
book.genre = "Dystopian";
console.log(book); // Outputs: { title: "1984", author: "George Orwell", pages: 328, genre: "Dystopian" }
```

10. 
```javascript
function testVar() {
  var city = "Paris";
  console.log(city); // Outputs:

 Paris
}
testVar();
console.log(city); // ReferenceError: city is not defined
```

11. 
```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3)); // Outputs: 8
```

12. 
```javascript
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // Outputs: 8
```

13. 
```javascript
function square(number = 2) {
  return number * number;
}
console.log(square()); // Outputs: 4
console.log(square(3)); // Outputs: 9
```

14. 
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Outputs: olleh
```

15. 
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice"); // Outputs: Hello, Alice!
greet("Bob"); // Outputs: Hello, Bob!
```

16. 
```javascript
(function() {
  console.log("This function runs immediately!");
})(); // Outputs: This function runs immediately!
```

17. 
```javascript
function createPerson() {
  return {
    name: "John",
    age: 30,
    city: "New York"
  };
}
console.log(createPerson()); // Outputs: {name: "John", age: 30, city: "New York"}
```

18. 
```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Outputs: 120
```

19. 
```javascript
function doSomething(callback) {
  callback();
}
function myCallback() {
  console.log("Callback function executed");
}
doSomething(myCallback); // Outputs: Callback function executed
```

20. 
```javascript
const logSquare = (num) => console.log(num * num);
logSquare(4); // Outputs: 16
```

21. 
```javascript
let student = {
  name: "Alice",
  age: 20,
  grades: {
    math: "A",
    science: "B"
  },
  getSummary: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grades: ${JSON.stringify(this.grades)}`);
  }
};
student.getSummary(); // Outputs: Name: Alice, Age: 20, Grades: {"math":"A","science":"B"}
```

22. 
```javascript
let { name, age } = student;
console.log(name); // Outputs: Alice
console.log(age); // Outputs: 20
```

23. 
```javascript
let user = {
  name: "John",
  address: {
    city: "New York",
    street: "5th Avenue"
  }
};
console.log(user.address.city); // Outputs: New York
```

24. 
```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 3);
}
// Outputs: 3, 6, 9, 12, 15
```

25. 
```javascript
let array = [10, 20, 30];
let [first, second, third] = array;
console.log(first); // Outputs: 10
console.log(second); // Outputs: 20
console.log(third); // Outputs: 30
```

26. 
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArray = [...arr1, ...arr2, 7];
console.log(newArray); // Outputs: [1, 2, 3, 4, 5, 6, 7]
```

27. 
```javascript
let obj1 = { name: "Alice" };
let obj2 = { age: 25 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Outputs: { name: "Alice", age: 25 }
```

28. 
```javascript
function updateCity(person, newCity) {
  person.city = newCity;
  return person;
}
let person = { name: "John", city: "Paris" };
console.log(updateCity(person, "London")); // Outputs: { name: "John", city: "London" }
```

29. 
```javascript
let movies = [
  { title: "Inception", director: "Christopher Nolan" },
  { title: "The Matrix", director: "Wachowski Brothers" },
  { title: "Interstellar", director: "Christopher Nolan" }
];
movies.forEach(movie => {
  console.log(movie.title);
});
// Outputs: Inception, The Matrix, Interstellar
```

30. 
```javascript
function filterOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(filterOddNumbers(numbers)); // Outputs: [1, 3, 5]
```

31. 
```javascript
let numbers = [1, 4, 9, 16];
let squareRoots = numbers.map(num => Math.sqrt(num));
console.log(squareRoots); // Outputs: [1, 2, 3, 4]
```

32. 
```javascript
let strings = ["Apple", "Banana", "Apricot", "Cherry"];
let aStrings = strings.filter(str => str.startsWith("A"));
console.log(aStrings); // Outputs: ["Apple", "Apricot"]
```

33. 
```javascript
let numbers = [2, 3, 4];
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Outputs: 24
```

34. 
```javascript
let numbers = [5, 8, 12, 19];
let firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen); // Outputs: 12
```

35. 
```javascript
let strings = ["apple", "banana", "pear"];
let hasLongString = strings.some(str => str.length > 5);
console.log(hasLongString); // Outputs: true
```

36. 
```javascript
let numbers = [3, 6, 9, 12];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Outputs: true
```

37. 
```javascript
let numbers = [10, 2, 30, 25];
numbers.sort((a, b) => b - a);
console.log(numbers); // Outputs: [30, 25, 10, 2]
```

38. 
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers
  .filter(num => num % 2 !== 0)
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0);
console.log(result); // Outputs: 35
```

39. 
```javascript
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // Outputs: ["d", "c", "b", "a"]
```

40. 
```javascript
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(3);
console.log(flatArray); // Outputs: [1, 2, 3, 4]
```

41. 
```javascript
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  users.forEach(user => console.log(user.name));
}
fetchUsers(); // Outputs the names of all users
```

42. 
```javascript
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  const data = await response.json();
  console.log(data); // Outputs the created post object
}
createPost();
```

43. 
```javascript
async function fetchPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();
  console.log(post.title); // Outputs: the title of the post
  console.log(post.body);  // Outputs: the body of the post
}
fetchPost();
```

44. 
```javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://invalid-url');
    const data = await response.json();
  } catch (error) {
    console.error('Fetch error:', error); // Outputs the error message
  }
}
fetchWithErrorHandling();
```

45. 
```javascript
async function filterCommentsByKeyword(keyword) {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  const filteredComments = comments.filter(comment => comment.body.includes(keyword));
  console.log(filteredComments); // Outputs the

 filtered comments
}
filterCommentsByKeyword('qui');
```

46. 
```javascript
async function fetchUserNames() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  const names = users.map(user => user.name);
  console.log(names); // Outputs an array of user names
}
fetchUserNames();
```

47. 
```javascript
async function fetchAndSortPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  posts.sort((a, b) => a.title.localeCompare(b.title));
  console.log(posts); // Outputs the sorted posts
}
fetchAndSortPosts();
```

48. 
```javascript
async function countAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await response.json();
  console.log(`Total albums: ${albums.length}`); // Outputs the total number of albums
}
countAlbums();
```

49. 
```javascript
async function fetchCompletedTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  const completedTodos = todos.filter(todo => todo.completed);
  console.log(completedTodos); // Outputs the completed todos
}
fetchCompletedTodos();
```

50. 
```javascript
async function updateFirstPostTitle() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Updated Title',
      body: 'Updated body',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  const updatedPost = await response.json();
  console.log(updatedPost); // Outputs the updated post object
}
updateFirstPostTitle();
```

These exercises and answers should give you a solid understanding of working with variables, data types, functions, objects, arrays, and making HTTP requests using the Fetch API in JavaScript.
