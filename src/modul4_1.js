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


//======================================
//=============== forEach ==============
//======================================

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

// // Збираємо теги з твітов:
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['css', 'react'] },
//     { id: '003', likes: 8, tags: ['html', 'css', 'nodejs'] },
//     { id: '004', likes: 0, tags: ['js', 'react', 'nodejs'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//     // // вар 1
//     // tags.push(...tweet.tags);
//     // return tags;

//     //вар 2 правільно
//     return [...acc, ...tweet.tags];
// }, []);

// // Запис в одну строку:
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);

// Ведемо статистику тегів
// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);

//     if (acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }

//     acc[tag] = 1;

//     return acc;
// }, {});

// console.log(tagsStats);
// =============
// const tagsStats = allTags.reduce((acc, tag) => {
// //     if (acc[tag]) {
// //         return {
// //             ...acc,
// //             [tag]: acc.tag + 1
// //         };
// //     }
        
// //     return {
// //         ...acc,
// //         [tag]: 1,
// //     };
// // }, {});

// // Все це можна записати за допомогою тернарника:
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {}); 
// console.log(tagsStats); 
// ================
// // спрощуємо запис:
// const tagsStats = allTags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},
// );

// console.log(tagsStats);

//================= sort ====================
// Array.prototipe.sort(callback(currentEl, nextEl){})
// - Сортує та ЗМІНЮЄ оригінальний массив
// - по замовчуванню:
//............ - сортує по збшльшенню
//............ - призводе єлементи до рядку та сортує по [Unicode](httpc://unicode-table.com/en/)

// const numbers = [1, 9, 6, 2, 3];
// // numbers.sort();
// console.log('numbers: ', numbers);

// const letters = ['b', 'B', 'a', 'a'];
// // letters.sort();
// // console.log('letters: ', letters);

// numbers.sort((currentEl, nextEl) => {
//     return currentEl - nextEl;
// });

// console.log(numbers);

// // зазвичай робиться копія ориг массиву
// const copy = [...numbers];
// copy.sort();
// console.log('copy: ', copy);
// console.log('numbers: ', numbers);

// // або
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const askSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumberss: ', descSortedNumbers);
// console.log('askSortedNumbers: ', askSortedNumbers);
// console.log('numbers: ', numbers);

// Також можна отримавши одін з результатів перевернути його за допомогою .reverse()
// console.log([1, 2, 3, 4, 5].reverse());

//====== Кастомне сортування складних об'єктів ======

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// // По часу гри
// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// );
// // console.log(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );
// console.table(sortedByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//     console.log(a.name[0]);
//     console.log(b.name[0]);
//     console.log(a.name[0] - b.name[0]);

//     return a.name[0] - b.name[0]
// });
// console.table(byName);

// console.log('a' > 'b');
// console.log('b' > 'a');

// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     };
// });
// console.table(byName);

//============== flat ================
// // Array.prototipe.flat(depth)
// // - Розгладжує масив до вказаної глибини
// // - за замовчуванням глибина 1

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array);
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));


//============== flatMap ================
// Array.prototipe.flatMap(callback)

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['css', 'react'] },
//     { id: '003', likes: 8, tags: ['html', 'css', 'nodejs'] },
//     { id: '004', likes: 0, tags: ['js', 'react', 'nodejs'] },
// ];


// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(tags);

// const tags = tweets.map(t => t.tags).flat();
// // теж саме але ефективніше:
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags. reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

//============ chaining ================

// const numbers = [1, 2, 3, 4, 5];

// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });
// // оптимізуємо запис:
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// // const multByThree = greaterThenTwo.map(function (num) {
// //     return num * 3;
// // });
// // оптимізуємо запис:
// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// // const sorted = multByThree.sort(function (a, b) {
// //     return a - b;
// // });
// // оптимізуємо запис:
// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// // Збираємо ці три методі у ланцюжок chaining
// const sorted = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(sorted);   

//=====================================
// Сортуємо тих хто онлайн по рангу
// спочатку фільтруємо потім сортуємо

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((playerA, playerB) => playerA.rank - playerB.rank);

// console.table(onlineAndSorted);

