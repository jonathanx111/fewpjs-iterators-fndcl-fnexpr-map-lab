const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = () => {
//   return tutorials
// }

// const titleCased = (input) => {
  
// }

// function titleCased(input) {
//   return tutorials.map(function(line) {
//     let words = line.split(" ")
    
//     let captitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1)
//     })

//     return captitalizedWords.join(" ")

//   })
// }

let titleCased = input => {
  return tutorials.map(line => {
    let words = line.split(" ")

    let captitalizedWords = 
     words.map(word => word.charAt(0).toUpperCase() + word.slice(1)
    )

    return captitalizedWords.join(" ")
  })
}

// implicit return

// When you get to BINDING ELEMENTS, it will be DIFFERENT
// than regular function
