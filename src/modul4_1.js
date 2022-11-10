// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// }


// fnA('qweqwe', fnB);

//==================================================

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(2,3, add);
// doMath(10,2, sub);

//====================================================

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// doMath(2,3, function (x, y) {
//     return x + y;
// });

// doMath(10,2, 
//     function (x, y) {return x - y}, 
//     function() {}, 
//     function() {},
// );

//======== Отложенный вызов Регистрация события =========

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

//============= Отложенный вызов Геолокация ==============

// const onGetPositionSuccess = function (position) {
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, 
//     onGetPositionError,
// );

//============== Отложенный вызов Интервалы ================

// const callback = function () {
//     console.log('Чернз 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000);

// console.log('В коде после таймаута');

//===========================================================

// const onRequestSuccess = function (response) {
//     console.log('Вызов функции onRequestSuccess после успешного ответа бекэнда',
//     );
//     console.log(response);
// };

// fetch('https://pokeapt/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

//========================= Фильтр ==========================

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// // 1. Нужно передать функцию
// // 2. Функция получает элемент массива
// // 3. Если элемент массива удовлетворяет условие то функция вернет true
// // 4. Если элемент массива не удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// }
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

//====================== Замыкание =======================

// const fnA = function (parameter) {
//     const innerVariable = 'Значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

//========================================================

// // const makeDish = function (sheffName, dish) {
// //     console.log(`${sheffName} готовит ${dish}`);
// // };

// // makeDish('Mango', 'пирожок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'чай');

// // makeDish('Poly', 'котлеты');
// // makeDish('Poly', 'суп');
// // makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     };

//     return makeDish;
// };

// const mango = makeSheff('mango');
// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');
// poly('чай');
// poly('омлет');
// poly('bread');

//===================== Округлятор ======================

// // const floatingPoint = 3.456789;
// // const someInt = Math.round(floatingPoint); // 3
// // const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46
// //========================
// // const number1 = 3.84756;
// // const number2 = 4.12345;
// // console.log(Number(number1.toFixed(3)));
// // console.log(Number(number2.toFixed(4)));
// //========================
// // const rounder = function (number, places) {
// //     return Number(number.toFixed(places))
// // };

// // console.log(rounder(3.4567, 2));
// // console.log(rounder(3.4567, 3));
// // console.log(rounder(3.456767676, 1));
// // console.log(rounder(31.987654, 4));
// //=========================

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.657483));
// console.log(rounder3(12.947653));
// console.log(rounder2(31.6482047));
// console.log(rounder3(51.09174619));

//========== Пріватние данние і функціі ==============
//========= Скритіе реалізаціі інтерфуйс =============

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     };

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return 'Ти офигел?';
//             }

//             salary += amount;
//         },
//         lower(amount)   {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зп ${employeeName} - ${salary}`;
//         },  
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(1000000));

// console.log(salaryManager.current());

//============================================================

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// }

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

//=============== Стрелочние функціі =================



// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };
//======== явний (explicit) возврат ================
// const addArrow = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };

//========= не явний (implicit) возврат ===========

// const addArrow1 = (a, b, c) => {
//     return a + b + c;
// };
// //===== Записиваем так:
// const addArrow2 = (a, b, c) => a + b + c;
    
// console.log(add(5, 10, 15));

//==== Еслі функція стрелочная то у нее нет переменной arguments, которая храніт псевдомассів всех полученних аргументов. Еслі нужно собрать все аргументи, делаем так:
// const add = (...args) => {
//     console.log(args);
// };

// add(2, 3, 4, 5, 6, 7, 8);

//============ Возвращаем обїект ==============

// const fnA = function () {
//     return { 
//         a: 5,
//     };
// };

// console.log(fnA());
// // это можно записать так:
// const arrowFnA = () => ({ arrowA: 5});

// console.log(arrowFnA());

//============= Фильтр переписываем на стрелочные функции =============

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// // const callback1 = value => value >= 3;
// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);