//=====================================

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['css', 'react'] },
//     { id: '003', likes: 8, tags: ['html', 'css', 'nodejs'] },
//     { id: '004', likes: 0, tags: ['js', 'react', 'nodejs'] },
// ];

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags. reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// const stats = tweets 
//     .flatMap(t => t.tags)
//     .reduce(
//         (acc, tag) => ({
//             ...acc,
//             [tag]: acc[tag] ? acc[tag] + 1 : 1,
//         }),
//         {},
//     );
// console.log(stats);

//================================================
//================= forEach ======================
//================================================

// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// for (const number of numbers) {
//     console.log(number);
// }
    
// function myFn(number) {
//     console.log(number);
// }

// numbers.forEach(function myFn(number) {
//     console.log(number);
// }); 

// numbers.forEach(function (number) {
//     console.log(number);
// }); 

// const myFn = (number) => {
//     console.log(number);
// };
// numbers.forEach(myFn);

// numbers.forEach((number) => {
//     console.log(number);
// });

// const myFn = (number) => console.log(number);
// numbers.forEach(myFn); 

// numbers.forEach((number) => console.log(number)); 

// numbers.forEach(number => console.log(number)); 

//=============== map =================

// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// // // x2 -= [10, 20, 30, 40, 50]
// // const newArr = [];

// // numbers.forEach((number) => {
// //     newArr.push(number * 2);
// // });
// // console.log(newArr);

// // // x + 5 -= [10, 15, 20, 25, 30]
// // const newArr2 = [];

// // numbers.forEach((number) => {
// //     newArr2.push(number + 5);
// // });
// // console.log(newArr2);

// // // x10 -= [50, 100, 150, 200, 250]
// // const newArr3 = [];

// // numbers.forEach((number) => {
// //     newArr3.push(number + 5);
// // });
// // console.log(newArr3);

// //====================================

// // const numbers = [5, 10, 15, 20, 25];
// // console.log(numbers);

// const x2 = (number) => number * 2;
// const xPlus5 = (number) => number + 5;
// const x10 = (number) => number * 10;


// const map = (arr, callback) => {
//     const newArr = [];

//     arr.forEach((item) => newArr.push(callback(item)));

//     return newArr;
// };

// console.log(map(numbers, x2)); // x2 -= [10, 20, 30, 40, 50]
// console.log(map(numbers, xPlus5)); // x + 5 -= [10, 15, 20, 25, 30]
// console.log(map(numbers, x10)); // x10 -= [50, 100, 150, 200, 250]

// //=====================================

// console.log(
//     map(
//         ['www.google.com', 'www.facebook.com', 'www.amazon.com'],
//         (url) => `<a href='${url}'>${url}</a>` 
//         )
//     );

// // <a href='www.google.com'>www.google.com</a>
// // <a href='www.facebook.com'>www.facebook.com</a>

//================ find =====================

// const find = (arr, callback) => {
//     for (const item of arr) {
//         if (callback(item)) {
//             return item;
//         }
//     }
// };

// const users = [
//     { name: 'Bobby', age: 15 },
//     { name: 'Peter', age: 20 },
//     { name: 'Chris', age: 25 },
// ];

// console.log(
//     find(users, function (item) {
//         return item.name === 'Chris';
//     })
// );

// console.log(find(users, (item) => item.name === 'Bobby'));
// console.log(find(users, (item) => item.name === 'Peter'));
// console.log(find(users, (item) => item.age === 25));
// console.log(find([1, 2, 3, 4, 5], (number) => number > 3));
// console.log(find([1, 2, 3, 4, 5], (number) => number % 2 === 0));

//============== filter =================
// const filter = (arr, callback) => {
//     const newArr = [];

//     arr.forEach((item) => {
//         if (callback(item)) {
//             newArr.push(item);
//         }
//     });

//     return newArr;
// };


// const users = [
//     { name: 'Bobby', age: 15 },
//     { name: 'Peter', age: 20 },
//     { name: 'Chris', age: 25 },
//     { name: 'Brown', age: 55 },
// ];

// console.log(filter(users, (user) => user.age < 25));
// console.log(filter(users, (user) => user.age > 20));
// console.log(filter(users, (user) => user.name[0] === 'B'));

//=============== closures / Замикання ==================

// function fn(name) {
//     return function () {
//         console.log(name)
//     };
// }

