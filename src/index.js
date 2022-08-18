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
// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth ', elementWidth);
// console.log(typeof elementWidth);

// ========================
// let elementHeight = '200.74px'; 
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight ', elementHeight);
// console.log(typeof elementHeight);

// = Отсекает заданное кол-во цифр после запятой =

// let salary = 1300.16472;
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
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const room = 716;
// const type = 'VIP';
// const welcomeMsg = 'Гость' + ' ' + firstName + ' ' + lastName + ' ' + 'поселяется в' + " " + type + ' ' + 'номкр' + ' ' + room;
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// ===== Шаблонные строки (template strings) 
// const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников`;
// console.log(orderMsg);

// ==== Нормализация с методом toLowerCase() ====
// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// ===== Поиск в строке с методом includes() =====
// const blacklisteWord1 = 'спам';
// const blacklisteWord2 = 'распродажа';

// const string1 = 'Привет, это не спам';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели';
// const string3 = 'Рекламная компания началась';

// console.log(string1.includes(blacklisteWord1));
// console.log(string1.includes(blacklisteWord2));

// console.log(string2.includes(blacklisteWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklisteWord2));

// console.log(string3.includes(blacklisteWord1));
// console.log(string3.includes(blacklisteWord2));

// ======= Операторы сравнения ========
// console.log(15 < 3);

// ======= При таком сравнении всегда происходит приведение к числу
// console.log('15' < 3);

// ======= Операторы равенства (== и ===) и неравенства (!= и !==)
// ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) И НЕРАВЕНСТВО (!==)
// const isEqual = 1 === 1;
// console.log(isEqual);

// ======= Приведение к булю 
// console.log(Boolean(0));
// ======= 6 ложных значений приводящих к false
// ======= 0, NaN, Null, undefined, " ", ' ', false

// ======= Напиши скрипт проверяющий вхождение числа в отрезок ограниченный х1 и х2
//  - До х1
//  - После х2
//  - От х1 до х2
//  - До х1 или после х2

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(`Число ${number} попадает в отрезок до ${x1}? ` , number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}? ` , number > x2);

// ====== && - логическое и =======
// const res1 = number > x1 && number < x2;
// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

// ====== || - логическое или ======
// const res2 = number < x1 || number > x2;
// 150 < 10 || 150 > 30
// false || true
// false
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, res2);

// Напишите скрипт проверяющий возможность открыть чат с пользователем
// Пользователь должен быть:
// - другом
// - онлайн
// - без режима не беспокоить

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

// Напиши скрипт проверки подписки пользователя при доступе к контенту
// Есть три типа подписки: free, pro, vip
// Получить доступ могут только pro и vip
// const sub = 'pro';
// Если пользователь pro или vip тогда есть доступ
// const canAccessContent = sub === 'pro' || sub === 'vip';
// const sub = 'pro'
// true || false => true

// const sub = 'vip'
// false || true => true

// const sub = 'free'
// false || false => false

// console.log('Есть доступ к контенту?', canAccessContent);

// if (0) {
//     // Если if (0) = true то тело выполняется, если false то нет
//     console.log('deded');
// }
// console.log('дальше');

// Оператор ветвления if...else
// if (50 < 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }

// Оператор ветвления ilse...if
// const salary = 590;
// if (salary <= 500) {
//     console.log('уровень 1');
// } else if(salary > 500 && salary <= 1500) {
//     console.log('уровень 2');
// } else if(salary > 1500 && salary < 3000) {
//     console.log('уровень 3');
// } else {
//     console.log('уровень 4');
// }
// console.log('Выполнено');

// Тернарный оператор
const balance = -1590;
// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }

// const message = условие ? выражение1 : выражение2;
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);