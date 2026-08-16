    
    // total marks

            function calculatetotal(m1 , m2 , m3) {
        return m1 + m2 + m3;
     }

    // avg marks
       function calculateavg(total){
          return total / 3;
       }
    // grade

    /* 
    avg >= 90 --> A
     avg 75 - 79 --> B
     avg 60 - 74 --> c
     avg < 60 --> fail
    */
function calculategrade(avg){
    if (avg >= 90) return "A";

    if (avg >= 75) return "B";

    if (avg >= 60) return "C";

    return "fail";
}

 // console.log(calculategrade(97));  

 /* const total = calculatetotal ( 80 , 75 , 90); // 245
 
 const avg = calculateavg (total); // - 80

 const grade = calculategrade (avg); // 0

 console.log("total : " + total);

 console.log("avg : " + avg);

 console.log("grade :" + grade); */

 let result = calculategrade(calculateavg (calculatetotal ( 80 , 75 , 90)));
 
 console.log(result);