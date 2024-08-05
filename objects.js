//Create an object representing a student with properties name, age, and grades. Add a method to the object that logs a summary of the student’s details.
const student={
    name:"syam",
    age:22,
    grades:{ // An object representing the student's grades in different subjects.
        js:"A+",
        java:"A"
    },
    summary:function(){ //A method that logs the student's details to the console.
      console.log(`Name: ${this.name}, Age: ${this.age},Grades: ${JSON.stringify(this.grades)}`);  //JSON.stringify(this.grades): Converts the grades object to a JSON string, making it readable in the console output.
    }
};
student.summary();
//Use object destructuring to extract the name and age properties from the student object created above.
const {name,age}=student;
console.log(name,age);
//nested destructuring
const{grades:{js,java}}=student; //extraxts from student.grades
console.log(`grade:${js},grade:${java}`);
//Create an object with a nested object for address. Access and log the city from the nested object.
const stu={
    name1:"syam",
    address:{
        city:"uk"
    }
};
console.log(stu.address.city);
//Create an array of numbers. Use a loop to log each number multiplied by 3.
const array=[1,2,3];
for(let i=0;i<array.length;i++){
     result=array[i]*3;
    console.log(result);
}
//Use array destructuring to assign the first three elements of an array to separate variables. Log these variables.
const numbers=[1,2,3,4,5,6,7];
const[first,second,third]=numbers;
console.log(first);
console.log(second);
console.log(third);
//Use the spread operator to merge two arrays into a new array and add a new element at the end. Log the new array.
let arra1=[1,2,3];
let arr2=[4,5,6];
let newarray=[...arra1,...arr2,7];//The spread operator ... is used to expand the elements of array1 and array2 into a new array.
console.log(newarray);
//Merge two objects into a new object using the spread operator. Log the resulting object.
const obj1={
    stuname:"syam",
    age:22
};
const obj2={
    id:12234,
    company:"dxc"
};
const obj={...obj1,...obj2};
console.log(obj);

//Write a function that takes an object and updates its city property. Log the updated object.
function prop(object,newcity){
object.city1=newcity;
console.log(object);
}
const person={
    city1:"newyork",
    name2:"syam"
};
prop(person,"usa");
//Create an array of objects representing different movies. Use a loop to log the title of each movie.
const movie=[{ title: "Inception", director: "Christopher Nolan" },
    { title: "The Matrix", director: "Wachowski Brothers" },
    { title: "Interstellar", director: "Christopher Nolan" }];
    movie.forEach(movie => {
        console.log(movie.title);
      });
//Write a function that filters out even numbers from an array and returns the remaining odd numbers. Log the result.
function filterOddNumbers(number) {
    return number.filter(num => num % 2 !== 0);
  }
  let number = [1, 2, 3, 4, 5, 6];
  console.log(filterOddNumbers(number));