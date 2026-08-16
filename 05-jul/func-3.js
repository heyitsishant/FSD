//function declaration

greet1();

function greet1(){
    console.log("Hello from function declaration! ---- HOISTED!");
}


// function epression : assining a annonyomous function to the variable

// i can cannot call function expression, because it is not completely hoisted
greet2();
const greet2 = function(){
    console.log("Hello from function expression")

}
