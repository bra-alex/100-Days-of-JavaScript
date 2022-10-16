//Creating RegExp
/*
    []: A set of characters
        [a-c] means, a or b or c
        [a-z] means, any letter a to z
        [A-Z] means, any character A to Z
        [0-3] means, 0 or 1 or 2 or 3
        [0-9] means any number 0 to 9
        [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
    \: uses to escape special characters
        \d mean: match where the string contains digits (numbers from 0-9)
        \D mean: match where the string does not contain digits
    . : any character except new line character(\n)
    ^: starts with
        r'^substring' eg r'^love', a sentence which starts with a word love
        r'[^abc] mean not a, not b, not c.
    $: ends with
        r'substring$' eg r'love$', sentence ends with a word love
    *: zero or more times
        r'[a]*' means a optional or it can occur many times.
    +: one or more times
        r'[a]+' means at least once or more times
    ?: zero or one times
        r'[a]?' means zero times or once
    \b: word bounder, matches with the beginning or ending of a word
    {3}: Exactly 3 characters
    {3,}: At least 3 characters
    {3,8}: 3 to 8 characters
    |: Either or
        r'apple|banana' mean either of an apple or a banana
    (): Capture and group
*/

//Constructor
/*
//Without flag
let pattern = 'tui'
let regex = new RegExp(pattern)

//With flag
let flag = 'gi'
regex = new RegExp(pattern, flag)
*/

//Without constructor
// regex = /love/gi

// Methods
// Testing
/*
const str = 'I love JavaScript'
pattern = /love/
const patternFlag = /love/g
console.log(pattern.test(str))
*/

// Array containing match
// Without global flag
/*
console.log(str.match(pattern))
console.log(str.match(patternFlag))
console.log(str.search(pattern))

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

console.log(txt.replace(/Python/gi, 'C++'))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log (sentence.replace(/[^a-zA-Z0-9 ]/g, ''))
*/

//[]
/*
pattern = '[Aa]pple' // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor way has been replaced by a banana a day keeps the doctor far far away. '

console.log(txt.match(pattern))  

pattern = /[Aa]pple/g
console.log(txt.match(pattern))  

pattern = /[Aa]pple|[Bb]anana/g
console.log(txt.match(pattern))
*/

//Escape characters
/*
pattern = /\d/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'

console.log(txt.match(pattern))

pattern = /\d+/g
console.log(txt.match(pattern))
*/

// .
/*
pattern = /a./g
txt = 'Apple and banana are fruits.'

console.log(txt.match(pattern))

pattern = /a.+/g
console.log(txt.match(pattern))
*/

// *
/*
pattern = /a.[*]/g
txt = 'Apple and banana are fruits.'

console.log(txt.match(pattern))
*/

// ?
/*
txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail. -mail'
pattern = /e-?mail/gi  // ? means optional
matches = txt.match(pattern)

console.log(matches)
*/

// {}
/*
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\b\w{4}\b/g  //  exactly four character words
console.log(txt.match(pattern))

pattern = /\b[a-zA-z]{4}\b/g //  exactly four character words without numbers
console.log(txt.match(pattern))

pattern = /\d{4}\b/g //  exactly four character numbers
console.log(txt.match(pattern))

pattern = /\d{1,4}\b/g //  numbers with one to 4 characters
console.log(txt.match(pattern))
*/

// ^
/*
pattern = /^This/g // ^ means starts with
txt = 'This regular expression example was made in December 6,  2019.'
console.log(txt.match(pattern))

pattern = /[^This\s].+/g // negation
console.log(txt.match(pattern))
*/

// $(ends with)
/*
pattern = /[0-9]{4}.*$/g
console.log(txt.match(pattern))
*/

// Exact match (^ starts, $ ends)
/*
pattern = /^[a-z]{4}$/g
console.log(pattern.test(txt))
*/

