// "use strict";
// console.log("Hello");
// const a = 10;
// console.log('index a:', a);

// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const userName = prompt("What is your name?");
// console.log(`Hello`, userName);
// console.log(`Hello`, Number(userName));

// const x = 10;
// console.log(x % 8);

// const y = 27;
// console.log('парне число:', y % 2 === 0); //парне число
// console.log('не парне число:', y % 2 !== 0); //не парне число

// let i = 1;
// console.log(i);

// i = i + 1;
// console.log(i);

// i += 1;
// console.log(i);
// =====================
// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chalsy";
// const massage = "Welcome";
// const isOpen = true;
// const shouldConfirm = false;

// const x = 10;

// console.log('Price', totalPrice);

// const type = typeof isOpen;
// console.log(type);
// ========================
// console.log('Do');
// alert('cdcdcdcdc');
// console.log('Posle');

// ========================
// Хотите продлить подписку?
// const message = 'Хотите продлить подписку?'
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// ========================
// let quantity = prompt('Введите количество товара');
// quantity = Number (quantity);
// console.log(quantity);
// console.log(typeof quantity);

// ========================
let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth ', elementWidth);
// console.log(typeof elementWidth);

// ========================
let elementHeight = '200.74px'; 
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight ', elementHeight);
// console.log(typeof elementHeight);

// = Отсекает заданное кол-во цифр после запятой =

let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// Предыдущие две строки монно записать так
// salary = Number(salary.toFixed(2));

// console.log(salary);

// ==== Приведение к числу ====

// console.log(Number(false));
// console.log(Number(true));
// console.log(Number('nvisxmcireu'));

// let quantity = '30';
// let value = '12 Эту строку невозможно привести к числу';
// console.log(Number(quantity));
// console.log(Number(value));

// ==== Возведение в степень ====

// const base = 2;
// const power = 5;
// const result = Math.pow(2, 3);
// console.log(Math.pow(2, 3));

// Или можно использовать экспоненту **
// console.log(3 ** 6);
// или
// console.log(base ** power);

// = Напиши скрипт который просит ввести число и степень
// = Возводит число в эту степень и выводит результат

// 1. Попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// 2. Попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// 3. Возвести данные в степень и вывести 
// const result = base ** power;
// console.log(result);

// ==== Генерим псевдослучайные числа ====
// console.log(Math.random());

// Math.random() * ((max - min) + min);
// const max = 50;
// const min = 30;
// console.log(Math.random() * (max - min) + min);

// == Рандомная смена цвета ajyf ==
// const colors = ['tomato', 'teal', 'orange', 'yellow', 'blue', 'pink'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// ==== Длина строки ====
// const message = 'В этой строке 26 символов.';
// console.log(message.length);

// ==== Конкатенация строк =====
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

const room = 716;
const type = 'VIP';
// const welcomeMsg = 'Гость' + ' ' + firstName + ' ' + lastName + ' ' + 'поселяется в' + " " + type + ' ' + 'номкр' + ' ' + room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);

// ===== Шаблонные строки (template strings) 
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;
console.log(orderMsg);

// ==== Нормализация с методом toLowerCase() ====
let brand = prompt('Давай бренд');
brand = brand.toLowerCase();
console.log(brand);


