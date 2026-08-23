  

/*  let num = [1, 2, 3, 4]; 

  // it simplly allow you to filter out list of elements based on the given cond
   // it create new array for filter ans

   let oddnums = num.filter((eNum) => eNum % 2 != 0);

   console.log(oddnums); */

  /* let students = [

    {
        name: "anu",
        birthYear: 2002,
        marks: 80,
    },

    {
        name: "arnav",
        birthYear: 2001,
        marks: 60,
    },

    {
    name: "ishant",
    birthYear: 2000,
    marks: 90,
    },

 ];

 // const highMarksStudent = students.filter((highmark) => highmark.marks >= 70);

 // console.log(highMarksStudent); 

const studentN = students.filter((highmark) => highmark.marks >= 70).map((highmark) =>highmark.name)
console.log(studentN); */

let products = [
    {
    category: "electronics",
     name: "phone",
     price: 1000,

    },

        {
    category: "electronics",
     name: "charger",
     price: 500,

    },

        {
    category: "clothing",
     name: "tshirt",
     price: 200,

    },
];

const elecprods = products.filter((elec) => elec.category == "electronics");
console.log(elecprods);