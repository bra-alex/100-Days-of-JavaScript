//Day 2
//Exercise 1
/*
let challenge = ' 30 Days Of JavaScript '
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,8))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.trim())
console.log(challenge.startsWith(' '))
console.log(challenge.endsWith(' '))
console.log(challenge.match(/a/gi))
console.log(challenge.repeat(2))

challenge = '30 Days of'

console.log(challenge.concat(' JavaScript'))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))

let string2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string2.indexOf('because'))
console.log(string2.lastIndexOf('because'))
console.log(string2.search('because'))
*/

//Exercise 2
/*
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

console.log(`${typeof parseInt('10') == typeof 10}`)
console.log(`${Math.ceil(parseFloat('9.8')) == 10}`)
let word = 'jargon', word2 = 'python'
console.log(`${word.search('on')}, ${word2.search('on')}`)

let sentence = 'I hope this course is not full of jargon.'
console.log(`${sentence.search('jargon')}`)

let number = Math.floor(Math.random() * (100 + 1))
console.log(number)

number = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(number)

number = Math.floor(Math.random() * (255 + 1))
console.log(number)

let word = 'JavaScript'
let index = Math.floor(Math.random() * word.length)
console.log(word[index])

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence.match(/love/gi))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(30, 54))
console.log(sentence.match(/because/g))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence.replace(/[^a-zA-Z0-9 ]/g, '')

let incomeStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = incomeStatement.match(/\d+/g)
console.log(`${(+income[0] + +income[1]) - +income[2]}`)
*/

//Day 3
//Exercise 1
/*
let firstName = 'Alexander'
let lastName = 'Boakye'
let country = 'GH'
let city = 'Kumasi' 
let age = 21
let isMarried = false 
let year = new Date().getFullYear()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log('10' === 10)
console.log(parseInt('9.8') === 10)

//Truthy
console.log(isMarried != firstName)
console.log(0 < age)
console.log('Ghana' != city)

//Falsy
console.log(isMarried === firstName)
console.log(0 == age)
console.log('Ghana'.length > city.length)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length != 'jargon'.length)

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log(!'python'.endsWith('on') && !'dragon'.endsWith()) //false
*/

//Exercise 2
/*
let base = prompt('Enter base')
let height = prompt('Enter height')
let area = 0.5 * +base * +height
console.log(`Enter base: ${base}\nEnter height: ${height}\nThe area of the triangle is ${area}`)

let a = prompt('Enter side a')
let b = prompt('Enter side b')
let c = prompt('Enter side c')
let perimeter = +a + +b + +c
console.log(`Enter side a: ${a}\nEnter side b: ${b}\nEnter side c: ${c}\nThe perimeter of the triangle is ${perimeter}`)

let length = prompt('Enter length')
let width = prompt('Enter width')
area = +length * +width
perimeter = 2 * (+length + +width)
console.log(`The perimeter of the rectangle is ${perimeter}.\nThe area of the rectangle is ${area}`)
const pi = 3.14
let radius = prompt('Enter radius')
area = pi * +radius * +radius 
let circumference = 2 * pi * +radius
console.log(`The circumference of the circle is ${circumference}.\nThe area of the circle is ${area}`)

let x1 = prompt('Enter x1')
let y1 = prompt('Enter y1')
let x2 = prompt('Enter x2')
let y2 = prompt('Enter y2')

let slope = (+y2 - +y1) / (+x2 - +x1)
let y = 0, x = 0
let xIntercept = (y + 2) / 2
let yIntercept = (2 * x) - 2
console.log(`The slope of the line is ${slope}.\nThe x-intercept and y-intercept of the line is (${xIntercept}, ${yIntercept})`)
x1 = 2, y1 = 2, x2 = 6, y2 = 10
console.log(`${slope}`)

x = prompt('Enter x')

y = ((x ** 2) + (6 * x) + 9)
console.log(`${y}`)

let hour = prompt('Enter hours')
let ratePerHour = prompt('Enter rate per hour')
let pay = hour * ratePerHour
console.log(`Your weekly earning is ${pay}`)

let firstName = 'Alexander'
let lastName = 'Boakye'

console.log(firstName.length > lastName.length ? `Your first name, ${firstName} is longer than your family name, ${lastName}` : `Your family name, ${lastName} is longer than your first name, ${firstName}`)

let yourAge = 25
let myAge = 21
console.log(myAge > yourAge ? `I am ${myAge - yourAge} years older than you.` : `You are ${yourAge - myAge} years older than I.`)

birthYear = prompt('Enter birth year')

let age = new Date().getFullYear() - +birthYear 
console.log(age > 18 ? `You are ${age}. You are old enough to drive` : `You are ${age}. You will be allowed to drive after ${18 - age} years.`)

age = prompt('Enter age')

let birthYear = new Date()
birthYear.setFullYear(new Date().getFullYear() - +age)
let timeLived = (new Date().getTime() - birthYear.getTime()) / 1000
console.log(`You have lived ${timeLived} seconds`)

const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()

console.log(`${year}-${month < 10 ? '0' + String(month) : month}-${date < 10 ? '0' + String(date) : date} ${hours < 10 ? '0' + String(hours) : hours}:${minutes < 10 ? '0' + String(minutes) : minutes}`)
console.log(`${date < 10 ? '0' + String(date) : date}-${month < 10 ? '0' + String(month) : month}-${year} ${hours < 10 ? '0' + String(hours) : hours}:${minutes < 10 ? '0' + String(minutes) : minutes}`)
console.log(`${date < 10 ? '0' + String(date) : date}/${month < 10 ? '0' + String(month) : month}/${year} ${hours < 10 ? '0' + String(hours) : hours}:${minutes < 10 ? '0' + String(minutes) : minutes}`)
*/