// // const callback2 = value => value <= 4; 
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;
// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);

// 1. callback - одну функцию кинули в другую и она когдато вызовется
// 2. Замыкание - если из одной функции возвращаем другую, то эта другая при вызове во внешнем коде получает доступ ко всем локальным переменным родительской функции
// 3. Стрелочные функции - 
// 4. У стрелочной функціі нет своего this. Контекст внутрі стрелкі определяется местом ее обїявленія, а не визова и ссилается на контекст родительской функции.
// const showThis = () => {
//     console.log('this in showThis: ', this);
// };
// showThis(); // this in showThis: undefined

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: undefined

//==================================================

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);

//         const inner1 = function() {
//             console.log('this in inner: ', this);
//         };
//         inner1(); // this in inner:  undefined

//         const inner2 = () => {
//             console.log('this in inner: ', this);
//         };            
//         inner2(); // this in inner:  {fullName: 'Mango', showName: ƒ}
//     },
// };

// user.showName();

// 5. Стрелки никогда не используются как методи об'екта:

// const user = {
//     fullName: 'Mango',
//     showName() {
//     // showName() => { так записать нельзя  
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);
//     },
// };

// 6. Стрелочная функция не может бить конструктором:

// const user = function (name) {
//     this.name = name;
// };
// console.log(new user('Mango'));

// const user1 = name => {
//     this.name = name;
// };
// console.log(new user1('Poly')); // Uncaught TypeError: user1 is not a constructor

//========================================================

// const objA = {
//     x: 5,
//     showX() {
//         console.log('this in objA.showX: ', this); // this in objA.showX:  {x: 5, showX: ƒ}
//         console.log(this.x);

//         const objB = {
//             y: 10,
//             showThis() {
//                 console.log('this in objB.showThis: ', this); // this in objB.showThis:  {y: 10, showThis: ƒ}
//             },
//         };

//         objB.showThis();

//         const objC = {
//             y: 10,
//             showThis: () => { // Заменіли на стрелочную
//                 console.log('this in objC.showThis: ', this); // this in objC.showThis:  {x: 5, showX: ƒ}
//             },
//         };

//         objC.showThis();
//     },
// };

// objA.showX();

//============ Цепочки вызовов / chaining ===============

// const numbers = [1, 5, 2, 4, 3];

// // const greaterThenTwo = numbers.filter(function(num) {
// //     return num > 2;
// // });
// переписуєі на стрілочну:
// const greaterThenTwo = numbers.filter(num => num > 2);

// console.log(greaterThenTwo);

//=======================================================

// // const multByTwo = greaterThenTwo.map(function(num) {
// //     return num * 3;
// // });
// переписуємо на стрілочну:
// const multByTwo = greaterThenTwo.map(num => num * 3);

// console.log(multByTwo);

//=======================================================

// const sorted = multByTwo.sort(function(a, b) {
//     return a - b;
// });
// переписуємо на стрілочну:
// const sorted = multByTwo.sort((a, b) => a - b);

// console.log(sorted);

//=======================================================

// const res = numbers
//     .filter(function(num) {
//         return num > 2;
//     })
//     .map(function(num) {
//         return num * 3;
//     })
//     .sort(function(a, b) {
//         return a - b;
//     });

// // переписуємо на стрілочну:
// const res = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(res);  

//========================================================

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// // const onlineAndSorted = players
// //     .filter(function(player) {
// //         return player.isOnline;
// //     })
// //     .sort(function(prevPlayer, nextPlayer) {
// //         return prevPlayer.rank - nextPlayer.rank;
// //     });
// // // переписуємо на стрілочну:
//     const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

//     console.table(onlineAndSorted);

//=========================================================

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 800, points: 48, online: true},
// ];
// // var 1
// const updatedPlayers = players.map(function(player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
// // var 2
// const updatedPlayers = players.map((player => {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
// // var 3
// const updatedPlayers = players.map(player => ({
//         ...player,
//         points: player.points + player.points * 0.1,
// }));

