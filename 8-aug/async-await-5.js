  

  async function main() {

    console.log("main function started");

    const [posts, users, todo] = await promise.all([

      get.posts(),
      get.users(),
      get.todo(),

    ]);
    
    console.log(posts[0]);
    console.log(users[0]);
    console.log(todo[0]);

    console.log("main function completed");
  }

  main();