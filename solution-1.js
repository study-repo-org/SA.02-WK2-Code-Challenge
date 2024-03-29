//declaring a function to swap the case of each character in a string
function swapCase(str) {
  // Initializing an empty string to store the result string
  let result = "";

  // Iterating through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Retrieve the current character of the string
    let charString = str[i];

    // Checking if the character of the string is in lowercase
    if (charString === charString.toLowerCase()) {
      // If the character is in lowercase, convert it to uppercase and add to the result
      result += charString.toUpperCase();
    } else {
      // If the character is in uppercase, convert it to lowercase and add to the result
      result += charString.toLowerCase();
    }
  }

  // Return the swapped string
  return result;
}

// Logging the result to the console and passing an argument
console.log(swapCase("The Quick Brown Fox"));