//Exercise 3
/*
console.log(`${year}-${month < 10 ? '0' + String(month) : month}-${date < 10 ? '0' + String(date) : date} ${hours < 10 ? '0' + String(hours) : hours}:${minutes < 10 ? '0' + String(minutes) : minutes}`)
*/

//Day 4
//Exercise 1
/*
let age = prompt('Enter your age:')
let message = (+age >= 18) 
message    
    ? console.log('You are old enough to drive') 
    : console.log(`You are left with ${18 - +age} years to drive.`)
*/

//Day 5
//Array from range
/*
const numbers = arrayFromRange(0, 0)
console.log(numbers)

function arrayFromRange(min, max){
    const array = []
    for (let i = min; i <= max; i++) 
        array.push(i)
    return array
}
*/

//Includes
/*
const numbers = [1, 2, 3, 4, 5]
console.log(includes(numbers, 7))

function includes(array, searchElement){
    for(let element of array) 
        if (searchElement === element) return true
    return false 
}
*/

//Except
/*
const numbers = [1, 2, 3, 4, 1, 1]
const excluded = [1, 2]

console.log(except(numbers, excluded))
function except(array, excluded){
    const output = []
    array.forEach(element => {
        if(!excluded.includes(element)) output.push(element)
    });
    return output
}
*/

// Move elements
/*
console.log(move([1, 2, 3, 4], 0, 0))
function move(array, index, offset){
    const position = index + offset
    const output = [...array]

    if(position >= array.length || position < 0){
        return console.error('Invalid offset')
    }

    const value = output.splice(index, 1)[0]
    output.splice(position, 0, value)

    return output
}
*/

// Count Occurences    
/*
const numbers = [1,2,3,4,1,1,1,1]
const searchElement = 0


function countOccurences(array, searchElement) {

    let count = 0
    for (const element of array) 
        if(element === searchElement)
            count++
            
        const count = array.reduce(((accumulator, element) => {
            const occurence = (element === searchElement) ? 1 : 0
            return accumulator + occurence
        }), 0)
        return count
    }
        
    console.log(countOccurences(numbers, searchElement))
    console.log(count)
*/

//Get Max
/*
const numbers = [1, 10, 20, 50, 9]
console.log(getMax(numbers))

function getMax(array) {
    if (array.length === 0) return undefined
    let max = array[0]
    for (const num of array) 
        if(max < num)
            max = num
    return max
           
    return array.reduce((a, b) => (a > b) ? a : b)
}
*/

//Movie Titles
/*
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]

const sortedMovies = movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((movieA, movieB) => movieA.rating - movieB.rating)
    .reverse()
    .map(movie => movie.title)

console.log(sortedMovies)
*/

//Day 6 & 7
//Exercise 1
/*
const dog = {}
console.log(dog)

dog.name = 'Rambo'
dog.legs = 4
dog.color = 'Black'
dog.age = 2
dog.bark = function () {
    console.log('woof woof')
}

console.log(Object.values(dog), dog.bark())
dog.breed = 'Rotweiller'
dog.getDogInfo = function (){
    for (const key in dog) 
        console.log(key, dog[key])
}
*/

//Exercise 2
/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

function userWithMostSkills(obj){
    let mostSkills = 0
    let user 
    let mernDevelopers = []
    for (const key in obj) {
        let index = Object.keys(obj[key]).indexOf('skills')
        let skills = Object.values(obj[key])[index].length

        if(skills > mostSkills){
            user = key
            mostSkills = skills
        }
        
        skills = Object.values(obj[key])[index]
        
        if (skills.includes('MongoDB', 'Express', 'React', 'Node'))
            mernDevelopers.push(key)
    }
    console.log(user) 
    console.log(mernDevelopers) 
}

function countLoggedIn(obj) {
    let count = 0
    for (const key in obj) {
        let index = Object.keys(obj[key]).indexOf('isLoggedIn')
        let isLoggedIn = Object.values(obj[key])[index]
        if(isLoggedIn){
            count++
        }
    }
    return count
}

function countPoints(obj) {
    let count = 0
    for (const key in obj) {
        let index = Object.keys(obj[key]).indexOf('points')
        let points = Object.values(obj[key])[index]
        if(points >= 50){
            count++
        }
    }
    return count
}

console.log(countLoggedIn(users))
console.log(countPoints(users))
userWithMostSkills(users)
users.name = 'Alexander'
console.log(Object.keys(users))
console.log(Object.values(users))
*/

