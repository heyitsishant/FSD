

 /* let user = {
    name: "ankit",

 }

 console.log(user.address?.city === undefined? "no city" : "city is there"); // undefined.city */

 /*let response = undefined;
  
 console.log(response?.data?.user?.name);
*/

 let employees = [

     {
        name: "kamini",
        salary: 100000,
     },

     {
        name: "abhishek",
        salary: 120000,
     },
     {
        name: "altaf",
     },

 ];

 // give me the total sum of salary of employee 1, 3, 5, 7,

 /* let indexes = [ 1, 3, 5, 7];
  let totalsalary = indexes.reduce((total, index) =>{
    
    return total + (employees?.[index]?.salary || 0);
  }, 0);

  console.log(totalsalary);  */

  // 2nd method

 /*let indexes = [1, 3, 5, 7];

let sum = 0;

indexes.forEach((index) => {
    sum += employees[index - 1]?.salary || 0;
});

console.log(sum); */

 let teams = [
    {
        leaderName: "pratik",
        teamMembers: [
    {
         memberName: "altaf",
    },
    {
        memberName: "kamini",
    },
 ],
},   
    {
        leaderName: "abhishek",
     teamMembers: [
    {
         memberName: "nitesh",
    },
    {
        memberName: "ravi",
    },
    ],
},
 ];

 const allTeamMembers = teams.reduce((members, team) => {

    members.push(team.leaderName);

    team.teamMembers?.forEach((aTeamMember) =>{
        members.push(aTeamMember.memberName);

    });
    return members;
 }, []);

 console.log(allTeamMembers);