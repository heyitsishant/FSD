

  const students = [

    {
        id: 1,
        name: "rahul",
        age: 21,
        course:"MERN",
        address: {
            city:"Bangalore",
            state: "karnataka"
        }
    },

    {
        id: 2,
        name: "ankit",
        age: 22,
        course:"java"
    }
  ];
   
    for(let key in students[0]){
      console.log("key : " + students[0][key]);
    }


    for(let ads in students){
      let student = students[ads];

      if("address" in student){

        console.log((ads+1), "student has the address");
      }else{
        console.log((ads+1), "student does not have the address");
      }
    };
       console.log("task 3");

    console.log(students[0].address?.city);
    console.log(students[1].address?.citycity);

     console.log("task 4");

    let propertyname = "batch";
    students[0][propertyname] = "morning";
    students[1][propertyname] = "evening";

    console.log(students);

    Object.defineProperty(students[0], "id",{
      writable: false,
    });

    Object.defineProperty(students, "password", {
      value: "ishant@123",
      enumerable: false,
    });

    console.log(students[0]);