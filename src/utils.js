// Напиши скрипт выбора стоимости отеля по кол-ву звезд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

// Если в переменной stars что-то кроме чисел 1-5 выведи строку 'Такого кол-ва звезд нет'

// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if(stars === 2) {
//     price = 30;
// } else if(stars === 3) {
//     price = 50;
// } else if(stars === 4) {
//     price = 70;
// } else if(stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// switch(stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// ===================================================

// Напиши скрипт выбора стоимости отеля по кол-ву звезд
// 1, 2 - 20$, 4, 4 - 30$, 5 - 120$

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if(stars === 3 || stars === 4) {
//     price = 30;
// } else if(stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch(stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//     case 4:
//         price = 30;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// ==========================================
// Напиши скрипт выбора опций доставки товара
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
// В переменную message записать сообщение в зависимости от опции
// 'Вы можете забрать товар завтра с 12:00 в нашем офисе'
// 'Курьер доставит заказ завтра с 9:00 до 17:00'
// 'Посылка будет отправлена сегодня'
// 'Вам перезвонит менеджер'

// 1. Создать переменные
// const option = 1;
// let message = '';

// 2. Сделать switch 1, 2, 3
// 3. В каждом case записать в message строку
// switch(option) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;

//     case 2:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;

//     case 3:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;

//     default:
//         message = 'Вам перезвонит менеджер';
// }

// 4. Сделать log message
// console.log(message);

// ====== Цикл for =======
// for (инициализация; условие; пост - выражение) (
// Тело цикла
// )

// for (let i = 0; i <= 25; i += 5) {
//     console.log(i);
// }

// console.log('dededede');

// ======================================================
// Напиши скрипт который подсчитывает общую сумму зарплат
// Кол-во работников хранится в переменной employees
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// 1. Сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// 2. Перебрать работников в цикле
// for(let i = 1; i <= employees; i += 1) {
// 3. Сгенерить случайную з/п
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
// console.log(`з/п работника номер ${i} - ${salary}`);

// 4. Прибавить к totalSalary
// totalSalary += salary;
// }
// 5. Лог
// console.log('totalSalary: ', totalSalary);

// ===========================================================
// Напиши скрипт, который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел переменных от min до max.
// Например, если min = 0 и max = 5, то диапазон 0-5 и в нем два четных числа 2 и 4

// - 1-й вариант
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//         console.log('четное: ', i);

//         total += i;
//     }
// }

// console.log('total: ', total);

// - 2-й вариант
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 !== 0) {
//         console.log('не четное: ', i);
//         continue;
//     }

//     console.log('четное: ', i);
//     total += i;
// }

// console.log('total: ', total);

// ==================================================

// - Напиши скрипт обработки покупки в магазине
// - Баланс пользователя хранится в переменной balance
// - Баланс покупки в payment
// - Перед проверкой вывести сооющение
// "Общая стоимость заказа [число] кредитов. Проверяем кол-во средств на вашем счету"
// - Если сумма заказа не превышает баланс:
// - Вычесть из баланса сумму покупки
// - Вывести сообщение: "На счету осталось (...) кредитов"
// - Если сумма заказа превышает баланс:
// - Вывести сообщение: "На счету недостаточно средств"
// - Вывести сообщение: "Операция завершена"

// let balance = 15000;
// const payment = 2000;

// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во средств на вашем счету`,
// );

// if (balance >= payment) {
//     console.log('Спасибо за покупку!');

//     balance -= payment;

//         console.log(`На счету осталось ${balance} кредитов`);
// } else {
//         console.log('На счету недостаточно средств');
// }
// console.log('Операция завершена');

// ===========================================================

// Напиши скрипт подсчета суммы покупки со скидкой в зависимости от потраченной суммы

// - Общая сумма потраченного хранится в totalSpent
// - Сумма текущего платежа в payment
// - Скидка хранится в discount
// - Если потрачено от 100 до 1000 - бронзовый партнер,скидка 2%
// - Если потрачено от 1000 до 5000 - серебрянный партнер,скидка 5%
// - Если потрачено более 5000 - золотой партнер,скидка 10%
// - Если потрачено менее 100 - не партнер,скидка 0%
// - В результате вывести сообщение:
// - Оформлен заказ на сумму (сумма) со скидкой (скидка)%

// let totalSpent = 3000;
// let payment = 550;
// let discount = 0;

// if(totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// }else if(totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Cеребрянный партнер, скидка 5%');
//     discount = 0.05;
// }else if (totalSpent >= 5000) {
//     console.log('Золотой партнер, скидка 10%');
//     discount = 0.1;
// }else {
//     console.log('У вас нет партнерской скидки');
// }

// - payment = payment - payment * discount;
// payment -= payment * discount;

// console.log(`Оформлен заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченного: ${totalSpent}`);

// - 'Бронзовый партнер, скидка 2%'
// - 'Cеребрянный партнер, скидка 5%'
// - 'Золотой партнер, скидка 10%'
// - 'У вас нет партнерской скидки'

// =====================================================

// - Скрипт к html
// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');
// console.log(outputEl);

// let total = 0;

// btnAdd.addEventListener('click', function () {
//     console.log('click hehehe');

//     const value = Number(valueInput.value);

//     console.log(value);

//     total += value;
//     outputEl.textContent = total;

//     console.log('total: ', total);

//     valueInput.value = '';
// })

// resetBtn.addEventListener('click', function () {
//     total = 0;
//     outputEl.textContent = 0;
// })

// ==================================================

// Парное/не парное число, остаток от деления
// const f = 27;
// console.log('парное число', f % 2 === 0);
// console.log('не парное число', f % 2 !== 0);
