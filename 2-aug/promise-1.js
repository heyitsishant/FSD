
  let promiseObj = new Promise((resolve, reject) =>{

    for (let i = 0; i < 1000000; i++) {}

    // resolve("Success!");

    reject("failure");
  });

  promiseObj
  .then((msg) =>{
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() =>{
    console.log(
        "the finnaly the block/callback will be excuted in all condition"
    )
  });