//Create variables to store your name, age, and city using let, const, and var. Try changing the value of each variable and observe what happens.
let name="syam";
const age=22;
var city="hyd";
console.log(name,age,city);
name="kumar";
// age=21; TypeError: Assignment to constant variable.
city=33;
console.log(name,age,city);

//Declare a string variable with your favorite quote. Use a string method to convert it to uppercase

var quote="Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution";
console.log(quote.toUpperCase());

// Create a number variable to represent your age. Write code to increment the age by 1.
let age1=23;
age1++;
console.log(age1);

// Declare a boolean variable to indicate if you are a student. Toggle its value from true to false.
let student=true;
console.log(student); //t
student=!student; //Each time you apply the ! operator, it flips the boolean value to its opposite.
console.log(student); //f
student=!student;
console.log(student); //t
// Create an array of your favorite fruits. Add a new fruit to the beginning of the array.
const fruits=["apple","orange","pineapple"];
fruits.push="mango";
// push: Adds elements to the end of the array.
// unshift: Adds elements to the beginning of the array.
fruits.unshift("grapes");
console.log(fruits);

//Declare an object representing a car with properties: make, model, and year. Log the car’s make to the console.
let car={
    make:"BMW",
    model:"BMW 118i",
    year:2011
};
console.log(car.make);
//Create a variable with a null value and another with an undefined value. Print both to the console.
let Null=null;
let undefined;
console.log(Null);
console.log(undefined);
//Declare a string variable with your full name. Use a string method to extract and log just your first name.
const fname="syam kumar";
// const fname1=fname.split(`''`)[0];
// split(' '): Breaks the string into parts wherever there is a space, resulting in an array.
// [0]: Selects the first part of the array .
console.log(fname.split(" ")[0]);
//Create an object representing a book with properties title, author, and pages. Add a new property genre to the object.
const book={
    title:"javascript",
    author:"Brendan Eich", 
    year:1995
};
console.log(book);
book.genre="technology"; //add the genre property to book object
console.log(book);
//Declare a variable using var inside a function. Try accessing this variable outside the function. What happens?
function msg(){
    var inside="welcome to js";
    console.log(inside);
}
msg();
console.log(inside); // inside is not defined::because it is not defined in that outer scope


