 //declaring a function to swap the case of each character in a string
function swapCase(str) {
  // Using map function to iterate over each character of the string and swap the case
  return str.split('').map(char => {
    // Check if the character is in lowercase, if yes, convert it to uppercase, else convert to lowercase
    return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }).join(''); // Joining the characters back to form a string
}

// Logging the result and passing an argument
console.log(swapCase("The Quick Brown Fox"));
