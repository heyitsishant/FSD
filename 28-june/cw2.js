 let numberofunit = 300;
 let baseperunit = 10;

 if(numberofunit <=100){
    console.log( numberofunit * baseperunit * 1.18);
    
 }else if(numberofunit <=200){
    console.log(baseperunit * 1.1 * numberofunit * 1.18)
 }else if(numberofunit <=300){
 console.log(baseperunit * 1.2 * numberofunit * 1.18)
 } else{
    console.log("Enter valid deatils")
 }
 