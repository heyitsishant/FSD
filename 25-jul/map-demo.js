 
 /* let nums = [1, 2, 3, 4,];

  // map : which allow as to do something, same operation on every single element 
 // of the array
 // does not change the orignal array it does operation on each elements and creates a new array

 const result = nums.map((elem) => {

    // [ 5, 10, 15, 20]

    return elem * 5;
 });
 
 console.log(result); */

 let fruits = ["banana", "mango" , "kiwi"];
  let rs = fruits.map((fruit) =>{
    return fruit.toUpperCase();
  });

 // console.log(rs);
 
 let student = [

    {
        name: "anu",
        birthYear: 2002,
    },

    {
        name: "arnav",
        birthYear: 2001,
    },

    {
    name: "ishant",
    birthYear: 2000,
    },

 ];
 

 const age = student.map((currentyear) =>{
    return new Date().getFullYear() - currentyear.birthYear;
 });
  console.log(age);