//============= Контекст (this) ==============
//============================================

// - Де та як була об'явлена функція НЕ МАЄ ЖОДНОГО ЗНАЧЕННЯ!
// - Контекст визначається В МОМЕНТ ВИЗОВУ ФУНКЦІЇ, якщо він не прив'язан явно

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

// const obj = {
//     name: 'USER',
//     myTHIS: this,
//     custom: {
//         inCustom : 'Hello from custom',
//         foo() {
//             console.log(this);
//         }
//     }
// }

// obj.custom.foo();

// ======================================

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log('this: ', this);
//   },
// };

// // obj.sayHello(); // this obj

// function fn(callback) {
//   callback();
// }

// fn(obj.sayHello); // this undefined

// const sayHelloCopy = obj.sayHello;

// sayHelloCopy(); // this undefined

// const peter = { name: 'Peter', age: 20 };
// const chris = { name: 'Chris', age: 30 };

// copy.call(obj); // this obj
// copy.call(peter); // this peter

// const bindedFn = copy.bind(chris);

// bindedFn();

//=====================================

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log('this: ', this);
//   },

//   sayBye: () => {
//     console.log(this);
//   },
// };

// obj.sayHello();
// obj.sayBye();

// const fn = () => {
//   console.log(this);
// };

// fn(); // this undefined

//========================================

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     // console.log('this: ', this);
//     const arrowFn = () => console.log('this: ', this);

//     return arrowFn;
//   },

//   //   sayBye: () => {
//   //     console.log(this);
//   //   },
// };

// const fn = obj.sayHello();

// fn(); // this = obj

//========================================

// const obj = {
//   name: 'Bobby',
//   age: 15,
//   fnClassic() {
//     console.log('this: ', this);

//     function fn2Classic() {
//       console.log('this2: ', this);
//     }
//     return fn2Classic;
//   },

//   fnArrow() {
//     console.log('this Arrow: ', this);

//     const fn2Arrow = () => {
//       console.log('this2 Arrow: ', this);
//     };
//     return fn2Arrow;
//   },
// };

// obj.fnClassic(); // this obj
// const fn2Copy = obj.fnClassic();
// fn2Copy(); // this undefined

// obj.fnArrow(); // this obj
// const fn2ArrowCopy = obj.fnArrow();
// fn2ArrowCopy(); // this obj

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

//=================================
// 1. Завжди дивимось тип функціїї
// 2. function declaration or expresion визначають this тим хто викликав функцію
// 3. arrow бере батьківський this (але this може мати лише функцію)

// const obj = {
//   name: 'USER',
//   myTHIS: this,
//   arrow: () => {
//     console.log(this);
//     },

//   customArrow: {
//     inCustomArrow: 'Hello from custom arrow',
//     arrow: () => {
//       console.log(this);
//     },
//   },
//   customForArrow: {
//     inCustom: 'Hello from custom for arrow',
//     foo() {
//       console.log('declaration: ', this);

//       const arrow = () => {
//         console.log('in arrow function: ', this);
//       };

//       arrow();
//     },
//   },
// };

// obj.customForArrow.foo();
// obj.arrow();
// obj.customArrow.arrow();

//=== Виклик без контексту, але об'явлена як метод об'єкта ===
//============================================================

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
//===============================================

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

//=============== bind ===============
//====================================

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// function sayHello() {
//   console.log(this);
// }

// function myBind(callback, context) {
//   return function () {
//     callback.call(context);
//   };
// }

// sayHello.call(obj);
// const sayHelloCopy = sayHello.bind(obj);
// sayHelloCopy();

// const sayHelloCopy2 = myBind(sayHello, obj);
// sayHelloCopy2();

//=============================================
//======== Майстерня коштовностей =============

//Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(({ name }) => name === stoneName);

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

//===================================================
//============== Телефонна книга ====================

//Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);

//=================================
//========== Калькулятор ==========
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     const { a = 0, b = 0 } = this;

//     return this.a + this.b;
//   },

//   muil() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);

// calculator.read(10, 2);
// console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.mult());

//=================================
//======== constructor ============

// function Human(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const bobby = new Human('bobby', 25);
// const peter = new Human('peter', 25);
// const chris = new Human('chris', 25);

// console.log(bobby);
// console.log(peter);
// console.log(chris);

//=================================
//========== prototype ============
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const bobby = new Human('bobby', 25);
// const peter = new Human('peter', 25);
// const chris = new Human('chris', 25);

// console.log(bobby);
// console.log(peter);
// console.log(chris);

//====================================
// class Human {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Doctor extends Human {
//   constructor({ profession, ...rest }) {
//     super(rest);

//     this.profession = profession;
//   }
// }

// const house = new Doctor({
//   name: 'dr.House',
//   age: 50,
//   profession: 'therapist',
// });

// console.log(house)ж