//Exercise 3
/*
const personAccount = {
    firstName: '',
    lastNmae: '',
    incomes: {
        description: '',
        income: ''
    },
    expenses: {
        description: '',
        income: ''
    },
    totalIncome: function() {},
    totalExpense: function() {},
    accountInfo: function() {},
    addIncome: function() {},
    addExpense: function() {},
    accountBalance: function() {}
}

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUpDetails(_id, username, email, password, createdAt, isLoggedIn) {
    return{
        _id,
        username,
        email,
        password,
        createdAt,
        isLoggedIn
    }
}

function loginDetails(username, password){
    return{
        username,
        password
    }
}

function getLoginInfo(){
    let username = prompt('Enter username')
    let password = prompt('Enter password')
    const loginInfo = loginDetails(username, password)
    signIn(users, loginInfo)
}

function getSignUpDetails(){
    let username = prompt('Enter username')
    let email = prompt('Enter email')
    let password = prompt('Enter password')

    const newUserInfo = signUpDetails('sdergdc', username, email, password, Date.now(), false)
    signUp(users, newUserInfo)
}

function signUp(users,signUpDetails) {
    for (const user of users) 
        if (user.email.includes(signUpDetails.email))
            return console.error('Account created with this email already.')
    
    users.push(signUpDetails)
    return console.log('Sign Up Complete')
}

function signIn(users, loginDetails) {
    for (const user of users) {
        let userExists = (user.username === loginDetails.username && user.password === loginDetails.password)
        if(userExists && user.isLoggedIn === false){
            user.isLoggedIn = true
            return console.log('Logged in successfully')
        }
    }
    return console.error('Invalid credentials')
}

function productRating(userId, rate){
    return{
        userId,
        rate
    }
}

function rateProducts(products, rating, productId) {
    for (const product of products) {
        if(product._id === productId){
            product.ratings.push(rating)
            return console.log('Rating added')
        }
        
    }
}

const rating = productRating('ab12ex', 5)
rateProducts(products, rating, 'aegfal')

function likeProduct(products, userID, productId) {
    for (const product of products) {
        if(product._id === productId){
            if(!product.likes.includes(userID)){

                product.likes.push(userID)
                return console.log('Like added')
            }

            product.likes.splice(product.likes.indexOf(userID), 1)
            return console.log('Like removed')
        } 
    }
}

likeProduct(products, 'ab12ex', 'hedfcg')
likeProduct(products, 'ab12ex', 'hedfcg')
*/

//Day 8
//Exercise 1
/*
function sum(...items) {
    if(Array.isArray(items[0]))
        items = [...items[0]]
    
    return items.reduce((a,b) => a + b)
}
console.log(sum([1, 2]))
*/

//Exercise 2
/*
const areaOfCircle = {
    radius: 2,
    get area(){
        return Math.PI * this.radius * this.radius
    }
}

areaOfCircle.radius = 2
console.log(areaOfCircle.area)
*/

//Exercise 3
/*
const numbers = [1,2,3,4,1,1,1,1]
const searchElement = 1

try {
    console.log(countOccurences(numbers, searchElement))
} catch (e) {
    console.log(e)
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Argument is not an array')
    }

    return array.reduce(((accumulator, element) => {
        const occurence = (element === searchElement) ? 1 : 0
        return accumulator + occurence
    }), 0)
}
*/

//Random User IP
/*
const randomIp = () => 
    Array(4)
        .fill(0)
        .map((_, i) => 
            Math
                .floor(Math.random() * 255) + (i === 0 ? 1 : 0))
                .join('.')

console.log(randomIp())
*/

//Random Mac Address
/*
const randomMac = () => {
    let templateAddress = 'XX:XX:XX:XX:XX:XX'
    return templateAddress.replace(/X/g, () =>  Math.random().toString(16).substring(2, 3).toUpperCase())
}

console.log(randomMac())
*/

//Random Hex Numbers
/*
function randomHexaNumberGenerator() {
    return Math.random().toString(16).substring(2,8)
}

console.log(randomHexaNumberGenerator())
*/

//User Id Generator
/*
function userIdGenerator() {
    let userID = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let userIDTemplate = 'xxxxxxx'
    return userIDTemplate.replace(/x/g, () => userID.charAt(Math.floor(Math.random() * userID.length)))
}

console.log(userIdGenerator())


function userIdGeneratedByUser() {
    const characters = prompt('Length of id')
    const number = prompt('Number of ids')
    let userID = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let userIDTemplate = ''
    for (let i = 0; i < +number; i++) {
        userIDTemplate = ''
        for (let j = 0; j < +characters; j++) {
            userIDTemplate += userID.charAt(Math.floor(Math.random() * userID.length))
        }
        console.log(userIDTemplate)
    }
}

console.log(userIdGeneratedByUser())
*/

//RGB Color Generator
/*
function rgbColorGenerator() {
    const rgbValues = Array(3).fill(0).map((_, i) => Math.floor(Math.random() * 255) + 1).join(',')
    return `rgb(${rgbValues})`
}

console.log(rgbColorGenerator())
*/

//Array of Hex Colors
/*
try{
    function arrayOfHexaColors(number) {
        let colors = []
        for (let i = 0; i < number; i++) 
            colors.push('#'+ randomHexaNumberGenerator())
        return colors
    }

console.log(arrayOfHexaColors(5))
*/

//Array of RGB Colors
/*
    function arrayOfRgbColors(number){
        let colors = []
        for (let i = 0; i < number; i++) 
            colors.push(rgbColorGenerator())
        return colors
    }
} catch(e){
    console.log(e)
}

console.log(arrayOfRgbColors(5))
*/

// Convert Hex to RBG
/*
function convertHexaToRgb(hexValue) {
    const hexValues = hexValue.match(/.{1,2}/g)
    const rgbValues = [
        parseInt(hexValues[0], 16),
        parseInt(hexValues[1], 16),
        parseInt(hexValues[2], 16)
    ].join(', ')

    return `rgb(${rgbValues})`
}
console.log(convertHexaToRgb(randomHexaNumberGenerator()))
*/

// Convert RBG to Hex
/*
function convertRgbToHexa(r, g, b){
    return [r.toString(16), g.toString(16), b.toString(16)].join('')
}

console.log(convertRgbToHexa((Math.floor(Math.random() * 255) + 1), (Math.floor(Math.random() * 255) + 1), (Math.floor(Math.random() * 255) + 1)))
*/

