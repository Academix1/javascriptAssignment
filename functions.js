//Write a function that takes two numbers as arguments and returns their sum. Call the function with two numbers and log the result.
function sum(a,b){
    let c=a+b;
    return c;
}
console.log(sum(7,8));
//Convert the above function into an arrow function and log the result.
let add=(n1,n2)=>n1+n2;
console.log(add(45,5));
//Write a function that returns the square of a number. Use default parameters to make the number default to 2 if no argument is provided.
function sqr(number=2){
    return number*number;
}
console.log(sqr());
console.log(sqr(10));
//Write a function that takes a string as a parameter and returns the string reversed.
function string(str){
    
    return str.split('').reverse().join('');
    //split:The split('') method splits the string into an array of individual characters.
    //["j","a","v","a","s","c",r","i","p","t"]
    //reverse():reverses the order of the elements in the array.
    //["t","p","i",......]
    //join:joins the elements of the array back into a single string.
    //tpircsavaj;
}
console.log(string("javascript"));
console.log(string("learning"));
// Create a function that logs a greeting message using a name passed as an argument. Call the function multiple times with different names.
function greeting(name){
    return `hi i am ${name}`;
}
console.log(greeting("syam"));
console.log(greeting("sri"));
console.log(greeting("kumar"));
//Write an Immediately Invoked Function Expression (IIFE) that logs "This function runs immediately!" to the console.
(function(){
    console.log("hello world");
})();
// Write a function that returns an object with properties name, age, and city. Call the function and log the returned object.
function fun(){
   
// const obj 
        return{
     name:"syam",
    age:22,
    city:"hyd"
    
};
// return obj;
}
console.log(fun());
//Write a recursive function that calculates the factorial of a number. Test it with the number 5.
function recu(num){
    if(num==1){
        return 1;
    }
    return num*recu(num-1);
    //recursion:Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.
}
console.log(recu(3));
//Write a function that takes a callback function as an argument and executes it. Test it with a callback that logs a message.
//callback:A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations like handling user interactions, network requests, and timers.
//Synchronous vs. Asynchronous Callbacks
//Synchronous Callback: Executed immediately during the execution of the higher-order function.
//Asynchronous Callback: Executed after the higher-order function completes its operation, often used in operations like fetching data from a server.
function greet(name){
    console.log("hello js " +name);

}
function call(callback){
    const name1="syam";
    let age=22
    callback(name1);
}
call(greet);

//Write a function that logs the square of a number passed as an argument. Use arrow function syntax for this task.
const a=(num)=>console.log(num*num);
a(3);