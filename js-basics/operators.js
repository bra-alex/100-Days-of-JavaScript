// Arithmetic Operators
/*
let x = 10;
let y = 5.6;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // Raised to the power of y

// Increment operators

// Before variable increases before it is logged
console.log(++x);

// After variable increases after it is logged
console.log(x++);
console.log(x);

// Decrement operators

// Before variable decreases before it is logged
console.log(--x);

// After variable decreases after it is logged
console.log(x--);
console.log(x);


// Assignment Operators

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x += y);
console.log(x **= y);

// Comparison Operators

//Relational Operators
console.log(x > 5);
console.log(x >= 5);
console.log(x < 5);
console.log(x <= 5);


//Equality operators
console.log(x !== 5);

//Strict Equality
//Ensures type and value are equal
console.log(x === 10); //true
console.log(x === '10'); //false

//Lose Equality
//Doesn't ensure that the values are of the same type
//If they aren't it converts the type of the right to the type on the left
console.log(x == '10'); //true
console.log(x == 10); //true
console.log(x == true); //false
*/

// Tenary Operators
let grade = 69;
// If true, evaluate after question mark else evaluate after colon
let gradeClass = grade >= 70 ? 'First Class' : 'Second Class Upper'; 
console.log(gradeClass);


//Logical Operators with Booleans

let income = 499;
let creditScore = 300;
let highIncome = income > 500000;
let goodCreditScore = creditScore > 350;
// let eligibleForLoan = highIncome && goodCreditScore; //Logical AND (&&)
let eligibleForLoan = highIncome || goodCreditScore; //Logical OR(||)
let applicationRefused = !eligibleForLoan ? "Refused! Get your credit score and income up you bum." : "Congratulations, you qualify for a loan."; //NOT(!)
console.log(applicationRefused);


// Logical Operators with Non-Booleans
//Treats the non boolean values as either Falsy or Truthy 
//Falsy Values
//    undefined
//    null
//    0
//    ''
//    NaN

//Truthy values are anything that don't fall under falsy
//Short-circuiting: Terminates after the first operation produces a Truthy value regardless of the operations after it.

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor)


// Bitwise Operators
// Bitwise AND (&)
// Bitwise OR (|)
// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let permissions = (myPermission & readPermission) ? 'You can only read this file.' : 'You can only write to this file';
console.log(permissions)
// */

// Programming Exercise

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);