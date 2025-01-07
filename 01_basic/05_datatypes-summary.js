 // There are two types of data types
 /*
 1. primitive datatypes
 there are 7 types of primitive datatypes
 i.String
 ii.Number
 iii.Boolean
 iv.Null
 v.undefined
 vi.Symbol
 vii.BigInt
*/



const score=100;
  const scoreValuer=100.3

  const isloggedIn=false

  const temperature=null

  let userEmail;

  const  id=Symbol('123')
  const anotherId=Symbol('123')

  console.log(id==anotherId); // ==> false
  console.log(id===anotherId); // ==>false

  const bigInt=123456789987654567n
  console.log(typeof bigInt); // ==> BigInt
 
  


/*
 2.Non-primitive datatypes
  ==> Non-primitives are called reference type object
  Array
  Object
  Function
 */

  const heroes= ["Kundan","krishna","kumar"]

  // Object are always created inside the block
  let myObject= {
    name:"kundan Krishna",
    age:22,
    course:"B.tech"
  }

  console.log(myObject);
  console.log(typeof (myObject));
  
  let myFunction= function(){
    console.log( "hello world");
  }

  console.log(typeof myFunction);
  
  
  