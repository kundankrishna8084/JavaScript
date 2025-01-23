//! STRING METHOD

//! slice(startIndex, endIndex)
//endIndex is always get ignored.

let str1="javascript";
console.log(str1);

//--> ignorining last index
console.log(str1.slice(0,3));//jav
console.log(str1.slice(0,4));//java

//-->Using negative index
console.log(str1.slice(-10, -6));//java

//--> Passing single value
console.log(str1.slice(2));//vasript
console.log(str1.slice(-2));//pt

//--> Using negative and +ve index
console.log(str1.slice(-8,6));//vasc



//!subString(startIndex,endIndex)
let str2="ReactJS";

//-->Last index ignored
console.log(str2.substring(2,4));//ac

console.log(str2.substring(2,5));//act

//-->Negative index are not valid in substring
console.log(str2.substring(-5,-2));// It will print empty space

//-->  Using Single value
console.log(str2.substring(5));//js

// console.log(str2.substring());/sir dekh kar batayege

 
//! substr(startIndex, length)
//length means number of character
let str3="Hello world";
console.log(str3.substr(2,3));//llo

console.log(str3.substr(-5));//world


//! --> replace(searchValue, replaceValue)
let str5= "Welcome everyone , Welcome to js class";

console.log(str5.replace("Welcome","Hii"));

//!-->replaceAll(searchValue ,)
console.log(str5.replaceAll("Welcome", "Hi"));


//! toUpperCase()
let str6="ashmit";
console.log(str6.toUpperCase());//ASHMIT

//! toLoweCase()
let str7="ASHMIT";
console.log(str6.toLowerCase());//ashmit

//! concat()
let str8="Hello";
let str9=" world";
console.log(str8.concat(str9));//Hello world

//! trimEnd()
let str10= "      CSS      ";
console.log(str10);
console.log(str10.trimEnd());

//! trimStart()
console.log(str10.trimStart());

//! trim()
console.log(str10.trim());




//! toString() and padStart()/padEnd()
//let Aadhaar_no = 987654320987;
// console.log(Aadhaar_no); // 987654320987
// console.log(typeof Aadhaar_no); // number

// let Aadhaar_str = Aadhaar_no.toString();
// console.log(Aadhaar_str); // "987654320987"
// console.log(typeof Aadhaar_str); // string

// let val = Aadhaar_str.slice(0,8)
// let output = val.padEnd(12,"X")
// console.log(output);// 98765432XXXX



//! Method chaining
// let Aadhaar_no = 987654320987;
// let output = Aadhaar_no.toString().slice(0,8).padEnd(12,"X")
// console.log(output);// 98765432XXXX

//! To check pallindrome
// function isPallindrome(str) {
//     let val=str.split("").reverse().join("");
//     if (val==str) {
//         return "Pallindrome"
//     }
//     return "Not Pallindrome"
// }
// let output=isPallindrome("dad");
// console.log(output);

//! USER INPUT
//prompt
// function userDetails() {
//     let fname=prompt("Enter first name");
//     let lname=prompt("Enter last name");

//     console.log(fname,lname);
// }
//userDetails()


//! alert()
//alert("THis site is restricted");


//!confirm()
 let x =confirm("Are you sure")
 console.log(x);