// Color Generator
/*
function colorGenerator(format, number) {
    let rightFormat = format.toLowerCase() === 'rgb'|| format.toLowerCase() === 'hex'
    
    if(!rightFormat || (number === 0 || typeof number !== 'number'))
        throw new Error('Invalid input')
    
    if(format.toLowerCase() === 'rgb')
        return arrayOfRgbColors(number)

    return arrayOfHexaColors(number)
}

console.log(colorGenerator('rgb', 1))
*/

//Address Object
/*
function showAddress(address) {
    for (const value in address) {
        console.log(`${value}: ${address[value]}`)
    }
}

showAddress(address)

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}


let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

function areSame(address1, address2) {
    return address1 === address2
}

console.log(areSame(address1, address2))

function areEqual(address1, address2) {
    for (const value in address1) {
        if (address1[value] !== address2[value])
        return false
        return true 
    }
}
console.log(areEqual(address1, address2))

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
*/

//Blog Post Object
/*
const post = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 0,
    comments: [
        {
            author: '',
            body: ''
        }
    ],
    isLive: true,
}

function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author
    this.views = 0,
    this.comments =[],
    this.isLive = false
}
*/

//Price Range
/*
const range = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        high: 10, 
        low: 0
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        high: 20, 
        low: 11
    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        high: 50, 
        low: 21
    }
]
*/

//Day 9
//Exercise 1
/*
const newSet = new Set()
for (let i = 0; i <= 10; i++) {
    newSet.add(i) 
}

newSet.delete(0)
newSet.clear()
console.log(newSet)

const strings = ['a', 'b', 'c', 'c', 'd', 'e','d']
const setOfStrings = new Set(strings)
console.log(setOfStrings)

let countries = ['Finland', 'Sweden', 'Norway']
const map = new Map()
for (const country of countries) {
    map.set(country, country.length)
}
console.log(map)
*/

// Exercise 2
/*
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]

const union = new Set(c)

const setB = new Set(b)

c = a.filter(num => setB.has(num))
const intersection = new Set(c)

c = a.filter(num => !setB.has(num))
const difference = new Set(c)


console.log(union)
console.log(intersection)
console.log(difference)
*/

//Exercise 3
/*
const constants = [2.72, 3.14, 9.81, 37, 100]
countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}

for (const {name, skills} of users) {
    if(skills.length < 2)
    console.log(name)
}
*/

//Exercise 4
/*
const Student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let[name, skills, [ , , jsScore, reactScore]] = Student
console.log(name, skills, jsScore, reactScore)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = ([...person]) => {
    const object = person
    const newObject = []
    for (const [name, skills, score] of object) {
        newObject.push({name: name, 
            skills: skills, 
            score: score
        })
    }
    return newObject
}

console.log(convertArrayToObject(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

const newStudent = {...student, skills: {frontEnd: [...student.skills.frontEnd, {skill: 'Bootstrap', level: 8}], backEnd: [...student.skills.backEnd, {skill: 'Express', level: 9}], dataBase: [...student.skills.dataBase, {skill: 'SQL', level: 8}], dataScience:[...student.skills.dataScience, 'SQL']}}

console.log(newStudent)
*/

//Day 10
//Exercise 1
/*
let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let extracted = txt.match(pattern)
console.log(extracted.reduce((a,b) => +a + +b))

txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
pattern = /.?\d/g
const points = txt.match(pattern)
let sortedPoints = []
for (const point of points) {
    sortedPoints.push(+point)
}
sortedPoints = sortedPoints.sort((a,b) => a - b)
distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]
console.log(distance)

const is_valid_variable = (variableName) => {
    const regex =/^[a-zA-Z_$][a-zA-Z_$0-9]*$/
    console.log(regex.test(variableName))
}

is_valid_variable('first_name')
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')
*/

//Exercise 2
/*
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (paragraph, n) => {
    const regex = /\w+/g
    const words = paragraph.match(regex)
    const wordSet = new Set(words)
    const mostFrequentWords = []

    for (const word of wordSet) {
        const filteredWords = words.filter(char => char == word)
        mostFrequentWords.push({word: word, count: filteredWords.length})
    }

    mostFrequentWords.sort((countA, countB) => countB.count - countA.count)

    for (let i = 0; i < n; i++) {
        console.log(mostFrequentWords[i])
    }
}

tenMostFrequentWords(paragraph, 10)
*/

//Exercise 3
/*
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (sentence) => {
    const regex = /[^a-zA-Z0-9 ]/g
    const cleanSentence = sentence.replace(regex, '')
    const words = cleanSentence.match(/\w+/g)
    const wordSet = new Set(words)
    const mostFrequentWords = []

    for (const word of wordSet) {
        const filteredWords = words.filter(char => char == word)
        mostFrequentWords.push({word: word, count: filteredWords.length})
    }

    mostFrequentWords.sort((countA, countB) => countB.count - countA.count)

    for (let i = 0; i < 3; i++) {
        console.log(mostFrequentWords[i])
    }
}

cleanText(sentence)
*/

// Day 11
// Exercise 1
/*
let countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.group('Countries Array')
console.table(countries)
console.groupEnd()

countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    }
]

console.group('Countries Object')
console.table(countries)
console.groupEnd()
*/

// Exercise 2
/*
console.assert(10 > 2 * 10, 'It is gravely untrue')
console.warn('Wo last warning! Wo last warning! EEEEE!!!! Wo last warning! Wo last warning! EEEE!!')
console.error('Mmmmm, error')
*/

