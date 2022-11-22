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

const showThis = function (...args) {
    console.log(args);
    console.log('showThis -> this', this);
};

showThis();

const objA = {
    a: 5,
    d: 10,
};

showThis.call(objA, 10, 20, 30, 40, 50);





