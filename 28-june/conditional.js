
/* let age = 18;

// if condition
// if else condition

if(age <= 18){
console.log("Eligible");
} else {
    console.log(" not Eligible");
} */
 
    let marks = 80;
    // 95 - 100 = A+
    // 80 - 94 = A
    // 75 - 79 = B+
    // 60 - 74 = B
    // 50 - 59 = C+
    // 35 - 49 = C
    // 0 - 34 = D

    // if - else - if - else

        if(marks <= 95 && marks <= 100){
            console.log( "A+");
        }else if(marks <= 80 && marks <= 94){
            console.log("A");
        } else if (marks <= 75 && marks <= 79){
            console.log("B+");
        }else if (marks <= 60 && marks <= 74){
            console.log("B");
        } else if(marks <= 50 && marks <= 59){
            console.log("C+")
        }else if (marks <= 35 && marks <= 49){
            console.log("C")
        } else{
            console.log("D");
        }
