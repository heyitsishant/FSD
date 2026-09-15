 
 /** fetch("https://jsonplaceholder.typicode.com/posts")
 .then((Response) =>{
    return Response.json();
 })
 .then((data) =>{
    console.log(data[0]);
 })
 .catch((error) =>{
     console.log("something went wrong");
 }) */

     async function getposts() {
        const Response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await Response.json();
        console.log(data[0]);
     }

     getposts();