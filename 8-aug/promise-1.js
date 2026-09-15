 
/*
 console.log("Start");

 setTimeout(() =>{

    console.log("Data recive");
 }, 2000);



 console.log("End");
 */

 function getData(){

    return new Promise((resolve, rejet) =>{
       setTimeout(() => {
        resolve("Data receive");
       },2000);

    });
 }

 // const Promise = getData(); 
 getData();

 Promise
 .than ((msg) =>{
    // success
    console.log("msg");
    console.log("sucess found in then callback");
 })
 .catch((msg) =>{
    // failure
    console.log("failure found in catch callback");
 });

 console.log("end of the code");