//Exercise 3
/*
const array = new Array(10).fill(Math.floor(Math.random() * 11))
let i = 0
console.time('Regular while loop')
while (i < array.length) {
    console.log(array[i])
    i++
}
console.timeEnd('Regular while loop')

console.time('Regular for loop')
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
console.timeEnd('Regular for loop')

console.time('Regular for of loop')
for (const i of array) {
    console.log(i)
}
console.timeEnd('Regular for of loop')

console.time('Regular for each loop')
array.forEach((i) => console.log(i))
console.timeEnd('Regular for each loop')
*/

//Day 12
//Exercise 1
/*
class Animals{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.breed = ''
    }

    get getBreed(){
        return this.breed
    }

    /**
     * @param {string} breed
     [*]/
    set setBreed(breed){
        this.breed = breed
    }

    getAnimalInfo(){
        let info = `
            Breed: ${this.breed}
            Name: ${this.name} 
            Age: ${age} 
            Color: ${color} 
            Number of legs: ${legs}`

        return info
    }
}

class Dog extends Animals{
    type(){
        return 'Dog'
    }
}

class Cat extends Animals{
    type(){
        return 'Cat'
    }
}
*/

//Exercise 2
/*
class Bird extends Animals{
    constructor(name, age, color, legs, flies = true){
        super(name, age, color, legs)
        this.flies = flies
    }

    getAnimalInfo(){
        let info = `
            Breed: ${this.breed}
            Name: ${this.name} 
            Age: ${age} 
            Color: ${color} 
            Number of legs: ${legs}
            ${this.flies ? 'Ability: Flying' : ''}
            `
        return info
    }
}
*/

//Exercise 3
/*
class Statistics{
    constructor(values){
        this.values = values.sort()
    }

    count(){
        return this.values.length
    }

    sum(){
        return this.values.reduce((a,b) => a + b)
    }

    min(){
        return Math.min(...this.values)
    }

    max(){
        return Math.max(...this.values)
    }

    range(){
        return this.max() - this.min()
    }

    mean(){
        return Math.round(this.sum() / this.count())
    }

    median(){
        const n = this.count()
        let index
        if(n % 2 === 0){
            index = (n/2) - 1
            return this.values[index]
        }

        index = (((n/2) + ((n/2) + 1)) /2)- 1
        return this.values[index]
    }

    mode(){
        const valueSet = new Set(this.values)
        const mode = []
        for (const value of valueSet) {
            const filteredValues = this.values.filter(v => v === value)
            mode.push({mode: value, count: filteredValues.length})    
        }

        mode.sort((countA, countB) => countB.count - countA.count)

        return mode[0]
    }

    variance(){
        const mean = this.mean()
        const sum = this.values.reduce((accumulator, newValue) => {
            const square = (newValue - mean) ** 2
            return accumulator + square
        })

        return sum / (this.count())
    }

    std(){
        return Math.sqrt(this.variance())
    }

    freqDist(){
        const valueSet = new Set(this.values)
        const mode = []
        for (const value of valueSet) {
            const filteredValues = this.values.filter(v => v === value)
            mode.push({value: value, count: filteredValues.length * 4})    
        }

        return mode.sort((countA, countB) => countB.count - countA.count)
    }

    describe(){
        const coun = this.count()
        const sum = this.sum()
        const min = this.min()
        const max = this.max()
        const range = this.range()
        const mean = this.mean()
        const median = this.median()
        const {mode, count} = this.mode()
        const variance = this.variance()
        const std = this.std()
        const freqDist = () => {
            const dist = []
            for (const {value, count} of this.freqDist()) {
                dist.push(`(${count}, ${value})`)
            }
            return dist
        }

        const info = `Count: ${coun}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median}\nMode: (${mode}, ${count})\nVariance: ${variance}\nStandard Deviation: ${std}\nFrequency Distribution: ${freqDist()}
        `
        return info
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)
console.groupCollapsed('Statistics')
console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.median())
console.log(statistics.mode())
console.log(statistics.variance())
console.log(statistics.std())
console.log(statistics.freqDist())
console.log(statistics.describe())
console.groupEnd()

class PersonAccount{
    constructor(firstname, lastname, incomes, incomeDescription = '', expenses, expenseDescription = ''){
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = [{
            income: incomes,
            incomeDescription: incomeDescription
        }]

        this.expenses = [{
            expense: expenses,
            expenseDescription: expenseDescription
        }]
    }

    addIncome(income, description = ''){
        this.incomes.push({income: income, incomeDescription: description})
    }
    
    addExpense(expense, description = ''){
        this.expenses.push({expense: expense, expenseDescription: description})
    }

    totalIncome(){
        const income = () => {
            const incomes = []
            for (const {income} of this.incomes) {
                incomes.push(income)
            }
            return incomes
        }
        return income().reduce((a,b) => a+b)
    } 

    totalExpense(){
        const expense = () => {
            const expenses = []
            for (const {expense} of this.expenses) {
                expenses.push(expense)
            }
            return expenses
        }
        return expense().reduce((a,b) => a+b)
    }

    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }

    accountInfo(){
        const fullName = 'Full Name: ' + this.firstname + ' ' + this.lastname
        const income = () => {
            const des = []
            for (const {income, incomeDescription} of this.incomes) {
                des.push(`Income: ${income}\nDescription: ${incomeDescription}`)
            }
            return des.join('\n')
        }

        const expense = () => {
            const des = []
            for (const {expense, expenseDescription} of this.expenses) {
                des.push(`Expense: ${expense}\nDescription: ${expenseDescription}\n`)
            }
            return des.join('')
        }

        const tIncome = 'Total Income: ' + this.totalIncome()
        const tExpense = 'Total Expense: ' + this.totalExpense()
        const bal ='Account Balance: ' + this.accountBalance()

        let info = `${fullName}\n\n${income()}\n\n${expense()}\n${tIncome}\n${tExpense}\n${bal}`

        return info
    }
}

const bankStatement = new PersonAccount('Alexander', 'Boakye', 9000, 'Salary', 300, 'Books')
bankStatement.addIncome(5000, 'Payment')
bankStatement.addExpense(20, 'Water')
console.log(bankStatement.accountInfo())
*/

