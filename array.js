//Q: Use the map method to create a new array that contains the square roots of numbers in an existing array. Log the new array.
let num=[1,4,9,25,36]
let square=num.map(i=>Math.sqrt(i));
console.log(square);
//Use the filter method to create a new array containing only strings that start with the letter "A" from an existing array of strings. Log the new array.
let name=['aadhya','sri','ananya','aarhith'];
let aname = name.filter(i =>i.startsWith("a"));
console.log(aname);
//Q: Use the reduce method to calculate the product of all numbers in an array. Log the result.
let n=[1,2,3]
let product=n.reduce((acc,curr)=>acc*curr,1);
console.log(product)
//Q: Use the find method to locate the first number in an array that is greater than 10. Log the result.
let arr=[4,5,6,7,10,11,42]
let great=arr.find(i=>i>10);
console.log(great)
//Q: Use the some method to check if any string in an array has a length greater than 5. Log the result.
let a=['sankyjk','sri','sr']
let len=a.some(i=>i.length>5);
console.log(len)
//Q: Use the every method to check if all numbers in an array are positive. Log the result.
let a1=[1,2,3,4,5]
let pos=a1.every(i=>i>0);
console.log(pos);
//Write a function that sorts an array of numbers in descending order. Log the sorted array.
function a2(num){
    return num.sort((a,b)=>b-a);
}
console.log(a2([1,2,3,4,5]));
//Chain the filter, map, and reduce methods to filter out even numbers from an array, square the remaining numbers, and find their sum. Log the result.
let a3=[1,2,3,4,5]
let even=a3.filter(i=>i%2==0)
console.log(even)
let sq=even.map(i=>i*i)
console.log(sq)
let sum=sq.reduce((acc,curr)=>acc+curr);
console.log(sum)

//Q: Use the reverse method to reverse the order of elements in an array. Log the resulting array.
let str=['s','r','i']
str.reverse();
console.log(str);
//Q: Use the flat method to flatten a deeply nested array into a single-level array. Log the resulting array.
let rev=[1,[2,[3]]]
let flatarr=rev.flat(2);
console.log(flatarr);