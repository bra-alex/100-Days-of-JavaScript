// Variables
let name = 'Alex';

// Constants
const interestRate = 0.196;

// Primitive types
let fName = 'Alexander'; //String
let age = 0; //Number
let condition = false; //Boolean
let selection = null; 

// Dynamic Typing
//console.log(typeof fName);
fName = 1;
//console.log(typeof fName);

// Reference Types
// Object
//Declaring object literal
let car = {
    make: 'BMW',
    model: '330i',
    year: 2022,
    bhp: 269
};

//Access object properties
//Dot notation
car.make = 'Honda';

//Bracket notation
car['model'] = 'CR-V';

// console.log(car);

// Arrays

let colors = ['pink', 'yellow'];

// console.log(colors.length);

//Functions

function hello(fName, lName) {
   console.log('Hello ' + fName + ' ' + lName); 
}


function square(number) {
    return number * number;
}

function kineticEnergy(mass, velocity) {
    return 0.5 * (mass * square(velocity));
}

let mass = 26.95;
let velocity = 23.64;

console.log(`The kinetic energy of a body with mass, ${mass}kg, and a velocity, ${velocity}m/s, is ${kineticEnergy(mass, velocity)}`);

