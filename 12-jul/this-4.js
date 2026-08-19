const student1 = {
    name: "Rishu",

    greet: function(){
        console.log(this);
    },
};


const student2 = {
    name: "Hitlar",

    greet: () =>{ // arrow function do not maintained the reference of any keywords 
    // its simply points to the global obj
        console.log(this);
    },

    greet2: function (){
        console.log(this.name);
    },
};

 student1.greet();

student2.greet2();