//Day 13
//Exercise 1
/*
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let txt = JSON.stringify(skills, undefined, 4)

console.groupCollapsed('')
console.log(txt)
console.groupEnd()

let age = 250;
txt = JSON.stringify(age, undefined, 4)

console.groupCollapsed('')
console.log(txt)
console.groupEnd()

let isMarried = true
txt = JSON.stringify(isMarried, undefined, 4)

console.groupCollapsed('')
console.log(txt)
console.groupEnd()

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

txt = JSON.stringify(student, undefined, 4)

console.groupCollapsed('')
console.log(txt)
console.groupEnd()
*/

//Exercise 2
/*
txt = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.groupCollapsed('')
console.log(txt)
console.groupEnd()
*/

//Exercise 3
/*
const json = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const users = JSON.parse(json, undefined)
const userSkillCount = []
for (const user in users) {
    userSkillCount.push({user: user, skillCount: users[user].skills.length})
}

const userWithMostSkills = userSkillCount.sort((a,b) => b.skillCount - a.skillCount)[0].user
console.log(userWithMostSkills)
*/

//Exercise 4
/*
localStorage.setItem('fistName', 'Alexander')
localStorage.setItem('lastName', 'Boakye')
localStorage.setItem('age', 21)
localStorage.setItem('country', 'Ghana')
localStorage.setItem('city', 'Kumasi')
*/

//Exercise 5
/*
const student = {
    firstName: 'Yaa', 
    lastName: 'Opare-Ansah', 
    age: 18, 
    skills: ['Driving', 'Cooking','Talking', 'Dancing'], 
    country: 'Ghana', 
    enrolled: true
}

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJSON)
*/

//Exercise 6
/*
const personAccount = {
    firstName,
    lastName,
    incomes: [{
            income,
            incomeDescription
        }],

    expenses: [{
            expense,
            expenseDescription
        }],

    addIncome(income, description = ''){
        this.incomes.push({income: income, incomeDescription: description})
    },
    
    addExpense(expense, description = ''){
        this.expenses.push({expense: expense, expenseDescription: description})
    },

    totalIncome(){
        const income = () => {
            const incomes = []
            for (const {income} of this.incomes) {
                incomes.push(income)
            }
            return incomes
        }
        return income().reduce((a,b) => a+b)
    }, 

    totalExpense(){
        const expense = () => {
            const expenses = []
            for (const {expense} of this.expenses) {
                expenses.push(expense)
            }
            return expenses
        }
        return expense().reduce((a,b) => a+b)
    },

    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    },

    accountInfo(){
        const fullName = 'Full Name: ' + this.firstname + ' ' + this.lastname
        const income = () => {
            const des = []
            for (const {income, incomeDescription} of this.incomes) {
                des.push(`Income: ${income}\nDescription: ${incomeDescription}`)
            }
            return des.join('\n')
        }

        const expense = () => {
            const des = []
            for (const {expense, expenseDescription} of this.expenses) {
                des.push(`Expense: ${expense}\nDescription: ${expenseDescription}\n`)
            }
            return des.join('')
        }

        const tIncome = 'Total Income: ' + this.totalIncome()
        const tExpense = 'Total Expense: ' + this.totalExpense()
        const bal ='Account Balance: ' + this.accountBalance()

        let info = `${fullName}\n\n${income()}\n\n${expense()}\n${tIncome}\n${tExpense}\n${bal}`

        return info
    }
}
*/

//Day 15
//Exercise 1
/*
const countriesAPI = 'https://restcountries.com/v2/all'
let fetchData = async () => {
    try{
        const response = await fetch(countriesAPI)
        const data = await response.json()
        const countryDetails = []

        for (const country of data) {
            countryDetails.push(
                {
                    name: country.name, 
                    capital: country.capital, 
                    languages: country.languages, 
                    population: country.population, 
                    area: country.area
                }
            )
        }

        console.log(countryDetails)
    }catch(e){
        console.error(e)
    }
}

fetchData()
*/

//Exercise 2
/*
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        const catNames = []

        for (const cats of data) {
            catNames.push(cats.name)    
        }

        console.log(catNames)
    } catch (e) {
        console.error(e)
    }
}

fetchData()
*/

//Exercise 3
/*
fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        const catWeights = []

        for (const cats of data) {
            catWeights.push(parseInt(cats.weight.metric))    
        }

        const averageWeight = Math.round(catWeights.reduce((a,b) => a + b) / catWeights.length)

        console.log(averageWeight)
    } catch (e) {
        console.error(e)
    }
}

fetchData()

fetchData = async () => {
    try{
        const response = await fetch(countriesAPI)
        const data = await response.json()
        const countryDetails = []

        for (const country of data) {
            countryDetails.push(
                {
                    name: country.name, 
                    capital: country.capital, 
                    languages: country.languages, 
                    population: country.population, 
                    area: country.area
                }
            )
        }

        const largestCountries = () => {
            countryDetails.sort((countryA, countryB) => countryB.area - countryA.area)
            for (let i = 0; i < 10; i++) {
                console.log(countryDetails[i])
            }
        }

        largestCountries()

        const numberOfLanguages = () => {
            let n = 0
            for (const value of countryDetails) {
                n += value.languages.length
            }
            return n
        }

        console.log(numberOfLanguages())

    }catch(e){
        console.error(e)
    }
}

fetchData()
*/


