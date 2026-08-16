  let x = 10; // glabol variable x = 10

  function outer(){

    let y = 20; // local variable inside the outer y = 20

    function inner(){

        let z = 30; // local variable inside the inner function z = 30

        console.log(x + " : " + y ," : "  + z );
    }
         inner (); // call the inner function here
  }

  outer();  // calling the function right after creating this