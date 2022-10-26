//Promises
/*
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('It worked')
    } 
    reject('It failed')
})

promise.then(result => console.log(result))//Prints result
*/

//Catching errors
/*
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch((error) => console.error(error))
    .then(result3 => console.log(result3 + '!'))
*/

//Multiple promises
/*
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'Hiii');
})

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'Alexander');
})

const promise4 = new Promise((resolve) => {
    setTimeout(resolve, 10000, 'Die!!!!');
})

Promise
    .all([promise, promise2, promise3, promise4])
    .then(values => console.log(values))
*/

//Real world application of promises
/*
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url)
        .then(response => response.json())
)).then(results => {
    console.log(results.map( result => console.log(result)))
})
*/

//Async/Await
/*
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)
}

fetchUsers()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async () => {
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(response => response.json())))
        console.log(users)
    } catch (e){
        console.error(e)
    }
}

getData()
*/

//ES9
//for await of
/*
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async () => {
    const promises = urls.map(url => fetch(url))
    for await (const requests of promises) {
        const data = await requests.json()
        console.log(data)
    }
}

getData()
*/

// Parallels, Sequence and Race
/*
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log) 
*/

//ES2020
//allSettled
//Returns all promises regardless of the state(rejected/fulfilled)
/*
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 6000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
*/