//Day 16
//Stopwatch
/*
function Stopwatch() {
    let duration = 0.000
    let running = false

    Object.defineProperty(this, 'duration', {
        get: function(){
            return +duration.toFixed(4)
        }
    })

    this.reset = () => {
        duration = 0
    }

    let time = () => {
        setInterval(() => {
            if(running)
                duration += 0.001
        }, 1)
    }

    this.start = () => {
        if (running)
            throw new Error('Stopwatch already started')
        
        running = true
        time()
    }

    this.stop = () => {
        if(!running)
            throw new Error('Stopwatch not started')

        running = false
        time()
    }
}

const sw = new Stopwatch()
*/

//Day 17
/*
function HtmlElement(){
    this.click = function() {
        console.log('click')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused')
}

function HtmlSelectElement(items = []) {
    this.items = items

    this.addItem = function(item){
        items.push(item)
    }

    this.removeItem = function(item){
        let index = items.indexOf(item)
        items.splice(index, 1)
    }

    this.render = function(){
        return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`
    }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

const s = new HtmlSelectElement([1,2,3])

function HtmlImageElement(src) {
    this.src = src
    this.render = function(){
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const img = new HtmlImageElement('http://')

const elements = [img, s]

for (const element of elements) {
    console.log(element.render())
}
*/

//Day 18
/*
const _items = new WeakMap
class Stack{
    constructor(){
        _items.set(this, [])
    }

    get count(){
        return _items.get(this).length
    }

    peek(){
        if(this.count === 0)
            throw new Error('Stack is empty')

        return _items.get(this)[this.count - 1]
    }

    pop(){
        if(this.count === 0)
            throw new Error('Stack is empty')

        return _items.get(this).pop() 
    }

    push(obj){
        _items.get(this).push(obj)
    }
}

const s = new Stack()
*/

//Day 19
//Exercise 1
/*
let firstParagraph = document.querySelector('p')
console.log(firstParagraph)

let paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[0])

firstParagraph = document.querySelector('#first-paragraph')
console.log(firstParagraph)

paragraphs = document.getElementById('first-paragraph')
console.log(paragraphs)

paragraphs = document.querySelectorAll('p')
paragraphs.forEach(paragraph => console.log(paragraph.textContent));

paragraphs[3].textContent = 'Fourth Paragraph'
*/

//Exercise 2
/*
paragraphs[0].style.backgroundColor = 'red'
paragraphs[1].style.color = 'blue'
paragraphs[2].style.fontFamily = 'Helvetica'
paragraphs[3].style.fontSize = '66px'

paragraphs.forEach((paragraph, i) => {
    if(i % 2 === 0){
        paragraph.style.color = 'green'
    }else{
        paragraph.style.color = 'red'
    }
})

paragraphs[0].textContent = 'red'
paragraphs[0].id = 'red'
paragraphs[0].className = 'red'

paragraphs[1].textContent = 'blue'
paragraphs[1].id = 'blue'
paragraphs[1].className = 'blue'

paragraphs[2].textContent = 'Helvetica'
paragraphs[2].id = 'Helvetica'
paragraphs[2].className = 'Helvetica'

paragraphs[3].textContent = '66px'
paragraphs[3].id = '66px'
paragraphs[3].className = '66px'
*/

//Exercise 3
/*
const h1 = document.querySelector('h1')
h1.innerHTML = ''
h1.innerHTML = 'Asabeneh Yetayeh challenges in <span>2020</span>'

const year = document.querySelector('span')

const colors = ['red', 'blue', 'green', 'pink', 'purple', 'cyan', 'teal', 'yellow', 'gray']

setInterval(() => {
    const index = Math.floor(Math.random() * colors.length)
    year.style.color = colors[index]
}, 1000)

const li = document.querySelectorAll('li')

li.forEach(v => {
    if(v.textContent.includes('Done')){
        v.style.backgroundColor = 'green'
    }else if(v.textContent.includes('Ongoing')){
        v.style.backgroundColor = 'yellow'
    }else{
        v.style.backgroundColor = 'red'
    }
})
*/

//Day 20
//Exercise 1
// /*
let div = document.querySelector('.wrapper')

const isPrime = (number) => {
    if(number === 2){
        return true
    }

    if(number > 2){
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                return false
            }
        }
        return true
    }
}

let child
for (let i = 0; i <= 101; i++) {

    child = document.createElement('span')
    child.textContent = i

    if(isPrime(i)){
        child.style.backgroundColor = 'red'
    } else if(i % 2 === 0){
        child.style.backgroundColor = 'green'
    } else {
        child.style.backgroundColor = 'yellow'
    }
    child.style.padding = '20px'
    child.style.margin = '2px'
    child.style.width = '30px'
    child.style.textAlign = 'center'

    div.style.display = 'flex'
    div.style.flexDirection = 'columns'
    div.style.flexWrap = 'wrap'

    div.appendChild(child)
}
// */

//Exercise 2
// /*
const h4 = document.querySelector('#total-countries')
h4.textContent = `Total Number of Countries: ${countries.length}`