// let x = 'Bobby';
// const closuredName = fn(x);

// closuredName(); // Bobby

// x = 'Peter';
// closuredName(); // Bobby

//=========== closer counter ==================
// function Counter(initialValue = 0) {
//     let x = initialValue;

//     return function () {
//         console.log((x += 1)); // 1, 2, 3, 4
//     }
// }

// const counter1 = Counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3

// const counter2 = Counter(10);
// counter2(); // 11
// counter2(); // 12
// counter2(); // 13

//============= Example 1 - Коллбек функції ===============
//Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(partialProduct, callback) {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
//   }
  
//   function logProduct(product) {
//     console.log(product);
//   }
  
//   function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
//   }
  
//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//==========================

// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//============================================

// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// Рішення
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

//====================================================

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//=====  ======  ======  ======  ======  ======

// const createProduct = (partialProduct, callback) => callback({ id: Date.now(), ...partialProduct });
 
// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) => console.log(product.price * product.quantity);
 
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//=======================================================

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);

// // рефакторирг:
// const handleSuccess = (message) => console.log(`✅ Success! ${message}`);

// const handleError = (message) => console.log(`❌ Error! ${message}`);


// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//================================================

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//       return value * 2;
//     }),
//   );
//   console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//       return value - 10;
//     }),
//   );
//   console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//       return Math.sqrt(value);
//     }),
//   );
//   console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.ceil(value);
//     }),
//   );
//   console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.floor(value);
//     }),
//   );

// // рефакторім:
// console.log(map([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(map([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(map([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

//====================================================

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   console.log(items);
// //   for (let i = 0; i < items.length; i += 1) {
// //     console.log(`${i + 1} - ${items[i]}`);
// //   }
// Рефакторим:
//      items.forEach((item, index) => console.log(`${i + 1} - ${item}`));
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//=====================================================

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }

// //  Рефакторим вар1:
//   nameList.forEach((name, index) => console.log(`${name}: ${phoneList[index]}`));
// //  Рефакторим вар2:  
//       nameList.forEach((_, index) => console.log(`${nameList[index]}: ${phoneList[index]}`)
//       );
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//============== Example 9 - Метод forEach ====================

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }
//   args.forEach((item) => (total += item));
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

//======================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

//================================================
// Написати функцію котра буде повертати масив моделей авто
// 
// 1. Визначити метод
// 2. перебрати масив з авто
// 2. Зібрати масив з моделями автою.


 const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// const getModels = cars => {
//   const models = cars.map(car => {
//     return car.model
//   })

//   return models
// }
// Оптимізуємо у стрілочну функцію:
const getModels = cars => cars.map(car => car.model);

const allModels = getModels(cars);
// console.table(allModels);

//==================================================

// Task 2. 
// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінени 
// значенням властивості `price` залежно від переданої знижки.
// 1. Перебрати масив з авто
// 2. Повернути новий масив з оновленою ціною залежно від скидки

// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWithDiscount = cars.map(car => {
//     return {
//       ...car,
//       price: car.price - (car.price * discount)
//     }
//   })

//   return carsWithDiscount;
// };
// Оптимізуемо:
// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({
//   ...car,
//   price: car.price - (car.price * discount) 
// }))

// const carsDiscount = makeCarsWithDiscount(cars, 0.2);
// console.table(carsDiscount);

//=====================================================

// Task 3.
// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша 
// ніж значення параметра `threshold`.

// const filterByPrice = (cars, threshold) => {
//   const filteredCars = cars.filter((car) => {
//     if (car.price < threshold) {
//       return true
//     }

//     return false
//   })

//   return filteredCars
// };
// Оптимізуємо запис:
const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold)    

const filteredByPrice = filterByPrice(cars, 30000);
// console.table(filteredByPrice);

// ===============================================

// Task 4.
// Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість onSale яких true.

const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

const filteredBySale = getCarsWithDiscount(cars);
// console.table(filteredBySale);

// ===============================================

//Task 5
// Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
// збігається зі значенням параметра `type`.

// const getCarsWithType = (cars, type) => {

//   const filteredCars = cars.filter(car => {
//     if (car.type === type) {
//       return true
//     }
//   })

//   return filteredCars
// }

