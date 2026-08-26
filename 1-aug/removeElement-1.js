 
/* const btn = document.createElement("button");

 btn.innerText = ("Click me");

setTimeout (() => {
 const para1 =  document.getElementById("fpara");
    para1.remove();
}, 5000); 

 document.body.append(btn); */

 const button1 = document.getElementById("btn");

 button1.addEventListener("click", () =>{
    const spara1 = document.getElementById("spara");
    spara1.remove();
 });