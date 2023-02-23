// Write your code below

// create a function that takes in a parameter for the string
// create a for loop that goes through the length of the string
// then another for loop that goes through the reverse of the word
// if the word and the index of the first loop equals
// the word and the index of the scond loop
// return true else false


// This returns true too soon and doesn't loop through the entire word
function palindrome(str) {
  for (let i = 0; i < str.length; i++) {
    for (let k = str.length-1; k > 0; k--) {
      if (str[i] === str[k]) {
        return true
      } else {
        return false
      }
    }
  } 
}

console.log(palindrome("nodson"))

const word = palindrome("Non")
console.log(word)



// This code fixes that issue
function isPal(str) {
  for (let i = 0; i < str.length; i++) {
      let charF = str[i]
      let charB = str[str.length - 1 - i]

      if (charF !== charB) {
          return false
      }
  }
  return true
}

console.log(isPal("nodson"))

const word2 = isPal("Non")
console.log(word2)
