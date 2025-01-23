//! ARRAYS:-
//2 ways of creating array

//? 1. Array literals
//It will consider 10 as an elements of array
// let arr1=[10]
// console.log(arr1);//[10]


//?  2. Array Constructor
//It will consider 10 as size of array
// let arr2 = new Array(10);
// console.log(arr2);//[empty items*10 ]

//? Homogenous
// let arr1=[10,20,30,40,50]//homo
// console.log(arr1);


//? Heterogenous
// let arr2=[10,true,null,undefined,1n,Symbol("Hello"),function(){}]
// console.log(arr2);


// let arr1=[10,20,30,40,50]
// //         0  1  2  3  4
// console.log(arr1[1]);


// let arr2=[100,200,["Hii","Byee"]];
// console.log(arr2[1]);
// console.log(arr2[2]);
// console.log(arr2[2][0]);



//! ARRAY PROPERTY

 let arr = [10,20,30,40,50,60,70]
console.log(arr.length);
 console.log(arr[arr.length-1]);
