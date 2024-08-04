//Understanding Variables and Data Types//
// Create variables to store your name, age, and city using let, const, and var. Try changing the value of each variable and observe what happens.
let name="sanky"
const age=22
var city="pithapuram"
console.log(name)
console.log(age)
console.log(city)

//Q: Declare a string variable with your favorite quote. Use a string method to convert it to uppercase.
let string="hi,i am sankeerthana";
console.log(string.toUpperCase());

//Q: Create a number variable to represent your age. Write code to increment the age by 1.
let age1=22;
age1+=1;
console.log(age1)
//Q: Declare a boolean variable to indicate if you are a student. Toggle its value from true to false.
let student=true;
student=!student;//toggle means change
console.log(student);
//Q: Create an array of your favorite fruits. Add a new fruit to the beginning of the array.
let fruits=['apple','banana','watermelon'];
fruits.unshift('mango');
console.log(fruits);
//Q: Declare an object representing a car with properties: make, model, and year. Log the car’s make to the console.
const car={
    model:1,
    year:2024
}
console.log(car)
//Q:Create a variable with a null value and another with an undefined value. Print both to the console.
let n=null;
let undefined;
console.log(n);
console.log(undefined);
//Q:Declare a string variable with your full name. Use a string method to extract and log just your first name.
let fullname='Sri Sankeerthana Gorrela';
let firstname=fullname.split(" ")[0];
console.log("first_name is :",firstname);
//Q: Declare a variable using var inside a function. Try accessing this variable outside the function. What happens?
function greet(){
    var a=10;
    console.log(a);
}
greet();
//console.log(a); cause error a is undefined because we had declared a in function//