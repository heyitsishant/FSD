  

  /* let students = [

    {
        name: "anu",
        birthYear: 2002,
        marks: 80,
    },

    {
        name: "arnav",
        birthYear: 2001,
        marks: 30,
    },

    {
    name: "ishant",
    birthYear: 2000,
    marks: 90,
    },
   ];

   const failedstudent = students.filter((fstud) => fstud.marks < 33);

   if(failedstudent.length > 0) console.log("yes!");
   else console.log("no");
*/

let user = [

    {
      role:  "user",
        name: "krish",

    },

    {
       role: "admin",
        name: "ishant",
    },
    {
     role: "user",
    name: "arnav"
    },
];

 /* const isAdmin = user.some((euser) => euser.role == "admin");

console.log(isAdmin);

constareAllUser= user.every((eUser) => eUser.role == "user"); */

const adminUser = user.find((eUser) => eUser.role == "admin");

console.log(adminUser);
