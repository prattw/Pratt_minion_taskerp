const { words } = require("lodash")

const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

//// forEach to make the minon names appear with index/roster numbers

// const forEach = (arr) => {
//     for (let index  = 0; index < arr.length; index++){
//     console.log(index)
//     console.log(arr[index])
//     }
// }

// forEach(minions)

// Break//Mapping names (except kevin's)//Break//
// I found this on StackOverflow: toUpperCase() and with the assistance of Mr. Merced's video suggestions.  Thank you so much!

console.log(minions.splice(1, 1))

console.log(minions)

const revMinions = minions.map(minions => minions.charAt(0).toUpperCase() + minions.substr(1).toLowerCase())

revMinions.splice(1, 0, 'kevin')

const capitalizedMinions = revMinions

console.log(capitalizedMinions)

////Break//Filter//Break

//// Use filter to filter out minions that are not capitalized and save the correctly capitalized 
//// minions to an array called actuallyCapitalizedMinions
////I found this on StackOverflow: toUpperCase() and with the assistance of Mr. Merced's video suggestions.  Thank you so much!

const actuallyCapitalizedMinions = capitalizedMinions.filter((item, index) => {
  return item.match(/[A-Z]/)
})

console.log(actuallyCapitalizedMinions)

////Break//Every//Break
//// Use every again, but this time on your new actuallyCapitalizedMinions array, to check if they're all capitalized now.
//// I found the solution on https://www.youtube.com/watch?v=PJM3BaWu5Jw

const allCaps = actuallyCapitalizedMinions.every(item => item.match(/[A-Z]/))

console.log(allCaps)