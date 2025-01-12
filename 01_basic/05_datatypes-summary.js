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


/*
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
 */
  


/*
 2.Non-primitive datatypes
  ==> Non-primitives are called reference type object
  Array
  Object
  Function
 */

/*
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
  */




  /*
console.log("External Js");
var a;
console.log(a); // undefined
console.log(typeof a); //undefined

a = 10.67;
console.log(a); // 10.67
console.log(typeof a); //number

var b = "hello world";
console.log(b); //Hello world
console.log(typeof b); //string

var c = true;
console.log(c); //true
console.log(typeof c); //boolean

var d = null;
console.log(d); //null
console.log(typeof d); //object

var e = 9999999999999999999999999999999999999999999999999n;
console.log(e); //999
console.log(typeof e); //bigint

var s1 = Symbol("Hiiii");
var s2 = Symbol("Hiiii");

console.log(s1);
console.log(s2);

console.log(s1 == s2); //false

console.log(typeof s1); //symbol
*/




/*

//  var Varaible 
var a; // declaration
console.log(a);// undefined

let b;// declaration
console.log(b); // undefined

b=30; // initialization 
console.log(b); // 30


// let b // !redecalaration is not possible

b=40;
console.log(b);//40

// Const variable
const c="hello I am Const";
console.log(c);

*/

// var a=10;
// console.log(a) // 10

// var a=20;
// console.log(a);


// var a;
// console.log(a); // undefined
// console.log(b); // Error  not defined



//! Hoisting means moving declaration part at the top of the original code 
//! internally/implicately and it is possible only in var variables
 // var firstName; --> todo --> internally by js engine

 console.log(firstName); // undefined

 var firstName="Kundan";
 console.log(firstName);



 // ! Temporal Dead Zone (TDZ):- Time period between  accessing of variable  before
 // ! declaration of varaible  is known as TDZ . And it os possible in let and const variable

 //console.log(lastName); // !error can not access
 const lastName="Krishna";
 console.log(lastName);// Krishna
 
 
  
  