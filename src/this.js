//Контекст (this)
// - Де та як була об'явлена функція НЕ МАЄ ЖОДНОГО ЗНАЧЕННЯ!
// - Контекст визначається В МОМЕНТ ВИЗОВУ ФУНКЦІЇ, якщо він не прив'язан явно

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

//========================================

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

//=== Виклик без контексту, але об'явлена як метод об'єкта ===

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag(); // this user

// const outerShowTag = user.showTag;

// outerShowTag(); // this undefined

//========= Контекст в callback-функціях ========

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// // user.showTag();

// // const xyz = user.showTag;

// // xyz(); 

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

//================================================

// const fn = function () {
//     console.log('fn -> this', this)
// };

// fn(); // this undefined

//===============================================

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // this book

// const outerShowThis = book.showThis;
// outerShowThis(); // this undefined

//==============================================

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // this undefined

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // this sweater

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor(blue); // this undefined

//================================================

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);        
//     };

//     return changeColor;
// }; 

// const updateColor = makeChangeColor();
// updateColor('yelow'); // this undefined

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange'); // this hat

//================================================

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     // operation(value);
//     counter.increment(10);
// };

// updateCounter(10, counter.increment); // this undefined
// updateCounter(5, counter.decrement); // this undefined
// console.log(updateCounter);

//==================================================

// const showThis = function (...args) {
//     console.log(args);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 10, 20, 30, 40, 50);
// showThis.apply(objA, [10, 20, 30, 40, 50]);

// const objB = {
//     c: 55,
//     d: 11,
// };

// showThis.call(objB, 15, 25, 35, 45, 55);

//================================================

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//     color: 'green',
// };

// // changeColor.call(sweater, 'blue');
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeColor();
// changeHatColor('yellow');
// changeSweaterColor('red');

//==================================================

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     // operation(value);
//     counter.increment(10);
// };

// updateCounter(10, counter.increment); // this undefined
// updateCounter(10, counter.increment.bind(counter)); // this counter
// updateCounter(5, counter.decrement); // this undefined
// updateCounter(5, counter.decrement.bind(counter)); // this counter
// console.log(updateCounter);

//====================================================

// const counter = {
//         value: 0,
//         increment() {
//             console.log('increment -> this', this);
//             this.value += 1;
//         },
//         decrement() {
//             console.log('decrement -> this', this);
//             this.value -= 1;
//         },
//     };

// const decrementBtn = document.querySelector('.js-decrement');    
// const incrementtBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementtBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function () {
//     console.log('Click on decrementBtn');

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementtBtn.addEventListener('click', function () {
//     console.log('Click on incrementtBtn');

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

//======== Прототіпичне наслідування =============
//================================================

// const objC = {
//     z: 5,
// };

// // console.log(objC.hasOwnProperty('z'));

// const objB = Object.create(objC);
// objB.y = 2;

// // console.log(objC);

// // console.log(objB);

// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);
// console.log('objA', objA);
// console.log(objA.hasOwnProperty('z'));
// console.log(objA.hasOwnProperty('y'));
// console.log(objA.hasOwnProperty('x'));

// =========================================

// // const dummyObj = {
// //     message: 'Its own property of object'
// // };

// const dummyObj = Object.create({message: 'Its property of object prototipe'});
// dummyObj.message = 'Its own property of object';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);


//=== Основи ООП: клас, екземпляр (об'єкт), інтерфейс

// функції-конструктори
// - Іменовання
// - Оператор new
// - Властивість function.prototype

const Car = function ({ brand, model, price } = {}) {
    // console.log(config);
    // const {brand, model, price} = config;
    // Функція визивається у контексті створеного об'єкту
    // т.е. в this записується ссилка на нього
    // console.log(this);
    this.brand = brand;
    this.model = model;
    this.price = price;

    // ссилка на об'єкт повертається на місце виклику new Car
};

// Якщо функція визивається через new то створюється новий об'єкт
const myCar = new Car({
    brand: 'Audi', 
    model: 'Q3', 
    price: 35000,
});
console.log(myCar);

const myCar2 = new Car({
    brand: 'BMW',
    model: 'x6',
    price: 50000,
});
console.log(myCar2);

const myCar3 = new Car({
    brand: 'Audi',
    model: 'A6',
    price: 65000,
});
console.log(myCar3);
