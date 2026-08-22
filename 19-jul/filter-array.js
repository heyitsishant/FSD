  
 /* let arr = [ 1, 2, 3, 4, 5 ,6 ];

 const evenArr = arr.filter((val) =>{

    return val % 2 ==0;
  });

  console.log(evenArr); */


 /* let marks = [ 30, 33, 45, 70, 95];

  const passedmarks = marks.filter((mark) => {

    return mark >= 33;
  });

  console.log(passedmarks); */

  let people = [
    {name: "jitendar" , city: "mumbai"},
    {name: "riyaz" , city: "delhi"},
    {name: "kamini", city: "ahmendabad"},
    {name: "ravi" , city: "delhi"},
    {name: "suman" , city: "bangalore"},
  ]

  // city => delhi, bangalore or ahmendabad
  // there name should contains the char i in it.

  const cities = ["delhi" , "bangalore" , "ahmendabad"];

  const peoples = people.filter((p) => {
    let isCitycorrect = cities.includes(p.city);
    let isNameMath = p.name.toLowerCase().includes("i");

    return isCitycorrect && isNameMath;
  });

  console.log(peoples);