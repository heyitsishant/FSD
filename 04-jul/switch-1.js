// basic calculator 

// operation = +, -, *, /

/* num1 = 5; num2 = 10;
let op ="*"

switch(op){
    case "+":
    console.log(num1 + num2)
    break;

    case "-":
        console.log(num1 - num2)
        break;

        case "*":
            console.log(num1 * num2)
            break;

            case "/":
            console.log(num1 / num2)
            break;

            default:
                console.log("invaild operator")
} */

                // day = M - S
            // condition : have to use switch
            // you cannot right more than 2 logic, 1 case, 1 default

           /* let day = "monday"
            switch (day){
                case "Saturday":
                case "Sunday":
                console.log( "Weekend")
                break;

                default:
                console.log("Weekday")
            } */ 

                // marks
                // 95 - 100 = Excellent
                // 90 - 94 = Very good
                // > 80 = okaish

                 let marks = "91";
                 switch(true){
                case (marks >= 95 && marks <= 100):
                 console.log("Excellent")
                 break;
                 case (marks >= 90 && marks <= 94):
                console.log("Very good")
                break;
                 case (marks >= 80 && marks <= 89):
                 console.log("good")
                break;
                 case(marks >= 0 && marks <= 79):
                console.log(okaish)
                break;
                 default:
                console.log("invaild marks")
                 }
             