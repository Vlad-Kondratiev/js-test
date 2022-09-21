// Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // // 1 Перебрать массив
// // // 2 Сделать переменную total до цикла
// // // 3 Каждый элемент приплюсовать к total
// // let total = 0;

// // // for (let i = 0; i < cart.length; i += 1) {
// // //   console.log(cart[i]);
// // //   total += cart[i];
// // // }
// // for (const value of cart) {
// //   total += value;
// // }

// // console.log('Total: ', total);

// // Добавь 10% к кфждому значению массива
// for (let i = 0; i < cart.Length; i += 1) {
//   cart[i] = math.round(cart[i] * 1.1);
// }

// console.log(cart);

// =============================================
// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве
// 1 Создать переменную total
// 2 Перебрать массив
// 3 На каждой итерации проверить элемент на четность
// 4 Если четное то плюсуем к total

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// Вар 1
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     console.log('Четное');
//     total += numbers[i];
//   }
// }

// Вар 2
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     //если нужно нечетное то !==
//     console.log(`${number} - Четное!`);
//     total += number;
//   }
// }

// Вар 3
// for (const number of numbers) {
//   //   console.log(number);
//   if (number % 2 !== 0) {
//     console.log('Эту итерацию нужно пропустить', number);
//     continue;
//   }

//   console.log(`${number} - Четное!`);
//   total += number;
// }

// console.log('Total: ', total);

// =============================================
//  Напиши скрипт поиска логина
// Если логина нет - вывести сообщение 'Пользователь [логин] не найден'
// Если есть - вывести сообщение 'Пользователь [логин] найден'

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyiscute', 'aj4xth3n4n'];
// const loginToFind = 'polyiscute';
// // let message = `Пользователь ${loginToFind} не найден`; // Вар 1-2

//Вар 1
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('login: ', login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// console.log(message);

// //Вар 2
// for (const login of logins) {
//   console.log('login: ', login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// //Вар 3 (лучший вариант)
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// =============================================
// Напиши скрипт поиска самого маленького числа в скрипте, при условии, что все числа уникальные

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);

// =============================================
// Напиши скрипт который объединяет все элементы массива в одно строковое значение
// Элементов может быть произвольное количество

// const friends = ['mango', 'poly', 'kiwi', 'ajax'];

// вар 1
// let string = '';

// for (const friend of friends) {
//   string += friend + ', ';
// }

// string = string.slice(0, string.length - 2);

// console.log(string);

// // вар 2
// const string = friends.join(', ');
// console.log(string);

// =============================================
// Напиши скрипт который заменяет регистр каждого символа в строке

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   // вар 1
//     if (letter === letter.toLowerCase()) {
//       console.log('Эта буква в нижнем регистре - ', letter);

//       invertedString += letter.toUpperCase();
//     } else {
//       console.log('Эта буква в верхнем регистре - ', letter);
//       invertedString += letter.toLowerCase();
//     }
//   }
//   console.log(invertedString);

//   // вар 2
//   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

// =============================================
// Делаем slug в URL из названия статьи (например из dev.to)
// Заголовак статьи состоит только из букв и пробелов
// - Нормализуем строку
// - Разбиваем по словам
// - Сшиваем строку с разделителями

// const title = 'Top 10 benefits of React framework';

// // Вар 1
// const normalaizedTitle = title.toLowerCase();
// console.log(normalaizedTitle);

// const words = normalaizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// // Вар 2
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// =============================================
// Напиши скрипт который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// // Вар 1
// for (let i = 0; i < array1.length; i += 1) {
//   total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//   total += array2[i];
// }

// console.log(total);

// // Вар 2
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// =============================================
// Работаем с коллекцией карточек в trello
// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// console.table(cards);

// // Удаление карточки (метод indexOf)
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);

// console.table(cards);

// // Добавление карточки по индексу
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);

// // Обновление/Замена (по index)
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная катрочка-4');

// console.table(cards);

