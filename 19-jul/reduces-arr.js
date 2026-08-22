  
  let arr = [ 1, 2, 3, 4, 5];

  // currVal => it is the val from the arr
  // prevVall
  // 1st iteration: it is the default/initial value
  //next iteration: prevVal = the value you return from the callback,

 /* arr.reduce((prevVal , currVal) =>{

    console.log(prevVal + ' : ' + currVal);
  }); */


 /* const sum = arr.reduce((prevVal , currVal) => {

    console.log("Sum until now" + prevVal);
    console.log("What is the curr value to be added: " + currVal);

    console.log("Sum after adding current value: " + (currVal + prevVal));

    console.log("=========================");

    return currVal + prevVal;
  }, 0);

  console.log(sum);  */

  let price = [ 50, 70, 20, 90, 100];

  const fans = price.reduce((preval , currVal) =>{

    console.log(preval + " : " + currVal);
    return Math.min(preval, currVal);
  });

  console.log("Final ans :" + fans);
