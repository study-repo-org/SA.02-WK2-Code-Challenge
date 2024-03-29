//declare a function to generate an array of numbers and takes in two parameters
function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let arrNumbers = [];
  
    // Looping through it from start to end
    for (let i = start; i <= end; i++) {
      // Add the current number to the arrNumbers array
      arrNumbers.push(i);
    }
  
    // Return the generated array
    return arrNumbers;
  }
  
//logging , calling the function and passing two argument 
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7));
  