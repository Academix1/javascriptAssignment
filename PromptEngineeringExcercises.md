
## Exercise 1: Understanding AI and ChatGPT

**Task:**  
Ask ChatGPT to explain how it works in its own words.

**Solution:**  
```
explanation about how LLM model works.
```

## Exercise 2: Basic Principles of Prompt Engineering

### Part A: Clarity

**Task:**  
Write a prompt asking ChatGPT to generate a JavaScript function that filters an array to only include even numbers.

**Solution:**  
```text
Prompt: "Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers."

Expected Response:
```javascript
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(array);
console.log(evenNumbers); // Output: [2, 4, 6]
```
```

### Part B: Specificity

**Task:**  
Write a prompt asking ChatGPT to create a JavaScript function that finds the maximum value in a nested array (an array of arrays).

**Solution:**  
```text
Prompt: "Create a JavaScript function that takes an array of arrays (nested array) and returns the maximum value found in the entire structure. Ensure the function handles arrays of varying depths."

Expected Response:
```javascript
function findMaxInNestedArray(arrays) {
    return Math.max(...arrays.flat(Infinity));
}

// Example usage:
const nestedArray = [[1, 2, 3], [4, 5], [6, [7, 8]]];
const maxValue = findMaxInNestedArray(nestedArray);
console.log(maxValue); // Output: 8
```
```

### Part C: Context

**Task:**  
Write a prompt asking ChatGPT to generate a function that adds items to a shopping cart object in a web application.

**Solution:**  
```text
Prompt: "We are building a shopping cart feature for an online store. Write a JavaScript function that takes a shopping cart object and an item object as inputs, and adds the item to the cart. Each item should have a name, price, and quantity. If the item is already in the cart, update its quantity."

Expected Response:
```javascript
function addItemToCart(cart, item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    return cart;
}

// Example usage:
let cart = [{ name: 'Apple', price: 0.5, quantity: 3 }];
const newItem = { name: 'Apple', price: 0.5, quantity: 2 };
cart = addItemToCart(cart, newItem);
console.log(cart); // Output: [{ name: 'Apple', price: 0.5, quantity: 5 }]
```
```

### Part D: Format

**Task:**  
Write a prompt to ask ChatGPT to create a JavaScript function and provide the solution as a code snippet followed by an explanation.

**Solution:**  
```text
Prompt: "Write a JavaScript function that reverses a string. Provide the solution as a code snippet, followed by an explanation of how it works."

Expected Response:
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Explanation:
// 1. The `split('')` method splits the string into an array of characters.
// 2. The `reverse()` method reverses the array elements.
// 3. The `join('')` method joins the array back into a string.
```
```
Sure! Here's the exercise with added clarity:

---

## Exercise 3: Debugging with ChatGPT

**Task:**  
You have a JavaScript function that is supposed to remove all vowels (a, e, i, o, u) from a given string. However, the function is not producing the correct output. Your task is to identify the issue with the function and fix it using ChatGPT.

Here is the current implementation of the function:

```javascript
function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        str = str.replace(vowels[i], '');
    }
    return str;
}

const result = removeVowels("hello");
console.log(result); // Expected output: "hll", but the actual output might be incorrect
```

**Steps:**

1. **Identify the Problem**: Use the provided code and run it to see what output it produces. Compare this with the expected output.

2. **Debug with ChatGPT**: Write a prompt to ChatGPT describing the issue you're facing, including the code snippet, the expected behavior, and the actual behavior you're observing.

3. **Fix the Code**: Based on the feedback from ChatGPT, modify the code to correctly remove all vowels from the string.

**Example Prompt:**

"I have a JavaScript function that's supposed to remove all vowels from a string, but it's not working as expected. Here's the code:

```javascript
function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        str = str.replace(vowels[i], '');
    }
    return str;
}

const result = removeVowels('hello');
console.log(result); // Expected output: 'hll', but the actual output is incorrect.
```

Can you help me identify what's wrong and how to fix it?"

**Solution:**

ChatGPT might explain that the `replace` function only removes the first occurrence of each vowel in the string, which is why the function doesn't work correctly for strings containing multiple instances of the same vowel. The solution would involve using a regular expression with the global flag (`/g`) to remove all occurrences of each vowel.

Here's the corrected code:

```javascript
function removeVowels(str) {
    return str.replace(/[aeiou]/g, '');
}

const result = removeVowels("hello");
console.log(result); // Output: "hll"
```

This solution should correctly remove all vowels from any input string.
---