//==========================================
//=========== call, apply, bind ============

// const user = {
//   name: 'Artem',
//   city: 'lviv',
//   sayHello(year, language) {
//     console.log(`Hello! My name is ${this.name} from ${this.city}.
//     I'm ${year}, I study ${language}`);
//   },
// };

// // user.sayHello(28, 'html');

// // const den = {
// //     name: 'Den',
// //     city: 'Odesa',
// // };

// // const kate = {
// //     name: 'Kate',
// //     city: 'Kiev',
// // };

// const alex = {
//     name: 'Alex',
//     city: "Kyiv",
// };

// // const args = [18, 'css'];

// // user.sayHello.call(den, 22, 'js');
// // // user.sayHello.apply(kate,[18, 'css']);
// // user.sayHello.apply(kate, args);
// user.sayHello.bind(alex);

// const alexsay = user.sayHello.bind(alex);
// alexsay(33, 'react.js');
// alexsay(34, 'node.js');
// // console.log(alexsay);

//==============================================
// Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Sapphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
        // const stone = this.stones.find(({name}) => name === stoneName);
        // // варіант без деструктурізації:
        // // const stone = this.stones.find(item => item.name === stoneName);
          
//         // if (stone) {
//         //     return stone.price * stone.quantity
//         // }
//         // return 'ERROR'
//         // ще варіант:
//         return stone ? stone.price * stone.quantity : 'ERROR';
//     },
//   };
  
//   console.log(chopShop.calcTotalPrice('Emerald')); // 5200
//   console.log(chopShop.calcTotalPrice('Diamond')); // 8100
//   console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
//   console.log(chopShop.calcTotalPrice('Ruby')); // 1600
//   console.log(chopShop.calcTotalPrice('quartz')); // ERROR

//====================================================
// Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//     contacts: [],
//     add(contact) {
//       const newContact = {
//         list: 'default',
//         ...contact,
//         id: this.generateId(),
//         createdAt: this.getDate(),
//       };
//       this.contacts.push(newContact);
//     },

//     generateId() {
//       return '_' + Math.random().toString(36).substr(2, 9);
//     },

//     getDate() {
//       return new Date();
//     },
//   };
  
// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// console.log(phonebook);


//   console.log(
//     phonebook.add({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     }),
//   );

//===================================
// Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//     a: 0,
//     b: 0,

//     read (a, b) {
//         this.a = a || 0; // лог оператор або: 0, NaN, null, undefined, '', false
//         this.b = b ?? 0; // оператор нульового поєднання: null, undefined
//     },

//     add () {
//         return this.a + this.b
//     },

//     mult () {
//         return this.a * this.b
//     }
// };

// // calculator.read(22, 11);
// // // calculator.read();
// // console.log(calculator.add());
// // console.log(calculator.mult());

// const calc = {
//     a: 24,
//     b: 100,
// }

// console.log(calculator.add.call(calc));

//========================================
//====== Прототипичне наслідування =======

// const parent = {
//     name: 'parent',
//     sayHello () {
//         console.log(`Hello I'm ${this.name}`);
//     }
// };

// const obj = Object.create(parent);
// obj.name = 'Artem';
// console.log(obj);
// console.log(obj.sayHello());

// const user = Object.create(obj);
// user.sayHello();

//============ статичні властивості та методи ==============
// class User {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1;
//         console.log(this.counter);
//     }
//     #email;
//     constructor(name, password, email) {
//         this.#email = email;
//         this.name = name;
//         this.password = password;
//         User.addUser();
//     }
//     sayHallo () {
//         console.log(`Hello I'm ${this.name}`);
//     }

//     // приватний метод:
//     #checkEmail(value) {
//         const response = value.includes('@') && value.includes('.') && value.length > 10;

//         return response;
//     }

//     // // getter
//     // get emailValue() {
//     //     console.log(this.#email);
//     // }

//     // // setter:
//     // set emailValue(newValue) {
//     //     if(newValue.includes('@') && newValue.includes('.') && newValue.length > 10) {
//     //         this.#email = newValue
//     //     }else{
//     //         alert('invalid email')
//     //     }
//     // }
//     set emailValue(newValue) {
//             if(this.#checkEmail(newValue)) {
//                 this.#email = newValue
//             }else{
//                 alert('invalid email')
//             }
//         }
// };

// const artem = new User('Artem', 'querty', 'test@mail.com');


// class Admin extends User {
//     constructor(name, password, email, secretPassword) {
//         super(name, password, email);
//         this.secretPassword = secretPassword;
//     }
//     deleteUser(email) {
//         console.log(email);
//     }
// };

// const dima = new Admin('Dima', '11111', 'test@gmail.com', 'querty123');
// console.log(dima);
// console.log(dima.sayHallo());