// console.table(upatedPlayers);

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function(player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }

//     return player;
// });
// // шаг 1
// const updatedPlayers = players.map(player => {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }

//     return player;
// });
// // шаг 2
// const updatedPlayers = players.map(player => {
//     return player.id === playerIdToUpdate
//             ? { ...player, timePlayed: player.timePlayed + 50 }
//             : player;
// });
// // шаг 3
// const updatedPlayers = players.map(player => 
//     player.id === playerIdToUpdate
//             ? { ...player, timePlayed: player.timePlayed + 50 }
//             : player,
// );

// console.table(updatedPlayers);

//================= Замикания ================

// function createCalcFunktion(n) {
//     return function() {
//         console.log(1000 * n)
//     };
// };

// const calc = createCalcFunktion(42);
// calc();

//=====================================

// function createIncrementor(n) {
//     return function(num) {
//         return n + num;
//     }
// };

// const addOne = createIncrementor(1);
// console.log(addOne(41));
// console.log(addOne(10));

// const addTen = createIncrementor(10);
// console.log(addTen(41));
// console.log(addTen(10));

//=====================================

// function urlGenerator(domain) {
//     return function(url) {
//         return `https//${url}.${domain}`;
//     }
// };

// const comUrl = urlGenerator('com');
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// const uaUrl = urlGenerator('com.ua');
// console.log(uaUrl('google'));
// console.log(uaUrl('netflix'));

//======================================

//Напиши свою функцію bind
//Приклад роботи:
// function logPerson() {
//     console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
// };

// const person1 = {name: 'Michel', age: 22, job: 'Frontend'};
// const person2 = {name: 'Helen', age: 19, job: 'SMM'};

// BiquadFilterNode(person1, logPerson);
// BiquadFilterNode(person2, logPerson);

// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// };

// function logPerson() {
//     console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
// };

// const person1 = {name: 'Michel', age: 22, job: 'Frontend'};
// const person2 = {name: 'Helen', age: 19, job: 'SMM'};

// bind(person1, logPerson)();
// bind(person2, logPerson)();