// const getCarsWithType = (cars, type) => {

//   const filteredCars = cars.filter((car) => {
//     if (car.type === type) {
//       return true
//     }
//   })

//   return filteredCars
// }
// Оптимізуємо запис:
const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

const filteredByType = getCarsWithType(cars, 'suv');
// console.table(filteredByType);

//==================================================

//Task 6.
// нехай ф-я getCarByModel повертає одне авто за моделю

// const getCarByModel = (cars, model) => {

//   const foundCar = cars.find((car) => {
//     if(car.model === model) {
//       return true
//     }
//   })

//   return foundCar
// };

const getCarByModel = (cars, model => cars.find(({model: carModel}) => carModel === model))


const foundCarByModel = getCarByModel(cars, 'f-150');
// console.log(foundCarByModel);

//========================================

// Task 7.
// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
// зростанням значення якості `amount`.

// const sortByAscendingAmount = cars => {

//   const sortedCars = [...cars];

//   sortedCars.sort((a, b) => {
//     if (a.amount > b.amount) return 1;
//     return -1;
//   });

//   return sortedCars
// };

const sortByAscendingAmount = cars => cars.sort((a, b) => a.amount - b.amount);

const sortedByAmountCars = sortByAscendingAmount(cars);
// console.log(sortedByAmountCars);

//========================================

//Task 8.
// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів 
// відсортований за зменшенням значення властивості `price`.

const sortByDescendingPrice = cars => [...cars].sort((a, b) => a.price - b.price);

const sortedByPrice = sortByDescendingPrice(cars);
// console.table(sortedByPrice);

//=======================================

//Task 9.
// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра `order`.

const sortByModel = (cars, order) => {
  const sortedCars = [...cars]

  // if (order === 'asc') {
  //   sortedCars.sort((a, b) => {
  //     if (a.model > b.model) {
  //       return 1
  //     }

  //     return -1
  //   })
  // } else if (order === 'desc') {
  //   sortedCars.sort((a, b) => {
  //     if (a.model < b.model) {
  //       return 1
  //     }

  //     return -1
  //   })
  // }
    // Оптимізщваний запис:
    if (order === 'asc') {    
      sortedCars.sort((a, b) => a.model > b.model ? 1 : -1)
    } else if(order === 'desc') {
      sortedCars.sort((a, b) => a.model < b.model ? 1 : -1)
    }

  return sortedCars
  
};

const cars1 = sortByModel(cars, 'asc');
const cars2 = sortByModel(cars, 'desc');

// console.log(cars1);
// console.log(cars2);

//=======================================

// Task 10.
// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

const getTotalAmount = cars => {

  // const total = cars.reduce((total, car) => {

  //   total += car.amount
  //   return total
  // }, 0)
  // Оптимізщваний запис:
  const total = cars.reduce((total, car) => total += car.amount, 0);

  return total
};

// console.log('Total', getTotalAmount(cars));

//========================================

// Task 11.
// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.
// 1. спочатку треба отпримати відфільтровний масив, де тільки ті машини котрі на розпродажу
// 2. Потім методом map, створити з фітфльтрованого масива автомобілів новий масив, де тільки назви моделей будуть

// const getModelsOnSale = (cars) => {
//   const carsOnSale = cars.filter( car => {
//     return car.onSale
//   })

//   const carModels = carsOnSale.map( car => {
//     return car.model
//   })

//   return carModels
// };
// Оптимізoваний запис:
const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

//=======================================

//Task 12.
// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

const getSortedCarsOnSale = cars => {

  const carsOnSale = cars.filter( car => {
    return car.onSale
  })

  return carsOnSale.sort((a, b) => a.price - b.price) //sort змшнює масив, НЕ створює новий
}
// Оптимізoваний запис:
// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price)

console.table(getSortedCarsOnSale(cars));

//========================================
//============= Замикання ================

const sortCarsByProp = (cars, prop) => {

  let countCalls = 0;

  const sortCars = (param) => {
    cars.sort((a, b) => a[prop] - b[prop]);
    countCalls++;
    console.log(countCalls)
  }
  return sortCars
}

const sortSomething = sortCarsByProp(cars, 'price');

sortSomething(param)
sortSomething()
sortSomething()
sortSomething()

//==========================================