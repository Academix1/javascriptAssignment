//Write a function that takes two numbers as arguments and returns their sum. Call the function with two numbers and log the result.
function sum(a,b){
return a+b;
}
console.log(sum(1,2));
//Q: Convert the above function into an arrow function and log the result.
const add=(a,b) => a+b;
console.log(add(10,20));
//Write a function that returns the square of a number. Use default parameters to make the number default to 2 if no argument is provided.
function square(a=2){
    return a*a;
}
console.log(square(4));
console.log(square())
//Q: Write a function that takes a string as a parameter and returns the string reversed.
function reversed(name){
    return name.split('').reverse().join('');
}
console.log(reversed("sanky"));
//Create a function that logs a greeting message using a name passed as an argument. Call the function multiple times with different names.
function greet(name){
    return `hi,I am ${name}`;
}
console.log(greet("sankeerthana"));
console.log(greet("syam"));
//Write an Immediately Invoked Function Expression (IIFE) that logs "This function runs immediately!" to the console.
(function(){
    console.log("This functions runs immediately! to the console")
})();
//Write a function that returns an object with properties name, age, and city. Call the function and log the returned object.
function obj(){
    return {
        name1:"sanky",
        age2:21,
        city:"pithapuram"

    };

}
console.log(obj());
//Q: Write a recursive function that calculates the factorial of a number. Test it with the number 5.
function recursive(n){
    if(n==0){
        return 1
    }
 return n*recursive(n-1);
}
console.log(recursive(5));
//Write a function that takes a callback function as an argument and executes it. Test it with a callback that logs a message.
function back(callback){
    callback();
}
function message(){
    console.log("hi")
}
back(message);
//Write a function that logs the square of a number passed as an argument. Use arrow function syntax for this task.
const squ=(a,b)=>a*b;
console.log(squ(5,4));
