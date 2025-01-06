const accountId=12345;
let email="Kundan@gamil.com";
var password="124567";
accountCity="kota"
let accountState;
//accountId=2; // it is not allowed because cost varible can't be change
console.log(accountId);
/*
prefer to not use var
because of issue in block scope and Functional Scope
*/

email="krishna@gamil.com"
password="89765"
accountCity="jaipur"
console.table([accountId,email,password,accountState]);