  
  let student = {
    name: "riyaz"
  };

 // console.log(Object.getOwnPropertyDescriptor(student , "name"));

 /*  student.name = "arnav";

  for(let key in student){
    console.log(key + " : " + student[key]);
  } */
   

    Object.defineProperty(student, "name", {
        name: "riyaz",
        writable: false,
        configurable: false,
    });

    console.log(Object.getOwnPropertyDescriptor(student, "name"));

    student.name = "abhishek";

    console.log(student);

    delete student.name;

    console.log(student);

    student.name = "abhisheK";

    console.log(student);