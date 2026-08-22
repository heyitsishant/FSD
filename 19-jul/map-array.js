  

 /* let arr = [1, 2, 3, 4, 5];

  //[2, 3, 4, 5]

 const newArr =  arr.map((val) =>{ 

    return val + 1;
 })

 console.log(newArr); */

 let employees = [

    {name: "ravi" , salary: 80000},
    {name: "abhishek", salary: 75000},
    {name: "anu" , salary: 85000},
 ];

const newSalary = employees.map((emp) =>{

    emp.salary = emp.salary * 1.1;

    return emp;
})

console.log(newSalary)