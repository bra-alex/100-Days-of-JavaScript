//sessionStorage
/*
console.log(sessionStorage)
*/

//localStorage - to display the localStorage object
/*
console.log(localStorage)
*/

//setItem() - to store data in the localStorage. It takes a key and a value parameters.
//String
/*
localStorage.setItem('firstName', 'Alexander')
console.log(localStorage)
*/

//Number
/*
localStorage.setItem('age', 21)
console.log(localStorage)
*/

//Array
/*
let skills = ['HTML', 'CSS', 'JS', 'React']
let skillsTxt = JSON.stringify(skills, undefined)
localStorage.setItem('skills', skillsTxt)
console.log(localStorage)

skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

skillsTxt = JSON.stringify(skills)
localStorage.setItem('newSkills', skillsTxt)
*/

//Object
/*
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userJSON = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userJSON)
*/

//getItem() - to display data stored in the localStorage. It takes a key as a parameter.
/*
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(firstName, age, skillsObj)
*/

//removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
/*
localStorage.removeItem('user')
localStorage.removeItem('newSkills')
console.log(localStorage)
*/

//key() - to display a data stored in a localStorage. It takes index as a parameter.
/*
console.log(localStorage.key(2))
*/

//clear() - to remove everything in the local storage
/*
localStorage.clear()
*/
