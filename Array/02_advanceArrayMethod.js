//!Advance Array Methods
let arr=[10,20,30,40,50];

//! 1)-->  forEach()
// let x=arr.forEach(function(ele,index,array){
//     console.log(ele);
//     return ele*2;  
// })
// console.log(x);


//! map()
//? Calls a defined callback function on each element of an array, 
//? and returns an array that contains the results.
 //let y = arr.map((ele, index, array) => {
//       console.log(ele);
//       return ele * 2;
//     });
//     console.log(y);

//! 3)--> filter()
//? Returns the elements of an array that meet the condition specified in a callback function.
let arr1 = [100, 200, 300, 40, 500, 60];
let filteredVal = arr1.filter((ele) => {
  return ele < 100;
});
console.log(filteredVal);//[ 40, 60 ]

let val = arr.filter(ele => ele<100)
console.log(val);//[ 10, 20, 30, 40, 50 ]

let arr2 = [10, 10, 20, 30, 40, 10, 50, 60];
let x = arr2.filter((ele) => ele == 10);
console.log(x);//[ 10, 10, 10 ]



//! 4)-->find()
//? Returns the value of the first element in the array where predicate is true,
//? and undefined otherwise.
// let arr1= [10,20,30,40,50];
// let y=arr1.find(ele=>ele==10)
// console.log(y);//10

//! 5)-->findIndex()
//? Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let idx=arr1.findIndex(ele=>ele==10);
// console.log(idx);


// let idx=arr1.findIndex((ele) => {
//     return ele ==10;
// });
// console.log(idx);



//! 6)--> reduce()
//? 
//? syntax 
arr.reduce((accValue, ele,i,arr)=>{},accValue)

//? Calls the specified callback function for all the elements in an array. 
//? The return value of the callback function is the accumulated result, 
//? and is provided as an argument in the next call to the callback function.

// let arr =[10,20,30,40,50];
// let x=arr.reduce((acc,ele,i,Array)=>{
//     console.log(acc,ele,i);
//     return acc+ele; 
// },250);
// console.log(x);
//? Output
// 250 10 0
// 260 20 1
// 280 30 2
// 310 40 3
// 350 50 4
// 400


