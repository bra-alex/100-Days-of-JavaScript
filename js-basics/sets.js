//Sets
//Creating sets
//Constructors
/*
const set = new Set()
console.log(set)
*/

//From arrays
/*
const languages = ["English", "Twi", "English", "Twi", "English", "Twi"]
const setOfLanguages = new Set(languages)
// console.log(setOfLanguages)
*/

//Iterating over sets
/*
for (const language of setOfLanguages) {
    console.log(language)
}
*/

//Adding elements to sets
/*
set.add('Hi')

for (const language of languages) {
    set.add(language)
}

console.log(set)
*/

//Deleting elements of a set
/*
set.delete('Hi')
console.log(set)
*/

//Checking elements in a set
/*
console.log(set.has('Twi'))
*/

//Clearing of set
/*
set.clear()
console.log(set)
*/

//Application of set
//Finding number of occurences in an array
/*
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const languageSet = new Set(languages)
const count = []

for (const language of languageSet) {
    const filteredLanguage = languages.filter(lang => lang === language)
    count.push({language: language, count: filteredLanguage.length})
}
console.log(count)
*/

//Finding unique members of an array
/*
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
*/

//Union of sets
//Using the spread operator
/*
const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7]
const c = [...a, ...b]

const setA = new Set(a)
const setB = new Set(b)
const setC = new Set(c)

console.log(setC)
*/

//Intersection of sets
/*
const c = a.filter(num => setB.has(num))
const setC = new Set(c)

console.log(setC)
*/

//Difference of sets
/*
const c = a.filter(num => !setB.has(num))
const setC = new Set(c)

console.log(setC)
*/