//Write a function that makes a GET request to https://jsonplaceholder.typicode.com/users using the Fetch API. Log the names of all users.
async function fetchuser(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    users.forEach(i => console.log(i.name));

}
fetchuser();

//Create a function that makes a POST request to https://jsonplaceholder.typicode.com/posts with a new post object. Log the response.