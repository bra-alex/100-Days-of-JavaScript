//Creating promises
// Promise
/*
let doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

  // Promise
doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
        resolve(skills)
        } else {
        reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))
    */

//fetch()
/*
const url = 'https://restcountries.com/v2/all'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
*/

//Async/Await
/*
const square = async function (n) {
    return n * n
}
let value = await square(2)
console.log(value)

const fetchData = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        
        console.log(data[0].name)
    }catch(e){
        console.error(e)
    }
}

fetchData()
*/