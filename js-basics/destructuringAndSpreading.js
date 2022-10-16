//Arrays
//Destructuring all values into different variables
/*
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)
*/

//Skipping specific indices
/*
let[, two, ] = numbers

console.log(two)
*/

//Assign a default value if the array value is undefined
/*
const names = [undefined, 'Brook', 'David']
let [first = 'Alex', second, , fourth = 'Dross'] = names
console.log(first, second, fourth)
*/

//Assigning some values and passing the rest as an array
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let[first, , , fourth, ...rest] = nums
console.log(first, fourth, rest)
*/

//Using Loops
/*
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country , city] of countries) {
    console.log(country, city)
}
*/

//Objects
//Values must be same as key values
//Values that aren't found are assigned undefined
/*
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle

console.log(width, height, area, perimeter)
*/

// Renaiming values
/*
let {width: w, height: h, area: a, perimeter: p} = rectangle

console.log(w, h, a, p)
*/

//Setting default values to undefined values
/*
let {width: w, height: h, area: a, perimeter: p = 2 * (w + h)} = rectangle

console.log(w, h, a, p)
*/

//Using Functions
/*
const calculatePerimeter = ({width, height}) => 2 * (width + height)

console.log(calculatePerimeter(rectangle))

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}

const getPersonInfo = ({firstName, lastName, age, country, job, skills, languages}) => {
    const filteredSkills = skills.slice(0, -1).join(', ')
    const filteredLanguages = languages.slice(0, -1).join(', ')
    return `${firstName} ${lastName} is a ${age} years old man living in ${country} and works as a ${job}. He teaches ${filteredSkills} and ${skills[skills.length - 1]}. He speaks ${filteredLanguages} and ${languages[languages.length - 1]}`
}

console.log(getPersonInfo(person))
*/

//Using Loops
/*
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for (const {task, time, completed} of todoList) {
    console.log(task, time, completed)
}
*/