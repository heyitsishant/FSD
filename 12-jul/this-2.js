const car = {
    brand: "BMW",

    show: function(){
        console.log(this.brand);

    },
};
const mobile = {
    brand: "SAMSUNG",

   show: function(){
    console.log(this.brand);
   },
};

car.show(); // BMW
mobile.show(); // SAMSUNG