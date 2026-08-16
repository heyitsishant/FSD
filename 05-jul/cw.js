


// create a fuction is calculatediscount --> price, discount
// should return --> discount price

/* function calculatediscount ( price , discount){

    let dis =( price * discount )/ 100;

    return  price - dis;
}
let finalprice = calculatediscount ( 500 , 10);
console.log("let price :" , finalprice); */

// calculatesalary(basic) --> (final salary)
// hra ---> 20% of your basic 
// al --> 15% of your basic 

 /* function calculatesalary ( basic){
    let hra =  basic * 0.20;
    let al = basic * 0.15;

    return  basic + hr + al;
    
}
let finalsalary= calculatesalary(100000);
console.log("let salary :", finalsalary); */

// calculate cartvalue 
// price  , quantity , tax , discount ,

let calculateCartValue = ( price, quantity,  taxperc, discperc ) => {

    let totalprice = price * quantity; // 200

    let taxamount = totalprice * (taxperc / 100); // 20

    let amountinctax = totalprice + taxamount; // 220

    let discountamount = amountinctax * (discperc / 100); // 11

    return amountinctax - discountamount; // 220 - 11 = 209

}

let finalprice = calculateCartValue( 100, 2, 10, 5);
console.log("Cart value :", finalprice)