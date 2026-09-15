

 /* const numbers = [5, 12, 18, 21, 30];

  const result = numbers.map((num) => {

    return num + 10;
   });

   console.log(result); */

   // const numbers = [2, 4, 6, 8];

    /* const nums = numbers.reduce((sum, numbers) => {

        return sum +  numbers
    });

    console.log(nums); */
    
   /* for( let number of numbers){
        console.log(number);
    } */

      /*  const numbers = [5, 10, 15, 20, 25];

      const num =  numbers.map((number) => {
            return number + 10;
        });

        console.log(num); */

        /* const students = ["Ishant", "Ravi", "Nitesh", "Pratik"];

          for(let i = 0; i < students.length; i++){

         
            console.log(i, students[i]);
          } */

            let numbers = [10, 15, 20, 25, 30, 35];

            const totalNum = numbers.filter((nums) =>{
                 return nums > 20;
           })
           .map((nums) =>{
            return  nums *2;
           });

           console.log(totalNum);



        