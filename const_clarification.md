const car = { make: "Toyota", model: "Corolla", year: 2020 };
car.year = 2021; // This is allowed
car = { make: "Honda", model: "Civic", year: 2022 }; // This would cause an error


The `=` , `==`, and `===` operators in JavaScript have different purposes and behaviors:

### `=` (Assignment Operator)
- **Purpose:** Used to assign a value to a variable.
- **Behavior:** It assigns the right-hand value to the left-hand variable.

**Example:**
```javascript
let x = 5; // The value 5 is assigned to the variable x
```

### `==` (Equality Operator)
- **Purpose:** Used to compare two values for equality, with type coercion.
- **Behavior:** It checks if the values on both sides are equal after converting them to a common type (type coercion). This means that it can consider two values equal even if they are of different types.

**Example:**
```javascript
5 == '5'; // true because '5' is converted to a number before comparison
true == 1; // true because true is converted to 1 before comparison
```

**Pitfall:** Due to type coercion, `==` can lead to unexpected results and is generally considered less reliable for strict comparisons.

### `===` (Strict Equality Operator)
- **Purpose:** Used to compare two values for equality, without type coercion.
- **Behavior:** It checks if the values on both sides are equal **and** of the same type. If the types are different, `===` returns `false` without attempting to convert the types.

**Example:**
```javascript
5 === '5'; // false because the types (number and string) are different
true === 1; // false because the types (boolean and number) are different
5 === 5; // true because both the value and the type are the same
```

**Best Practice:** It's generally recommended to use `===` instead of `==` to avoid potential issues with type coercion and to ensure more predictable comparisons.