//=============== forEach ==============
// Array.prototipe.forEach(callback(current value, index^ array), thisArg)
// - Поэлементно перебирает ориг. массив
// - Ничего не возвращает
// - Заменяет классический for,  если не нужно прерывать цикл

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(number, index, array) {
//     console.log('number', number);
// });

// ================= map ===============
// Array.prototipe.map()
// - Поэлементно перебирает оригинальный массив
// - Не изменяет ориг массив
// - возвращает новый массив такой же длинны

// const numbers = [5, 10, 15, 20, 25];

// const doubledNams = numbers.map(number => {
//     console.log(number);

//     return number * 2;
// });

// console.log('numbers', numbers);
// console.log('doubledNams', doubledNams);

//=======================================

// const players = [
//         {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//         {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//         {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//         {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//         {id: 'player-5', name: 'Chelsy', timePlayed: 800, points: 48, online: true},
// ];

// const playerNames = players.map(player => { // явный возврат
//     console.log(player);

//     return player.name;
// });

// const playerNames = players.map(player => player.name); // не явный возврат
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// // const res = players.map(player => {
// //     return {
// //         name: player.name,
// //         online: player.online,
// //     };
// // });
// // то же самое в одну строку:
// const res = players.map(({ name, online }) => ({ name, online}));

// console.log('res', res);

// // const updatedPlayers = players.map(player => {
// //     return {
// //         ...player,
// //         points: player.points * 1.1,
// //     };
// // });
// // упрощаем запись:
// const updatedPlayers = players.map(player => ({
//         ...player,
//         points: player.points * 1.1,
// }));

// console.table(updatedPlayers);
// console.log(updatedPlayers);

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         console.log('Нашли');

//         return {
//             ...player,
//             timePlayed: player.timePlayed + 1000,
//         };
//     };

//     return player;
// });
// // для более краткой записи исп тернарный оператор:
// const updatedPlayers = players.map(player => {
//         return playerIdToUpdate === player.id
//         ? {
//             ...player,
//             timePlayed: player.timePlayed + 1000,
//         }
//         : player,
//     });
// и еще можем сократить запись:
// const updatedPlayers = players.map(player => 
//     playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 1000 }
//     : player,
// );    

// console.table(updatedPlayers);

//============ filter =================
// Array.prototipe.filter()
// - поэлементно перебирает оригинальный массив
// - возвращает новый массив с элементами или пустой
// - добавляет в возвращенный массив элементы удовлетворяющие условия калбэк функции
// - если калбэк вернул true элемент добавляется в возвращаемый массив
// - если калбэк вернул false элемент НЕ добавляется в возвращаемый массив

// const numbers = [5, 10, 15, 20, 25];

// // const filteredNumbers = numbers.filter(number => {
// //     console.log(number);
// //     return number < 10 || number > 20;
// // });
// // отимизируем запись:
// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 800, points: 48, online: true},
// ];

// // получаем массив всех onlinePlayers
// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// // получаем массив всех offlinePlayers
// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

// // получаем массив haedcorePlayers с временем Ю 250
// const haedcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(haedcorePlayers);

//================== find ===================
// Array.prototipe.find
// - поэлементно перебирает оригинальный массив
// - возвращает первый элемент удовлетворяющий условия поиска или undefined

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// console.log(number);

// const players = [
//         {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//         {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//         {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//         {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//         {id: 'player-5', name: 'Chelsy', timePlayed: 800, points: 48, online: true},
// ];

// // ищем игрока по id
// const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// // пишем функцию
// const findPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// };

// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));

// //ищем игрока по имени:
// const playerNameToFind = 'Poly';

// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);

//=============== every ================
// // Array.prototipe.every()
// // - поэлементно перебирает оригинальный массив
// // - возвращает true если все элементы массива удовлетворяют условию

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 800, points: 48, online: true},
// ];

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

//================ some ================
// // Array.prototipe.some()
// // - поэлементно перебирает оригинальный массив
// // - возвращает true если хотябы один элемент массива удовлетворяют условию

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

//============== reduce() ==============
// // Array.prototipe.reduce()
// // - поэлементно перебирает оригинальный массив
// // - повертає що завгодно
// // - замінює все на світі, ала користуватись треба з розумом

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// // accumulator = 0 -> number = 5 -> return 0 + 5
// // accumulator = 5 -> number = 10 -> return 5 + 10
// // accumulator = 15 -> number = 15 -> return 15 + 15
// // accumulator = 30 -> number = 20 -> return 30 + 20
// // accumulator = 50 -> number = 25 -> return 50 + 25

// // рахуємо загальну зарплатню
// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//     return total + value;
// }, 0);
// console.log(totalSalary);

// // Порахувати загальну кількість годин

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//     return totalTime + player.timePlayed;
// }, 0);
// console.log(totalTimePlayed);

// // Рахуємо загальну суму товарів у кошику

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// // const totalAmount = cart.reduce((total, item) => {
// //     return total + item.price * item.quantity;
// // }, 0);
// // Альтернативний запис:
// const totalAmount = cart.reduce(
//     (total, { price, quantity }) => total + price * quantity,
//     0,
// );
// console.log(totalAmount);

// Збираємо теги з твітов:
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['css', 'react'] },
    { id: '003', likes: 8, tags: ['html', 'css', 'nodejs'] },
    { id: '004', likes: 0, tags: ['js', 'react', 'nodejs'] },
];

// const allTags = tweets.reduce((acc, tweet) => {
//     // // вар 1
//     // tags.push(...tweet.tags);
//     // return tags;

//     //вар 2 правільно
//     return [...acc, ...tweet.tags];
// }, []);

// Запис в одну строку:
const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

console.log(allTags);

// Ведемо статистику тегів
const tagsStats = allTags.reduce((acc, tag));
console.log(tagsStats);
