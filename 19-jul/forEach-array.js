  

 let num = [ 1, 2, 3, 4, 5];

 /* for(let i = 0; i < num.length; i++){

    console.log(num[i]);
  }

  for(let val of num){

    console.log(val);
  }  */

  /*  for(let i in num){
        console.log(i);
    }  */

     /* num.forEach((val) => {
        console.log(val);
     }); */

     /* num.forEach((val) => {
        console.log(val * val);
     }); */

    /* num.forEach((val , idx) => {
        console.log( idx + ' : ' + val);
     }); */

     // create a array of the abject => [{} {} {} {}] => {name: marks:}
     // give me a new array of the name of the all students 

     const students = [
        {name: "aditya" , marks: 75},
        {name: "raghav" , marks: 87},
        {name: "anu" , marks: 90},

     ]
       // mine try
     /*  name.forEach((val) => {
         console.log(val.name);
       }); */

      /* let studentnames = [];

       students.forEach(std =>{

        studentnames.push(std.name);
       });

       console.log(studentnames);  */

       // avg

       let totalmarks = 0;
       students.forEach(std =>{

        totalmarks += std.marks;
       });

       console.log(totalmarks / students.length);