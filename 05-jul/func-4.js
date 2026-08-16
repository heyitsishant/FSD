 /* function add1(a, b){
    console.log(a + b);
}


//function () {

 //}

 // annonymous arrow function
 () => {

 }
 
 // arrow function
 const add2 = (a, b) => {
    console.log( a + b);
 };

 add1 ( 10 + 20)
 add2 ( 20 + 30); */

  // arrow function : not hoisted, you cannot call it before declaration
 /* const square1 = (num) => {
    console.log(num * num);
 };

// declaration function : are hoisted 
function square2 ( num){
   console.log(num * num);
}

// expression function : not hoisted you cannot call it before declaration
const square3 = function (num){
    console.log( num * num);
} */

function add ( num1, num2){
    return ( num1 + num2)
}
let result = add ( 10, 20);

console.log(result );