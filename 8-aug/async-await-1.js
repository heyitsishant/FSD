 

 function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            resolve("Data Received");
        }, 2000);
    });
 }
/**
 * await : i am ok to wait on same line , but i do not want chain .then, .catch
 * (1) it can only be used in front of a function which is returning a promise
 *  (2) it can only be used inside a function which is marked as a async
 */
  async function main() {
    console.log("start");

    const response = await getData();

    console.log(response);

    console.log("End");
 }

 main();

