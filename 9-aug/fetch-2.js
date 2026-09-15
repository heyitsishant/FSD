  async function getpost(id) {

    const Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`

    );


  const data = await Response.json();
    console.log(Response.statuus + " : " + Response.statusText);
  console.log(data);

};

getpost(1);  