/* let bp = 100;
let type ="normal"

if(type === "normal"){
    let price = bp + (bp * 18 / 100)
    console.log(price)
} else if (type === "silver"){
    let price = bp + (bp * 30 / 100)
    price = price + ( price * 18 / 100)
    console.log(price)
}else if (type === "gold"){
    let price = bp + ( bp * 60 / 100)
    price = price + ( price * 18 / 100)
    console.log(price)
}else if (type ==="platinum"){
    let price = bp + ( bp * 80 / 100)
    price = price + ( price * 18 / 100)
    console.log( price)
} else{
    console.log("No ticket avilable");
}  */


    let bp = 100;
    let ticketType ="gold";

    if(ticketType == "normal"){
        console.log(bp * 1.18);
    } else if(ticketType == "silver"){
        console.log(bp * 1.3 * 1.18);
    }else if (ticketType == "gold"){
        console.log(bp * 1.5 * 1.18);
    }else if(ticketType == "platinium"){
        console.log(bp * 1.8 * 1.18);
    }else{
        console.log("Wrong ticket type!")
    }