

  /* let arr = [10, 20 , 30];
 
   console.log("-------- normal for loop--------");
    // normal for loop
   for( let i = 0; i <arr.length; i++){

    console.log(arr[i]);
   }

   console.log("-------- for of loop--------");
    // for of loop
    for (let value of arr){
    console.log(value);
    } */


    let arr1 = [ 20 , 30 , 45];

    let sum = 0;

    for( let num of arr1){

        sum += num;
    }

    console.log(sum);  


    let arr2 =[ 1, 2 , 3 , 4, 5 , 6, ];
       // find and print all the even num

      for(let val of arr2){
        if(val % 2 == 0){
            console.log(val);
        }
      }

      let fruits = [ "banana" , "mango" , "apple"];

      // use for of all and print all of the values in uppercase
    
     for(let fruit of fruits){

        console.log(fruit.toLocaleUpperCase());
     }

     let arr3 = [ "apple" , "kiwi" , "papaya"];
       
     let count = 0;
     // count the num of values in this arr , which have the char " a " in it
     
     for(let val of arr3){

        if(val.includes("a")){
         count++;
        }
     }
     console.log(count);