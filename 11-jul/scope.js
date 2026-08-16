// global variable

 /* let studentname = "ishant";

function show(){
    // functional scope : this variable can only be acceseed inside the function locally
    let uid = "1234";
    console.log(studentname,  " : ", uid);
}

if (true){
    console.log(studentname);
}
console.log(studentname);
show(); */

// global scope : can be assecced by anyone in this code file
 /* let city = "Delhi"; // this is my new variable 
 function print(){
    console.log(city);
 }
 
 function change (){
    city = "Mumbai"; // and now im changing the variable name so i cant use let 
 }

 print(); // print hua delhi
 change(); // change hua delhi se mumbai 
 print(); // ab mumbai print hua  */

 // local variable : it is local to this function
/* function print (){
    let city = "delhi";
     console.log(city);
 }
 // yeh change nhi hoga kyuki local variable hai agr code run krunga to undefined aayega 
 function change () {
    let city = "Mumbai";

 }

print();
change();
print(); */

 /* let a = 10;
function print(){
    let b = 20;
    console.log(a + " " + b )
}
print();
 console.log(a + " " + b) */ 

 // new exe 
 /* let count = 10; // 10

 function increase(){
    count++;   // 11 
    console.log(count); // phir sec yeh 11 hua 

 }

     console.log(count); // first yeh print hua 10

      increase();

          console.log(count); // phir third yeh print hua 11 */

// new exe 
let score = 90; // global
let score1 = 95;
 function print(){
   let = score = 91; // local

    console.log(score1);
 }

 print();

 console.log(score);