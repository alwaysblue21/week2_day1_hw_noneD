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









