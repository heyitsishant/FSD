   async function getPosts() {
     
    console.log("Api call started");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log(response.json());

    console.log("Data received");
   }

   getPosts();