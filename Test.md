
### **Questions with Errors**

1. **Q:** Declare a variable using `var` and then redeclare it using `let`. Is this allowed in JavaScript? Why or why not?
    ```javascript
    var age = 25;
    let age = 30;
    ```
    
2. **Q:** Write a function that takes two numbers and returns their difference. Use arrow function syntax.
    ```javascript
    const difference = (a, b) => a - b
    console.log(difference(5, 3)) // Outputs: 2
    ```

3. **Q:** Create an array of numbers and use the `map` method to double each number. Log the original array.
    ```javascript
    let numbers = [1, 2, 3, 4];
    let doubled = numbers.map(num => num * 2);
    console.log(numbers); // Outputs: [2, 4, 6, 8]
    ```

4. **Q:** Declare an object representing a user with properties `name` and `age`. Attempt to update the `name` property using object destructuring.
    ```javascript
    let user = { name: "John", age: 30 };
    let { name } = user;
    name = "Jane";
    console.log(user.name); // Outputs: Jane
    ```

5. **Q:** Write a function that logs the square root of a number using the `Math.sqrt` method. Use a default parameter of `4` if no argument is provided.
    ```javascript
    function logSquareRoot(num = Math.sqrt(4)) {
      console.log(num);
    }
    logSquareRoot(); // Outputs: 2
    ```

6. **Q:** Create an array of fruits and use the `push` method to add a new fruit to the beginning of the array. Log the updated array.
    ```javascript
    let fruits = ["apple", "banana"];
    fruits.push("orange");
    console.log(fruits); // Outputs: ["orange", "apple", "banana"]
    ```

7. **Q:** Write a recursive function that calculates the factorial of a number but terminates the recursion at 0. Use the base case of `n === 1`.
    ```javascript
    function factorial(n) {
      if (n === 1) return 1;
      return n * factorial(n - 1);
    }
    console.log(factorial(5)); // Outputs: 120
    ```

8. **Q:** Create an object representing a car with properties `make`, `model`, and `year`. Try to change the `year` property inside a function.
    ```javascript
    const car = { make: "Toyota", model: "Corolla", year: 2020 };
    function updateYear(newYear) {
      car.year = newYear;
    }
    updateYear(2021);
    console.log(car.year); // Outputs: 2020
    ```

9. **Q:** Use the `reduce` method to sum all elements in an array of numbers starting with an initial value of `0`. Log the final sum.
    ```javascript
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Outputs: 10
    ```

10. **Q:** Write a function that reverses the characters in a string and logs the result. Use the `reverse` method directly on the string.
    ```javascript
    function reverseString(str) {
      console.log(str.reverse());
    }
    reverseString("hello"); // Outputs: "olleh"
    ```

### **Corrected Answers**

1. **Error:** You cannot redeclare a variable using `let` if it has already been declared using `var` in the same scope.
    ```javascript
    var age = 25;
    let age = 30; // SyntaxError: Identifier 'age' has already been declared
    ```

2. **Error:** The arrow function syntax is correct, but there is a missing semicolon after the function.
    ```javascript
    const difference = (a, b) => a - b;
    console.log(difference(5, 3)); // Outputs: 2
    ```

3. **Error:** The original array `numbers` is unchanged; it should output `[1, 2, 3, 4]` instead.
    ```javascript
    let numbers = [1, 2, 3, 4];
    let doubled = numbers.map(num => num * 2);
    console.log(numbers); // Outputs: [1, 2, 3, 4]
    ```

4. **Error:** Object destructuring creates a copy of the value, not a reference, so updating `name` does not affect the `user` object.
    ```javascript
    let user = { name: "John", age: 30 };
    let { name } = user;
    name = "Jane";
    console.log(user.name); // Outputs: John
    ```

5. **Error:** The default parameter should be the number itself, not the result of `Math.sqrt`.
    ```javascript
    function logSquareRoot(num = 4) {
      console.log(Math.sqrt(num));
    }
    logSquareRoot(); // Outputs: 2
    ```

6. **Error:** The `push` method adds elements to the end of the array, not the beginning.
    ```javascript
    let fruits = ["apple", "banana"];
    fruits.unshift("orange");
    console.log(fruits); // Outputs: ["orange", "apple", "banana"]
    ```

7. **Error:** The recursion should terminate when `n === 0`, not `n === 1`, since factorial of 0 is 1.
    ```javascript
    function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    }
    console.log(factorial(5)); // Outputs: 120
    ```

8. **Error:** The `const` declaration allows you to change properties of an object, so the `year` should update correctly.
    ```javascript
    const car = { make: "Toyota", model: "Corolla", year: 2020 };
    function updateYear(newYear) {
      car.year = newYear;
    }
    updateYear(2021);
    console.log(car.year); // Outputs: 2021
    ```

9. **Correction:** The original code is correct. The sum should be `10`.
    ```javascript
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Outputs: 10
    ```

10. **Error:** The `reverse` method is not available on strings directly; you need to split the string into an array first.
    ```javascript
    function reverseString(str) {
      console.log(str.split("").reverse().join(""));
    }
    reverseString("hello"); // Outputs: "olleh"
    ``` 

This should test the students' attention to detail and understanding of JavaScript concepts.
