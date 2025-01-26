//! ARRAY METHODS
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

//! 1) pop():Removes the last element from an array and returns it
// console.log(arr.pop()); // 50
// console.log(arr);// [10, 20, 30, 40]

//! 2) push():Appends new elements to the end of an array, 
//!and returns the new length of the array.
// console.log(arr.push("Hello"));
// console.log(arr);// [10, 20, 30, 40, "Hello"]

//! 3) unshift()-->Inserts new elements at the start of an array, 
// and returns the new length of the array.
// console.log(arr.unshift());//6
// console.log(arr);//['start',10,20,30,40.'Hello']

//! 4)shift()-->Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
// console.log(arr.shift());//"start"
// console.log(arr);//[10,20,30,40.'Hello']

//! 5)slice(startIndex, endIndex)
//? Its used to extract a portion of an array
//? It accepts 2 arguments startIndex and endIndex in which it ignores the endIndex.
//? It will not affect the original Array
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);//[ 10, 20, 30, 40, 50 ]
// let slicedArr = arr.slice(1,4);
// console.log(slicedArr);//[ 20, 30, 40 ]
// console.log(arr);//[ 10, 20, 30, 40, 50 ]


//What is difference between slice and splice
//! 6) splice(startIndex, deleteCount, newElements)
//?Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//? start — The zero-based location in the array from which to start removing elements.
//? deleteCount — The number of elements to remove.
//?  items — Elements to insert into the array in place of the deleted elements.
//?returns — An array containing the elements that were deleted.
//-->It will affect the original array
//let arr1=[100,200,300,400,500]
//         0    1   2   3   4
//console.log(arr1);//[ 100, 200, 300, 400, 500 ]

// arr1.splice(2,2)//?It will delete 2 elements.
// console.log(arr1);//[ 100, 200, 500 ]

// arr1.splice(1,3,"Hello","Hii")//?It will delete 3 elments an add 2 elments.
// console.log(arr1);//[ 100, 'Hello', 'Hii', 500 ]

// arr1.splice(3,0,1000)
// console.log(arr1);//[ 100, 200, 300, 1000, 400, 500 ]

//! join()
//? Adds all the elements of an array into a string, 
// and separated by the specified separator string.
// let arr =[10,20,30,40,50]
// console.log(arr.join(" "));//10 20 30 40 50

//! toString()
//?Returns a string representation of an array.
  //  console.log(arr.toString());//10,20,30,40,50
   
//! reverse()
//? Reverses the elements in an array in place.
// console.log(arr.reverse());//[ 50, 40, 30, 20, 10 ]

//! includes()
//? Determines whether an array includes a certain element, 
// ? returning true or false as appropriate.
// console.log(arr.includes(50));//true
// console.log(arr.includes(100));//false


//! indexOf()
//?Returns the index of the first occurrence of a value in an array, 
// ? or -1 if it is not present.
// console.log(arr.indexOf(50));//0
// console.log(arr.indexOf(100));//-1

//! at()
//? Returns the item located at the specified index.
//? index — The zero-based index of the desired code unit. 
//? A negative index will count back from the last item.

// console.log(arr.at(2));//30
// console.log(arr.at());//0



//! concat()
//? Combines two or more arrays. 
//? This method returns a new array without modifying any existing arrays.
//  let arr1 =["Hii", "Kundan"]
//  let arr2 = ["Welcome", "to","JS"]

// let result=arr1.concat(arr2);
// console.log(result);//[ 'Hii', 'Kundan', 'Welcome', 'to', 'JS' ]
// console.log(result.join(" "));//Hii Kundan Welcome to JS



//! sort()
// let arr=[1,4,6,2,7,3,9];
// console.log(arr.sort());

//let arr2 = [10,6,50,12,30,2];
//?lexographical sort
//console.log(arr2.sort());//[ 10, 12, 2, 30, 50, 6 ]

// console.log(arr2.sort((a,b)=> a-b));//[ 2, 6, 10, 12, 30, 50 ]-->asc order
// console.log(arr2.sort((a,b)=> b-a));//[ 50, 30, 12, 10, 6, 2 ]-->desc order



//! for loop
let arr=[10,20,30,40,50,60];
for (let i = 0;i < arr.length; i++) {
 console.log(arr[i],i);
}

//! for in loop
for(let x in arr){
  console.log(x);
}

//! for of loop
for(let x of arr){
  console.log(x);
  
}

 