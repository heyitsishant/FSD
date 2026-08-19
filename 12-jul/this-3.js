const person ={
    name: "ankit",

    greet: function(){
        console.log(this.name);
    },
};



const anotherperson ={
    name: "ishant",
};
// adding the greet function inside the anotherperson
anotherperson.greet = person.greet;

anotherperson.greet();
person.greet();