div = document.querySelector('.countries-wrapper')

for (let i = 0; i < countries.length; i++) {
    child = document.createElement('span')
    child.textContent = countries[i]
    child.style.padding = '20px'
    child.style.margin = '2px'
    child.style.width = '80px'
    child.style.textAlign = 'center'

    div.style.display = 'flex'
    div.style.flexDirection = 'columns'
    div.style.flexWrap = 'wrap'
    div.appendChild(child)
}
// */

//Exercise 3
const info = asabenehChallenges2020

div = document.querySelector('.wrapper')

const title = document.createElement('h1')
title.innerHTML = `${info.challengeTitle} <span id="year">${info.challengeYear}</span>`

div.appendChild(title)

const year = document.querySelector('#year')
year.style.fontSize = '50px'

const colors = ['red', 'blue', 'green', 'pink', 'purple', 'cyan', 'teal', 'yellow', 'gray']

setInterval(() => {
    const index = Math.floor(Math.random() * colors.length)
    year.style.color = colors[index]
}, 1000)

const ul = document.createElement('ul')

for (const challenge of info.challenges) {
    const li = document.createElement('li')

    const nameSpan = document.createElement('span')
    
    const name = challenge.name
    
    nameSpan.textContent = name
    nameSpan.style.width = '30%'
    
    const statusSpan = document.createElement('span')

    const status = challenge.status
    statusSpan.textContent = status
    
    const details = document.createElement('details')

    const summary = document.createElement('summary')
    summary.textContent = challenge.topics[0]

    const topics = document.createElement('div')
    topics.innerHTML = `${challenge.topics.map(title => `<div>${title}</div>`).join('')}`
    
    topics.style.listStyle = 'none'

    details.appendChild(summary)
    details.appendChild(topics)

    details.style.width = '30%'
    
    const p = document.createElement('div')
    p.appendChild(nameSpan)
    p.appendChild(details)
    p.appendChild(statusSpan)

    if (status === 'Done') {
        p.style.backgroundColor = 'green'
    }else if(status === 'Ongoing'){
        p.style.backgroundColor = 'yellow'
    }else{
        p.style.backgroundColor = 'red'
    }

    p.style.padding = '20px'
    p.style.margin = '5px'
    p.style.display = 'flex'
    p.style.flexDirection = 'row'
    p.style.flexGrow = '1'

    li.appendChild(p)

    li.style.listStyle = 'none'
    
    ul.style.width = '100%'
    ul.appendChild(li)
}

div.appendChild(ul)

const aboutAuthor = document.createElement('div')

const authorName = document.createElement('h2')
authorName.textContent = `${info.author.firstName} ${info.author.lastName}`

authorName.style.textAlign = 'center'

aboutAuthor.appendChild(authorName)

for (const icon of info.author.socialLinks) {
    const icons = document.createElement('div')
    icons.innerHTML = icon.fontawesomeIcon
    
    aboutAuthor.appendChild(icons)
}

const bio = document.createElement('p')
bio.textContent = info.author.bio

bio.style.width = '70%'
bio.style.margin = 'auto'
bio.style.textAlign = 'center'

aboutAuthor.appendChild(bio)

const about = document.createElement('div')

const titleSection = document.createElement('div')
const titlesName = document.createElement('h4')

titlesName.textContent = 'Titles'
titleSection.appendChild(titlesName)

for (const title of info.author.titles) {
    
    const t = document.createElement('div')
    t.textContent = title.join(' ') 
    
    titleSection.appendChild(t)
}

titleSection.style.width = '60%'

const skillsSection = document.createElement('div')
const skillsName = document.createElement('h4')

skillsName.textContent = 'Skills'
skillsSection.appendChild(skillsName)

for (const skills of info.author.skills) {
    
    const t = document.createElement('div')
    t.textContent = skills
    
    skillsSection.appendChild(t)
}

skillsSection.style.width = '60%'

const qualificationsSection = document.createElement('div')
const qualificationsName = document.createElement('h4')

qualificationsName.textContent = 'Qualifications'
qualificationsSection.appendChild(qualificationsName)

for (const qualifications of info.author.qualifications) {
    
    const t = document.createElement('div')
    t.textContent = qualifications
    
    qualificationsSection.appendChild(t)
}

qualificationsSection.style.width = '60%'

about.style.width = '80%'
about.style.margin = 'auto'
about.style.display = 'flex'
about.style.flexDirection = 'columns'
about.style.flexGrow = '1'

about.appendChild(titleSection)
about.appendChild(skillsSection)
about.appendChild(qualificationsSection)

aboutAuthor.appendChild(about)
div.appendChild(aboutAuthor)

const footer = document.createElement('div')
const footerContent = document.createElement('div')
const footerTitle = document.createElement('h4')

footerTitle.textContent = 'Keywords'
footer.appendChild(footerTitle)

for (const keyword of info.keywords) {
    const keywords = document.createElement('div')
    keywords.innerHTML = `# ${keyword}`

    const index = Math.floor(Math.random() * colors.length)

    keywords.style.backgroundColor = colors[index]
    keywords.style.margin = '2px'
    keywords.style.padding = '9px'
    keywords.style.borderRadius = '20px'
    footerContent.appendChild(keywords)
}

footerContent.style.display = 'flex'
footerContent.style.flexDirection = 'columns'
footerContent.style.flexWrap = 'wrap'

footer.style.width = '80%'
footer.style.margin = 'auto'
footer.appendChild(footerContent)

div.appendChild(footer)