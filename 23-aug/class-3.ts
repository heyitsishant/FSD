export class Product2 {
    id: number;
    name: string;
    price: number;
    
    // this constructor will be called automatically when you create the instance of the class
   constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
   }
    displayProduct(): void{
        console.log(this.name + " : " + this.price);
    }
        applyDiscount(percentage: number){
            if (percentage > 5 || percentage <= 0) return;

            this.price = this.price - (this.price/100) * percentage
        }
    }

 // member function / method of a class
const prod = new Product2( 101, "iphone 16", 79999);
   prod.displayProduct();
   prod.applyDiscount(-10);
   prod.displayProduct();