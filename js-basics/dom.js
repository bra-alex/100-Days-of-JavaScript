//Finding
//Tag name
/*
let allTitles = document.getElementsByTagName('h1')

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}
*/

//Class Name
/*
allTitles = document.getElementsByClassName('title')

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}
*/

//ID
/*
allTitles = document.getElementById('first-title')
console.log(allTitles)
*/

//Query Selector
/*
let firstTitle = document.querySelector('h1') // select the first available h1 element
console.log(firstTitle)

firstTitle = document.querySelector('#first-title') // select id with first-title
console.log(firstTitle)

firstTitle = document.querySelector('.title') // select the first available element with class title
console.log(firstTitle)
*/

//Query Selector All
/*
let allTitles = document.querySelectorAll('h1')
console.log(allTitles)

allTitles = document.querySelectorAll('#first-title')
console.log(allTitles)

allTitles.forEach(title => console.log(title))

allTitles = document.querySelectorAll('.title')
console.log(allTitles)
*/

//Adding Attributes
//Without setAttribute
/*
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
*/

//With setAttribute
/*
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
*/

//Adding extra classes
/*
titles[3].classList.add('title', 'header-title')
*/

//Removing classes
/*
titles[3].classList.remove('title', 'header-title')

console.log(titles[3])
*/

// Adding text
//Using textContent
/*
titles[3].textContent = 'Hello'
*/

//Using innerHTML
/*
const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = lists
*/

//Removing using innerHTML
/*
ul.innerHTML = '' 
*/

//Adding Style
/*
titles.forEach((title, i) => {
    title.style.fontSize = '24px'
    if(i % 2 === 0){
        title.style.color = 'pink'
        title.style.backgroundColor = 'blue'
    }else{
        title.style.color = 'purple'
        title.style.backgroundColor = 'cyan'
    }
})
*/
