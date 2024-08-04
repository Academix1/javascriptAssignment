//Create an object representing a student with properties name, age, and grades. Add a method to the object that logs a summary of the student’s details.
const student={
    name:"sankeerthana",
    age:21,
    grade:"A",
    details :function(){
        console.log(`Name : ${this.name}, age : ${this.age}, grade : ${this.grade}`);
        }

}

student.details();
//Q: Use object destructuring to extract the name and age properties from the student object created above.
//object destructuring is used to unpack the values from objects into distinct variables
const {name,age}=student;
console.log(name);
console.log(age);
//Q: Create an object with a nested object for address. Access and log the city from the nested object.
const nest={
    name:"sanky",
    age:21,
    address:{
        city:"hyd",
        state:"Telangana"

    }
};
console.log(nest.address.city);
//Q: Create an array of numbers. Use a loop to log each number multiplied by 3.
let n=[1,2,3,4];
for(i=0;i<n.length;i++){
    console.log(n[i]*3);
}
//Q: Use array destructuring to assign the first three elements of an array to separate variables. Log these variables.
let [first,second,third]=n;
console.log(first);
console.log(second);
console.log(third);
// Use the spread operator to merge two arrays into a new array and add a new element at the end. Log the new array.
let array1=[1,2,3]
let arr2=[4,5,6]
let merge=[...array1, ...arr2, 12];
console.log(merge)
//Merge two objects into a new object using the spread operator. Log the resulting object.
const obj1={1:"S",2:"R",3:"I"};
const obj2={4:"S",5:"Y",6:"A",7:"M"};
const merged={...obj1,...obj2};
console.log(merged);
//Q: Write a function that takes an object and updates its city property. Log the updated object.
function update(obj,newcity){
    obj.city=newcity;
    console.log(obj)
}
const person={
    name:"Sri",
    city:"Kakinada"
}
update(person,"Hyderabad");
//Q: Create an array of objects representing different movies. Use a loop to log the title of each movie.
const movies=[{
    name:"kalki",hero:"prabhas"
},
{
    name:"RRR",hero:"Ramcharan"
},{
    name:"devara",hero:"NTR"
}];
for(const i of movies){
    console.log(i.name);
}
//Q: Write a function that filters out even numbers from an array and returns the remaining odd numbers. Log the result.
function odd(numbers){
    return numbers.filter(i=>i%2!==0)
}
console.log(odd([1,2,3,4]));
