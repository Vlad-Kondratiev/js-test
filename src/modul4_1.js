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

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клик по кнопке ' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

//============= Отложенный вызов Геолокация ==============

