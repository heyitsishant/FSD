/* let count = 10; 

 while( count <= 5){
    // entry controllered logic
    console.log(count)
}
console.log("End of the loop ") */

/* do{
    // entry controllered logic
    console.log(count)
}while( count <= 5) // exit controlled
console.log("End of the loop ") */

/* for(let i = 1; i<=100; i++){
    console.log(i);

    // if i is divisible by 10

    if( i % 10 == 0){
        break;
    }
}
console.log("out of the loop") */

let i = 1;
while(i <= 100){
console.log(i)

if( i % 2 == 0 && i % 3 == 0 && 1 % 5 == 0) break;

     i++;
}

console.log("out of the loop")