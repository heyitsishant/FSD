

let student = {

    id: 101,
    name: "ishant",
     age: 20,
    course: "bca",
    marks: 71,
    
}
student["email"] = "ishant@gmail.com";
delete student.age;

// for in: its allow you to iterate over each key of the object
 /* for(let key in student){
    console.log(key + " : " + student[key]);
} */

   /* let cnt = 0;

    for(let key in student ){

        let value = student[key];

        if(typeof value === "number") cnt++
    }

    console.log(cnt); */

    console.log("email" in student);

    let nums =[10, 20, 30];

    console.log(2 in nums);