// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// ================================

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// ============== ОКРУГЛЕНИЕ ==================
// const value = 27.5;

// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(27.4)); // 27
// console.log(Math.round(27.5)); // 28

// const x = 3.1415;
// console.log(x.toFixed(2)); // 3.14

// ============= ШАБЛОННЫЕ СТРОКИ ==============

// const companyName = 'Cyberdyne Systems';
// const repaireBots = 150;
// const defenceBots = 50;
// const totalBots = repaireBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // 'Cyberdyne Systems has 200 bots in stock'

// ===========
// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// // const bmi = weight / (height * height);
// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi);

// =========== 2-й вариант, чейнинп ===========

// const weight = Number.parseFloat('88,3'.replace(',', '.'));
// const height = Number.parseFloat('1.75'.replace(',', '.'));

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

// console.log(bmi);

// =============================================

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

//===============================================

// //Знач по умолчанию и оператор нулевого слияния
// //при incomingValue = undefined value = 0, при любом другом числовом значении value = этому числовому значению
// const incomingValue = 0;
// const defaultValue = 10;

// const value1 = incomingValue || defaultValue; // 10
// const value2 = incomingValue ?? defaultValue; // 0

// console.log(value1);
// console.log(value2);

//================================================
// // Оператор % и методы строк

// // 70 покажет 01:10
// // 450 покажет 07:30
// // 1441 покажет 24:01

// const totalMinutes = 65;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const dobleDigitHours = String(hours).padStart(2, 0);
// const dobleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(hours);
// console.log(minutes);

// console.log(`${dobleDigitHours}:${dobleDigitMinutes}`);

//================================================
// Ввод пользователя и ветвления
// Используя конструкции if....else и prompt, напиши код который спрашивает
// "Какое официальное название JavaScript?" Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно". В противном случае "Не знаете? ECMAScript"

// const userAnswer = prompt('Какое официальное название JavaScript?');

// // вариант 1
// // if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
// //   console.log('Верно');
// // } else {
// //   console.log('Не знаете? ECMAScript');
// // }

// // вариант 2
// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase() ? 'Верно' : 'Не знаете? ECMAScript'
// );

//===============================================
// Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде

// const hours = 14;
// const minutes = 24;
// let timeString;

// // вариант 1
// if (minutes > 0) {
//   timeString = `${hours} ч. ${minutes} мин.`;
// } else {
//   timeString = `${hours} ч.`;
// }
// console.log(timeString);

// // вариант 2
// console.log(minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`);

//====================================================
// Ветвления

// const userInput = prompt('Введите число');
// const number = Number(userInput) || 0;
// let answer;

// if (number > 0) {
//   answer = 'Это положительное число';
// } else if (number < 0) {
//   answer = 'Это отрицательное число';
// } else {
//   answer = 'Это ноль';
// }

// console.log(answer);

//=====================================================
// вложенные ветвления
// Скрипт сравнивающий числа в переме a и b
// Если оба значения больше 100 то вывести большее из них
// В противном случае вывести сумму числа b и 512

const a = 220;
const b = 180;

if (a > 100 && b > 100) {
  const res = a > b ? a : b;

  //   let res;
  //   if (a > b) {
  //     res = a;
  //   } else {
  //     res = b;
  //   }

  console.log(res);
}