// // artem.emailValue;
// // // artem.emailValue = '1234';
// // artem.emailValue = '123fvlekfnvdkmc@com.4';

// // // console.log(artem.sayHallo());
// // console.log(artem);
// // console.log(dima);

// ========================================
// Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new User({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });
// console.log(mango); 
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
  
//   const poly = new User({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });

// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ==============================================
// Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(arr) {
//         this.items = arr;
//     }
//     // getItems() {
//     //     return this.items;
//     // }
//     get productItems() {
//         return this.items;
//     }

//     set productItems(item) {
//         if(!this.items.includes(item)) {
//             this.items.push(item)
//         }       
//     }

//     removeItem(item) {
//         // if(!this.items.includes(item)) {
//         //     const idx = this.items.indexOf(item);
//         //     this.items.splice(idx, 1);
//         //     console.log(idx);
//         // }
//         const idx = this.items.indexOf(item);
//         //як працює перевшрка за допомогою оператора Bitwise_Not (~) / -(x + 1):
            // console.log(!!1);
            // console.log(!!-1);
            // console.log(!!0);
            // console.log(!!~0); 
//         // console.log(~0);
//         // console.log(~-1);
//         // console.log(!!~1);
//         // -(idx + 1) === ~idx
//         if(!!~idx) {
//             this.items.splice(idx, 1);
//             console.log(idx);
//         }
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.productItems;
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.productItems = '🍌';
// console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

//=========================================
// User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//     #login;
//     #email;
//     constructor({email, login} = {}) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(value) {
//         this.#email = value;
//     }

//     get login() {
//         return this.#login;
//     }
    
//     set login(value) {
//         this.#login = value;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
  
// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
  
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

//======================================
// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }
//     constructor(arr) {
//         this.items = arr;

//     }

//     addNote(note) {

//     }


// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

//=======================================
//========= Ще раз ЗАМИКАННЯ ============

// function foo(param) {
//     const value = 10;
//     const value2 = 15;

//     function boo() {
//         return value + value2 * 12;
//     }

//     if (param > 20) {
//         return boo
//     } else {
//         return value;
//     }
// };
// console.log(foo(10));
// console.log(foo(25)());

//=========================================
//=========================================

// class Human {
//     #age = 0;
//     constructor(name, age) {
//         this.name = name;
//         this.#age = age;
//     }

//     get age() {
//         return this.#age;
//     }

//     set age(newAge) {
//         this.#age = newAge;
//     }
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby)

//=============== account ================

// class Account {
//     #balance = 0;
//     constructor(balance) {
//         this.#balance = balance;
//     }

//     get balance() {
//         return this.#balance;
//     }

//     set balance(newBalance) {
//         if (newBalance < 0) return;
//         this.#balance = newBalance;
//     }
// }

// const deposit = new Account(1000);
// console.log(deposit.balance);

// deposit.balance = 500;
// console.log(deposit.balance);

// deposit.balance = -100;
// console.log(deposit.balance);

//============ prototype =============

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHallo() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// class Doctor extends Human {
//     sayHallo() {
//         console.log(`Hello, my name is ${this.name}. I can heal`);
//     }

//     heal() {
//         console.log('I can heal');
//     }
// }

// const bobby = new Human('Bobby', 15);
// const house = new Doctor('dr.House', 50);

// console.log(bobby);
// console.log(house);
// house.sayHallo();

//========== ЗАМИКАННЯ =================

// function Counter(x) {
//     return function() {
//         console.log(x++);
//     };
// }

// const counter1 = new Counter(10);
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();


//======================================
//============= Блогер =================

// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new User({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
//   mango.updatePostCount(5);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
  
//   const poly = new User({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
//   poly.updatePostCount(4);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts


//=======================================
//======== Example 2 - Сховище ==========

// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних. 

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(name) {
//         this.items = this.items.filter(item => item !== name);
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]


//====================================
//======== Example 3 - User ==========

// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//     #email;
//     #login;

//     constructor({ login, email }) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(value) {
//         this.#login = value;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
//   });
  
//   console.log(mango.login); // Mango
//   mango.login = 'Mangodoge';
//   console.log(mango.login); // Mangodoge
  
//   const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });
  
//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie


//=========================================
//========= Example 4 - Нотатки ===========

// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };

//     constructor(items = []) {
//         this.items = items;
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     removeNote(text) {
//         this.items = this.items.filter((item) => item.text !== text);
//     }

//     updateNote(text, priority) {
//         this.items = this.items.map(item => item.text === text ? {
//             ...item,
//             priority,
//         } : item);
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);


//===================================
//======= Example 5 - Toggle ========

// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

class Toggle {
    constructor({ isOpen = false } = {}) {
        this.on = isOpen;
    }

    toggle() {
        // this.on = this.on ? false : true;
        // теж саме:
        this.on = !this.on;
    }
}

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');