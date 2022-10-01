// ================ 1 ==================

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// ================ 2 ==================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     console.log('Welcome!');
//   }
//   if (password !== ADMIN_PASSWORD) {
//     console.log('Access denied, wrong password!');
//     return 'Access denied, wrong password!';
//   }
//   return 'Welcome!';
// }

// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// ================ 3 ==================

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// ================ 4 ==================

// const fruits = ["apple", "plum", "pear", "orange"];

// ================ 5 ==================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ================ 6 ==================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// ================ 7 ==================

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;

// ================ 8 ==================

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ================ 9 ==================

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// ================ 10 ==================

// function splitMessage(message, delimiter) {
//   let words;

//   words = message.split(delimiter);

//   return words;
// }
// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// ================ 11 ==================

// function calculateEngravingPrice(message, pricePerWord) {
//   let array = message.split(' ');

//   return array.length * pricePerWord;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

// ================ 12 ==================

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);
//   return string;
// }

// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
// ['top', 'picks', 'for', 'you'], '_';

// ================ 13 ==================

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }
// slugify('Arrays for begginers');
// slugify('English for developer');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

// ================ 14 ==================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// ================ 15 ==================

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// ================ 16 ==================

// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);

// ================ 17 ==================

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ================ 18 ==================

// function calculateTotal(number) {
//   let total = 0;
//   for (let x = 0; x <= number; x += 1) {
//     total += x;
//   }
//   return total;
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

// ================ 19 ==================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ================ 20 ==================

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([1, 1, 1]));

// ================ 21 ==================

// function findLongestWord(string) {
//   let strngSplit = string.split(' ');

//   console.log(strngSplit);

//   let longestWord = '';
//   console.log(longestWord);

//   for (let i = 0; i < strngSplit.length; i += 1) {
//     if (strngSplit[i].length > longestWord.length) {
//       longestWord = strngSplit[i];
//       console.log(longestWord);
//     }
//   }

//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// ================ 22 ==================

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// ================ 23 ==================

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (let i = 0; numbers.length > i; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ================ 24 ==================

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   //   //=== вар1 ===
//   //   return fruits.includes('fruit') || !fruits.includes('fruit');
//   //=== вар2 ===
//   return fruits.includes(fruit);
// }
// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');
// checkFruit('apple');

// ================ 25 ==================

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ================ 26 ==================

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const volie of order) {
//   // for (let i = 0; i < order.length; i += 1) {
//     total += volie;
//   }

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// ================ 27 ==================

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ================ 28 ==================

// function getEvenNumbers(start, end) {
//   const filteredNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       filteredNumbers.push(i);
//     }
//   }
//   return filteredNumbers;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// ================ 29 ==================

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ================ 30 ==================

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ================ 31 ==================

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }

// ================ 32 ==================

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
// includes(['apple', 'plum', 'pear', 'orange'], 'plum');
// includes(['apple', 'plum', 'pear', 'orange'], 'kiwi');

// ========================================
