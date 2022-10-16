//Error Handling
/*
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err)
}
*/

//finally runs code in the block regardless of the error
/*
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err)
} finally {
    console.log('Imma go ahead and run anyway ;)')
}
*/

//Exception
/*
const throwErrorExampleFun = () => {
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.error(err)
  }
}
throwErrorExampleFun()
*/

