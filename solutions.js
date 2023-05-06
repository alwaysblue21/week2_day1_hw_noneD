// //////////////// section1 /////////////////
// ///////////////////////////////////////////
// What is the difference between a parameter and an argument?
// // A parameter is a variable that is declared in a function definition. It is a placeholder for a value that will be passed to the function when it is called. An argument is the value that is actually passed to a function when it is called.

// Within a function, what is the difference between return and console.log?
// // The main difference between return and console.log is that return returns a value from a function, while console.log simply logs a value to the console.


/////////////// section2 /////////////////
//////////////////////////////////////////
// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.
// lowercase -> reverse -> check if its true after reversing it...

// function checkPalindrome(str) {
//     // Convert the string to lowercase.. just in case it starts with uppercase..
//     str = str.toLowerCase();

//     // Reverse the lowercased string...., array -> reverse -> string..
//     str2 = str.split("").reverse().join("");

//     // Compare the original string to the reversed string...
//     return str === str2
//   }

//   console.log(checkPalindrome("Radar"));
//   console.log(checkPalindrome("Jemin"));
//   console.log(checkPalindrome("Yun"));

  ////////////////// section 3 ////////////////////
  /////////////////////////////////////////////////
//   Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents.
// array -> loop -> set a variable to receive return...
// function sumArray(array) {
//     // set a variable....
//     let sum = 0;
//     // iterate over the array using for loop
//     for (let i = 0; i < array.length; i++) {
//         //[i] used to access the element at index i....
//         sum += array[i];
//     }
//     //return the value of sum..
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

/////////////////// section 4 ////////////////////
//////////////////////////////////////////////////

// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// 1 is not a prime number ->  2 is the only even prime number -> square root???? even nums other than 2 cant be prime number...so its every odd nums?
// function checkPrime(num) {
//   //check if the number is less than 2....
//   if (num < 2) {
//     return false;
//   }
//   // check if the number is an even number other than 2..
//   if (num % 2 === 0) {
//     return num === 2;
//   }
//   // check every odd numbers not including 1???? Check every number up to the square root. To do this, try a for loop
//   for (i = 3; i <= Math.sqrt(num); i+=2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkPrime(17));

// //Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
// function printPrimes(limit) {
//   for (let i = 2; i <= limit; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// printPrimes(97);