// =============================================
// name.length === 4;
// Input = ['Ryan', 'Kieran', 'Jason', 'Yous']
// Output = ['Ryan','Yous']

// const users = ['Ryan', 'Kieran', 'Jason', 'Yous'];
// const output = [];

// for (const name of users) {
//   console.log(name);
//   if (name.length === 4) {
//     output.push(name);
//   }
// }
// console.log(output);

// const numbers = [12, 3232, 6666, 3, 98798];
// const output = [];

// for (const number of numbers) {
//   if (String(number).length === 4) {
//     output.push(number);
//   }
// }

// console.log(output);

// =============================================
// let numbers = [];

// numbers.push(1);
// console.log(numbers); //[1]

// numbers.push(2);
// console.log(numbers); //[1, 2]

// numbers.push(3);
// console.log(numbers); //[1, 2, 3]

// numbers.push(4);
// console.log(numbers); //[1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); //[1, 2, 3, 4, 5]

// numbers = [];
// console.log(numbers);

// Example 1 =============================================
// Создай массив genres с элементами 'Jazz' 'Blues'
// Добавить 'Rock-n-Roll' в конец
// Вывести в конволь первый элемент массива
// Вывести в консоль последний элемент массива
// Удалите первый элемент и выведите его в консоль
// Вставьте 'Country', 'Reggy'в начало массива

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock-n-Roll');

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// console.log(genres.shift());

// genres.unshift('Country', 'Reggy');
// console.log(genres);

// Example 2 =============================================
// Напиши скрипт для вычисления площади прямоугольника со сторонами значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом

// //Вар 1
// const values = '8 11';
// const arr = values.split(' ');
// const x = Number(arr[0]);
// const y = Number(arr[1]);
// const res = x * y;

// console.log(x);
// console.log(y);
// console.log(res);

// //Вар 2
// function getSquare(str) {
//   const arr = str.split(' ');
//   const x = Number(arr[0]);
//   const y = Number(arr[1]);

//   return x * y;
// }

// console.log(getSquare('8 11'));
// console.log(getSquare('10 11'));

// Example 3 =============================================
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате
// - номер_элемента: значение_элемента.
// - Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 =============================================
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   const nameWithEnding = `${namesArr[i]}:`;

//   console.log(`${nameWithEnding.padEnd(10, ' ')} ${phonesArr[i]}`);
// }

// Example 5 =============================================
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const strArr = string.split(' ');

// strArr.shift();
// strArr.pop();

// console.log(strArr.join(' '));

// Example 6 =============================================
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// const letters = string.split('');
// const reversedStr = [];

// // Вар 1
// for (let i = letters.length - 1; i >= 0; i -= 1) {
//   reversedStr.push(letters[i]);
// }
// console.log(reversedStr.join(''));

// // Вар 2
// console.log(string.split('').reverse().join(''));

// Example 7 =============================================
//Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort(); // сортировка по первому, а затем по второму символу

// // Сортировка только по первому символу
// for (let x = 0; x < langs.length; x += 1) {
//   for (let y = x + 1; y < langs.length; y += 1) {
//     const lang1 = langs[x];
//     const lang2 = langs[y];

//     if (lang1[0] > lang2[0]) {
//       langs[y] = lang1;
//       langs[x] = lang2;
//     }
//   }
// }

// console.log(langs);

// // swap пример
// let a = 1;
// let b = 2;

// [b, a] = [a, b];

// console.log('a: ', a);
// console.log('b: ', b);

// Example 8 =============================================
//Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// // let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// ======== spred ==========
// // определение макс и мин числа в массиве
// console.log(...numbers);
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// // создание копии массива
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

// // ======== rest ==========
// function sum(a, b, ...rest) {
//   console.log(rest);

//   return a + b;
// }

// console.log(sum(1, 1));

//=============================================
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//==============================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     console.log('Welcome!');
//     return;
//   }
//   if (password !== ADMIN_PASSWORD) {
//     console.log('Access denied, wrong password!');
//     return;
//   }
// }

// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

//==============================================

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);
