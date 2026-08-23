
 /* let age = "13";
          
   }
if ( age >= 18){
   console.log("adult");

}
 else if (age  >= 13 ) {

   console.log("teenage");

} else{
   console.log("child");
} */

   

    /* switch(true){

      case( marks >= 95 &&  marks <= 100):
          console.log("A")
          break;

          case(marks >= 80 && marks <= 94):
          console.log("B")
          break;

          case(marks >= 60 && marks <= 79):
          console.log("c")
   }  */
         
          /* let marks = 45;  

          if(marks >= 90){
          console.log("A");
          }
          else if (marks >= 60){
            console.log("B");
          } else{
            ( marks >= 60)
            console.log("C");
          } */

           /* let age = 18;
            if( age <= 18){
               console.log("Adult")
            }else{
               console.log("False")
            } */

              /* let price = 900;
               if ( price >= 800){
                  console.log("discount");
               } else{
                  console.log("no discount");
               } */

                 /*  let temp = "15";

                  if( temp > 30){
                     console.log("High");
                  } else if ( temp > 20){
                     console.log("Normal");
                  } else{
                     console.log("Cold");
                  } */

                 /* let age = 18;
                  if (age >= 18 && age <= 25){
                  console.log("Eligable");
                  } else {
                     console.log("Not Eligable")
                   }*/


                 /* let day = "monday";

                 if( day == "saturday" || day == "sunday"){
                  console.log("Weekend");
                 }else{
                  console.log("weekday")
                 } */

                    /* let age = 30;
                  if ((age >= 18 && age <= 25) || age === 30){
                  console.log("Eligable");
               
                  } else {
                     console.log("Not Eligable")
                   } */

               /* let fact = 1;

                for(let i = 1; i <= 4; i++){

                  fact = fact * i;
                }

                console.log(fact); */

                function calculatediscount( price , discount){
                    let discountprice = price * discount / 100;
                   let finalamount = price - discountprice;

                   return finalamount;

                }

                console.log(calculatediscount (1000 , 20));

                