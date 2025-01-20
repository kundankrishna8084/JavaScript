//TODO --> Return type function

// let n1=10;
// let n2=20;

// function sum(){
//     return n1+n2;
// }

// let x = sum()
// console.log(x);

 
 
 
// todo --> PARAMETERIZED FUNCTION

// function welcome(a,b,c) {
//     console.log(a,b,c);
// }
// welcome("Raj","udit",10);

// function multiply(n1,n2) {
//     return n1*n2
// }

// let val = multiply(10,20)
// console.log(val);

 
// function sum(a,b) {
//     return a+b
// }

// let x=sum
//  let output= x(10,50)
//  console.log(output);
 


//! ANNONYMOUS FUNCTION :- A Function without name is called Annonymous function

//function() { }


//!Function Expression
// A function expression is used to call annonnymous function.
//  var fun = function(){
// console.log("I am Annonymous function getting called by using function expression");

//  }
 
//  console.log(fun);// function (){}
//  fun()
 


// ! GEC WITH FUNCTION EXPRESSION
// console.log("start");
// console.log(fun);
// var a=10;
// console.log(a , fun);
// var b=30;
// b=80;
// var fun = function(){
//     console.log("I am function ");
    
// };
// console.log(b,a,fun);
// fun();
// console.log("End");


//! EXAMPLE 2
// console.log("start");
// console.log(fun);//ud
// var a=10;
//console.log(a , fun());//! Error:-fun is not a function
// var b=30;
// b=80;
// var fun = function(){
//     console.log("I am function ");
    
// };
// console.log(b,a,fun);
// fun();
// console.log("End");



//! REST PARAMETERIZED FUNCTION
// function sum(a,b,...c) {
//     console.log(a,b);//10 20
//     console.log(c);//[30,40,50,60]
//     console.log(arguments);//[10,20,30,40,50,60,.....]
    
    
// }
// sum(10,20,30,40,50,60);


//! NESTED FUNCTION
//Example
// function Outer(){
//     var a =10;
//     console.log(a);
//     function Inner(){
//         var b=20;
//         console.log(b);       
//     }
//     Inner();
// }
// Outer();
 
//!EXAMPLE 2

// function Outer(){
//     var a =10;
//     console.log(a);//10

//     function Inner(){
//         var b=20;
//         console.log(b);//20
//     }
//      return Inner;
// }

//  let fun=Outer();
//  console.log(fun);
//  fun()

//!Example 3
//!Example 4

//   function parent() {
//     var money =50000;
//     console.log(money);
  
//   function child() {
//     var saving=500;
//     console.log(saving);
//     return "Hii"
//   }
//   return child();
// }
// var val =parent();
// console.log(val);
// val()

//!Example 5
// function Outer() {
//     var a=10;
//     var b=20;
//     console.log(a+b);

//     function Inner() {
//         var n1=30;
//         var n2=5;
//         console.log(n1-n2);
        
//         function InnerMost() {
//             var x=5;
//             var y =5;
//             return x*y;
//         }
//         return InnerMost();
//     }
//     return Inner();
    
// }
// let output = Outer()
// console.log(output);


//! CLOSURES AND LEXICAL SCOPING 
//Closure-->closure is amemory which is created whenever we try to access parent function 
// parent function properties inside child function.

//Lexical Scoping --> It is ability of js-engine to serach a variable outside of its current scope
//! Example 1
// function Parent(){
//     var money=50000;
//     console.log(money);
    
//      function Child() {
//       var saving =500;
//      console.log(saving+money);
//     }  
//     Child();

// }
// parent();


//!Example 2
// function Parent(){
//     var money=50000;
//     console.log(money);
    
//      function Child() {
//       var saving =500;
//      console.log(saving+money);
//     }  
//      return Child;

// }
//  var x= parent();
//  console.log(x);
//  x();
 

//! IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
//it can be called only once
(function test() {
    console.log("I am IIFE 1");
  })();
  
  (function() {
    console.log("I am IIFE 2");
  })();
  
  
  //!HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
  // function sum(num1,num2) {
  //     return num1+num2;//30
  // }
  
  // function calculate(n1,n2,f) {
  //     // console.log(n1);//10
  //     // console.log(n2);//20
  //     // console.log(f);//Function sum(num1,num2){}
      
  
      
  //     // let val=f(n1,n2);
  //     // console.log(val);//30
  
  
  //     //! WAY1
  //     // let val=f(n1,n2);
  //     // return val;
   
  //     //! WAY2
  //     return f(n1,n2);
      
  // }
  //  let x= calculate(10,20,sum);
  //  console.log(x);//30
  
  
   //! ARRAY FUNCTION 
   //SYNTAX:()=>{}
     //Array function lo declare ke pale call nhui kar sakte hai.
      
      // var a=()=>{
      //     console.log("I am arrow function");
      // };
      // console.log(a);
      // a();
      
   
  
  
      //! RULES / WAYS  OF ARROW FUNCTION
      // //Rule1
      // var a =()=>console.log("Hii");
      // a()
      
      // //Rule2
      // var b =_=>console.log();
      // b()
  
      // //Rule3
      // var c = n1 =>console.log(n1);
      // c(10)
  
      // //Rul4
      // var d =(n1,n2)=>console.log(n1,n2);
      // d(10,20)
  
      // //! EXPLICT RETURN 
      // var e = (n1,n2)=> {return n1+n2}
      // console.log(e(10,20));
  
      // //! IMPLICT RETURN 
      // var f=(n1,n2) => n1+n2
      // console.log(f(50,10));
      
      
