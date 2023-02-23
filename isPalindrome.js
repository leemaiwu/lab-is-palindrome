// Write your code below

// create a function that takes in a parameter for the "word"
// parameter will be the "word" we want to test as a palindrome
// second parameter will be to loop through the word
// then check the reverse to see it it's true
// else return flase

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

console.log(palindrome("noon"))

const word = palindrome("noon")
console.log(word)
