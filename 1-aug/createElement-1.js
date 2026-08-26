

  let btn = document.createElement("button");

  // console.log(document.body.innerHTML);
    
  btn.innerText = "Click me";

  btn.onclick = () =>{

    console.log( "Button has been clicked");
  };
  document.body.append(btn);

 // document.body.prepend(btn); 

 const secondPara = document.getElementById("secondPara");

 document.body.insertBefore(btn, secondPara); 
