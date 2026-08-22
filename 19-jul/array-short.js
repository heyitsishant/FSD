

 /*  let arr = [ 42, 38, 255, 16];
  // short is an inbuild array function which shorts the orignal array
   arr.sort();

   console.log(arr); */

  // exp 2

 /* let arr = [ 100 , 2 , 9 , 50];

  arr.sort((a , b)  => {
    return a -b;
  });

  console.log(arr);*/

  // exp3

 /* let arr = [ 100 , 2 , 9 , 50];

  arr.sort((a , b)  => {
    return b - a;
  });

  console.log(arr); */


  // exp4

/*  let arr = ["Zara" , "Ankit" , "Aditya"];

  arr.sort();

  console.log(arr); */

  // exp5

  let arr = [
    {name: "shyam" , marks: 99},
    {name: "ankit" , marks: 95},
    {name: "arnav", marks: 90},
  ];
   
  arr.sort ((a , b) => {

    return a.marks - b.marks;
  });

  console.log(arr);


