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

const obj = {
    name: 'USER',
    myTHIS: this,
    custom: {
        inCustom : 'Hello from custom',
        foo() {
            console.log(this);
        }
    }
}

obj.custom.foo();

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


//======= Основи ООП: клас, екземпляр (об'єкт), інтерфейс ========
//================================================================

// функції-конструктори
// - Іменовання
// - Оператор new
// - Властивість function.prototype

// const Car = function ({ brand, model, price } = {}) {
//     // console.log(config);
//     // const {brand, model, price} = config;
//     // Функція визивається у контексті створеного об'єкту
//     // т.е. в this записується ссилка на нього
//     // console.log(this);
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     // ссилка на об'єкт повертається на місце виклику new Car
// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// console.log(Car.prototype);

// // Якщо функція визивається через new то створюється новий об'єкт
// const myCar = new Car({
//     brand: 'Audi', 
//     model: 'Q3', 
//     price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(11111);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'x6',
//     price: 50000,
// });
// console.log(myCar2);

// myCar2.sayHi();
// myCar2.changePrice(55555);

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 65000,
// });
// console.log(myCar3);

// myCar3.sayHi();
// myCar3.changePrice(66666);

//=================================================

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({ email: 'mango@gmail', password: 11111111 });

// mango.changeEmail('my-new-mail@mail.com');

// console.log(mango);

// 1. У кожного об'єкту є властивість __proto__
// 2. В цієй властивості лежить ссилка на його прототип, тобто інший об'єкт
// 3. При створенні літералу об'єкта, у властивості __proto__ записується ссилка на функція.prototype
// 4. функція-конструктор - це просто функція
// 5. Всю магію робить оператор new
// 6. Якщо функція визивається через new створюється порожній об'єкт
// 7. Функція визивається у контексті створеного об'єкту
// 8. У властивість this.__proto__ записується ссилка на об'єкт функція.prototype
// 9. Ссилка на об'єкт повертається в місце виклику new функція()

//======= Статичні властивості і методи =============
//===================================================

// Статичні властивості і методи доступні тільки в самому конструкторі
// У статичних методах немає this

// console.log(Math.round(5.1));
// console.log(Math.PI);

//===================== Класи ========================
//====================================================

// class Car1 {
//     static description = 'Клас описуючий авто';

//     static logInfo (carObj) {
//         console.log('car.logInfo -> carObj', carObj);
//     }

//     constructor ({ brand, model, price } = {}) {
//         console.log('Виконується конструктор');
//         console.log(this);
//         this.a = 5;
//         this.b = 10;

//         this.brand = brand;
//         this._model = model;
//         this._price = price;       
//     }

//     // changePrice (newPrice) {
//     //     this.price = newPrice;
//     // }

//     get price () {
//         return this._price;
//     }

//     set price (newPrice) {
//         this._price = newPrice;
//     }

//     updateModel (newModel) {
//         this.model = newModel;
//     }
// // setter
//     set model(newModel) {
//         this._model = newModel;
//     }

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }
// // getter
//     get model() {
//         return this._model;
//     }

//     // getModel () {
//     //     return this.model;
//     // }
// }

// console.dir(Car1);

// console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi', 
//     model: 'Q3', 
//     price: 35000,
// });

// // Car1.logInfo(carInstance);

// // console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

// console.log(carInstance);

// console.log(carInstance.model);

// carInstance.model = 'Q4';

// console.log(carInstance.model);

// console.log(carInstance.price); // визов getter

// carInstance.price = 55555;

// console.log(carInstance.price);

// // console.log(carInstance.getModel());

// // carInstance.setModel('Q3');

// // console.log(carInstance.getModel());

// const obj = {
//     a: 100,
//     get a() {
//         return this._a;
//     },
//     set a(x) {
//         this._a = x;
//     }
// };

// console.log(obj);

//=============== Наслідування ===============
//============================================

// class Hero {
//     constructor({ name = 'Hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} отримує ${amount} досвіду`)
//         this.xp += amount;
//     }   
// }

// // const mango = new Hero({ name: 'mango', xp: 1000});

// // console.log(mango);

// // mango.gainXp(1000);
// class Warrior extends Hero {
//     constructor({weapon, ...restProps } = {}) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакує використовуючи ${this.weapon}`)
//     }
// }

// class Berserk extends Warrior {
//     constructor({warcry, ...restProps} = {}) {
//         super(restProps);

//         this.warcry = warcry;
//     }

//     babyRage() {
//         console.log(this.warcry);
//     }
// }

// const ajax = new Berserk({
//     name: 'ajax', 
//     xp: 500, 
//     weapon: 'axe', 
//     warcry: 'waaaa'
// });

// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

// class Mage extends Hero {
//     constructor({ spells, ...restProps } = {}) {
//         super(restProps);

//         this.spells = spells;
//     }

//     cast() {
//         console.log();
//         console.log(`${this.name} шось там кастує`);
//     }
// }

// const mango = new Warrior({name: 'mango', xp: 1000, weapon: 'меч'});
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({name: 'poly', xp: 500, spells: ['fireball']});
// console.log(poly);
// poly.cast();
// poly.gainXp(200);
// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );

// console.log(
//     'Warrior.__proto__ === Hero.prototype ',
//     Warrior.__proto__ === Hero.prototype
// );

// console.log(
//     'Hero.__proto__ === Object.prototype ',
//     Hero.__proto__ === Object.prototype
// );

// mango.gainXp(1000);

// console.log(mango.__proto__ === Warrior.prototype);

// console.log('Warrior.prototype', Warrior.prototype);

// console.log(Warrior.prototype.__proto__ === Hero.prototype);
