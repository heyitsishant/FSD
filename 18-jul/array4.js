  /* let arr = [1, 2, 3, 4, 5,];

arr.push(6);
arr.push(7);
 
console.log(arr);

arr.pop();

console.log(arr); */

/* let arr =[1 , 2 , 3 , 4 , 5];

while(arr.length > 0){

    let lastelem = arr.pop();
    console.log(lastelem);
}

console.log("all elements removed"); */


 /* let arr =[1 , 2 , 3 , 4 , 5];
  arr.pop(); // removes last elements of my array

  arr.shift(); // removes the elements from the begnning of the array

  arr.unshift(10);
  console.log(arr);  */

  /* let arr = [1, 2, 3, 4, 5];

  const subarray = arr.slice(1 , 4); // 1 is included and 4 is excluded

  console.log(subarray);

  // how to create a copy of an array using slice */

  let arr = [0, 1 , 2, 3, 4, 5];

  let copy = arr.slice(0 , arr.length);

  console.log(copy);