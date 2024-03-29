// declare a to filter out prime numbers from an array
function filterPrimeNumbers(arr) {
  return arr.filter((num) => {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
      return false;
    }

    // Checking divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by i, it's not prime
      if (num % i === 0) {
        return false;
      }
    }

    // Otherwise, it's a prime number
    return true;
  });
}

// Logging the result by calling the function and passing an argument
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
