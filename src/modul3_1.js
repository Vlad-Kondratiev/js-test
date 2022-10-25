// =========== Example 1 - Основы обьектов =================

// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

// // добавляет поле mood со значением 'happy'
// user.mood = 'happy';  

// // заменяет значение hobby на 'skydiving'
// user.hobby = 'skydiving';

// // заменяет значение premium на false
// user.premium = false;

// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// // var 1
// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// };

// // var 2
// for (const item of Object.entries(user)) {
//     console.log(`${item[0]}: ${item[1]}`);
// };

// // var 3
// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// console.log(user);


//  ====================== for .... in ======================


// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';
// // dog.legs = 5;

// // all keys
// for (const key in dog) {
//     console.log(key);
// }

// // only own keys
// for (const key of Object.keys(dog)) {
//     console.log(key);
// }

// console.log(dog);

// ================ Example 2 - метод Object.values() ===================

// // У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// function getSalariesSum(salaries = {}) {
//     let sum = 0; 

//     for (const salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// console.log(
//     getSalariesSum({
//         John: 100,
//         Ann: 160,
//         Pete: 130,
//     })
// );

// console.log(getSalariesSum({}));
// console.log(getSalariesSum());


// ================== Example 3 - Массив объектов ======================
// // Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция // считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// function calcTotalPrice(stones, stoneName) {
//     // let totalPrice = 0;

//     for (const item of stones) {
//         // const name = item.name;
//         // const price = item.price;
//         // const quantity = item.quantity; 

//         if (item.name === stoneName) {
//             // totalPrice = item.price * item.quantity;
//             return item.price * item.quantity;
//         }
//         // console.log(item);
//     }
//     return 0;
// }

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Ajax'));

// ============= Example 4 - Комплексные задачи ================
// // Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

//   /*
//    * Типов транзацкий всего два.
//    * Можно положить либо снять деньги со счета.
//    */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
  
//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */
  
// const account = {
//     // Текущий баланс счета
//   balance: 0,
  
//     // История транзакций
//   transactions: [],
  
//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//   createTransaction(amount, type) {
//     return {
//         id: this.transactions.length,
//         amount, // amount: amount,
//         type, // type: type,
//         date: Date.now(),
//     };
//   },
  
//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//   deposit(amount) {
//     this.balance += amount;

//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(newTransaction);
//   },
  
//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//   withdraw(amount) {
//     if (amount <= this.balance) {
//         this.balance -= amount;

//         const newTransaction = this.createTransaction(
//             amount, 
//             Transaction.WITHDRAW
//         );

//         this.transactions.push(newTransaction);
//     } else {
//         console.log('no money');
//     }
    
//   },
  
  
//     /*
//      * Метод возвращает текущий баланс
//      */
//   getBalance() {
//     return this.balance;
//   },
  
//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//         if (item.id === id) {
//             return item;
//         }
//     }
//   },
  
//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const item of this.transactions) {
//         if (item.type === type) {
//             sum += item.amount;
//         }
//     }

//     return sum;
//   },
// };

// console.log(account);
// console.log(account.balance);
// account.deposit(100);
// account.deposit(50);
// console.log(account.balance);

// account.withdraw(140);
// account.withdraw(50);
// console.log(account.balance);

// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(20));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


//  ========================= GAME ==========================
// ======================= Угадай число =====================
// const x = Math.floor(Math.random() * 100) + 1;
// let userInput;
// console.log(x);

// do {
//     userInput = Number(prompt('Enter your number'));
//     // console.log('userInput: ', userInput);

//     if (userInput > x) {
//         console.log(`${userInput} > x`);
//     }
//     if (userInput < x) { 
//         console.log(`${userInput} < x`);
//     }
// } while (userInput !== x);

// console.log('Yes!!!');

// ======================================================

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;
  
//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
  
//   const secondBook = {
//     title: "Сон смешного человека",
//   };
  
//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;
  
//   console.log(secondTitle); // Сон смешного человека
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480


// ========== Сложние і простие обїекти =================

// // Простий об'єкт
// const obj = {
//     name: 'Bobby',
//     age: 25,
// };

// const objCopy = {
//     ...obj,
// };

// objCopy.car.color = 'red';
// console.log('car color: ', obj.car);

// // Складний об'єкт
// const obj = {
//     name: 'Bobby',
//     age: 20,
//     car: {
//         model: 'Ford',
//         color: 'black',
//     },
// };

// const objCopy = {
//     ...obj,
//     car: {
//         ...obj.car,
//     },
// };

// objCopy.car.color = 'green';

// console.log('car color: ', obj.car);
// console.log('car color: ', objCopy.car);


// ===========================================================

// function foo({ userName } = {}) {

//     console.log(userName);
// }

// foo();

// ==== Модуль 3 Занятие 6. Деструктуризация и rest/spread ====
// ================= Example 1 - Деструктуризация =============
// Перепиши функцию так, чтобы она принимала один объект параметров, 
// вместо набора независимых аргументов.

// function calcBMI({weight, height}) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
//   }
  
//   // Было
//   // console.log(calcBMI('88,3', '1.75'));
//   // console.log(calcBMI('68,3', '1.65'));
//   // console.log(calcBMI('118,3', '1.95'));
  
//   // Ожидается
//   console.log(
//     calcBMI({
//       weight: '88,3',
//       height: '1.75',
//     }),
//   );
//   console.log(
//     calcBMI({
//       weight: '68,3',
//       height: '1.65',
//     }),
//   );
//   console.log(
//     calcBMI({
//       weight: '118,3',
//       height: '1.95',
//     }),
//   );


// ============== Example 2 - Деструктуризация ===================
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }
  
//   // Было
//   // printContactsInfo(
//   //   'Jacob,William,Solomon,Artemis',
//   //   '89001234567,89001112233,890055566377,890055566300',
//   // );
  
//   // Ожидается
//   printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
//   });

// ============== Example 3 - Глубокая деструктуризация ==============
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function getBotReport({ 
//     companyName, 
//     bots: { repair: repairBots, defence: defenceBots },
// }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
  
//   // Было
//   // console.log(getBotReport('Cyberdyne Systems', 150, 50));
  
//   // Ожидается
//   console.log(
//     getBotReport({
//       companyName: 'Cyberdyne Systems',
//       bots: {
//         repair: 150,
//         defence: 50,
//       },
//     }),
//   ); // "Cyberdyne Systems has 200 bots in stock"


// =============== Example 4 - Деструктуризация =================
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.

// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//       total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
//   }
  
//   console.log(
//     getStockReport({
//       companyName: 'Cyberdyne Systems',
//       stock: {
//         repairBots: 150,
//         defenceBots: 50,
//       },
//     }),
//   ); // "Cyberdyne Systems has 200 items in stock"
  
//   console.log(
//     getStockReport({
//       companyName: 'Belacci',
//       stock: {
//         shoes: 20,
//         skirts: 10,
//         hats: 5,
//       },
//     }),
//   ); // "Belacci has 35 item in stock"


// ================ Example 5 - Операция spread =================
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

// function createContact(partialContact) {
//     // // var 1
//     // return {
//     //   list: 'default',
//     //   ...partialContact,
//     //   id: generateId(),
//     //   createdAt: Date.now(),
//     // };

//     // var 2
//     return {
//         id: new Date(),
//         createdAt: Date.now(),
//         ...partialContact,
//         list: partialContact.list || 'default'
//     };
//   }

//   // var 3
//   function createContact({list = 'default', ...partialContact}) {
//     return {
//         list,
//         id: new Date(),
//         createdAt: Date.now(),
//         ...partialContact,
//     };
//   }
  
//   console.log(
//     createContact({
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     }),
//   );
//   console.log(
//     createContact({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     }),
//   );


// ============== Example 6 - Операция rest ==============
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// function transformUsername({ firstName, lastName, ...otherProps }) {
//     return {
//       fullName: `${firstName} ${lastName}`,
//       ...otherProps,
//     };
//   }
  
//   console.log(
//     transformUsername({
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     }),
//   );
  
//   console.log(
//     transformUsername({
//       id: 2,
//       firstName: 'Adrian',
//       lastName: 'Cross',
//       email: 'a.cross@hotmail.com',
//       friendCount: 20,
//     }),
//   );

// ===============================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = ["descr", "rating", "price"];
//   const values = ["Spacious apartment in the city center", 4, 2153];
  
//   for (const key in apartment){
//     console.log(key);
//     console.log(apartment[key]);
//   }

// =================================

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);  
//   }
// }
// console.log("own properies = " + keys);
// console.log(values);

//====================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//   }

//====================================

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);  
//   }
// }
// console.log('own properies = ' + keys);
// console.log(apartment);
// console.log(keys);
// console.log(values);
// console.log(advert);

//=======================================

// function countProps(object) {
//     let propCount = 0;

//   for (const key in object){
//     if (object.hasOwnProperty(key)){
//       propCount += 1;
//     }
//   }
//     // return propCount;
//     console.log(propCount);
//   }
  
  
//   countProps({});
//   countProps({ name: "Mango", age: 2 });
//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

//======================================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const values = [];

//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }

//   console.log(apartment[0]);

//======================================

// function countProps(object) {
//     return Object.keys(object).length;
//   }
  
//   countProps({});
//   countProps({ name: "Mango", age: 2 });
//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

//======================================  

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);

//=======================================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   // Change code below this line
// const values = Object.values(salaries);
//   for (const value of values){
//     totalSalary += value
//   }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

//======================================

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

//=======================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
  
//     for (const product of products) {
//       if (product.name === productName)
//         return product.price;
//     }
//     return null;

//   }
  
//   getProductPrice("Radar");
//   getProductPrice("Grip");
//   getProductPrice("Scanner");
//   getProductPrice("Droid");
//   getProductPrice("Engine");
//   console.log(getProductPrice);
//   console.log(products);

  //================ 19 ======================

//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 }
//   ];
  
//   function getAllPropValues(propName) {
//     // создаем итоговый массив для значений:
//     let values = [];
//     // перебираем каждый объект из массива:
//     for (const product of products) {
//         // извлекаем ключи взятого объекта:
//         const keys = Object.keys(product);
//         // перебираем его ключи:
//         for (const key of keys) { 
//             // если переданное имя ключа совпало с текущим:
//             if (propName === key) {
//                 // то добавили его значение в итоговый массив:
//                 values.push(product[key]);
//                 break;
//         }
//       }
//     }
//     // вернули из функции массив:
//     return values; 
//   }
// // console.log(getAllPropValues("name"));
//   getAllPropValues("quantity");
//   getAllPropValues("price");
//   getAllPropValues("category");

//================= 20 =====================

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
  
  for (const product of products){
  let totalPrice = product.price * product.quantity;
    if (productName === product.name){
      return totalPrice; 
    }
  }
  return 0;
  }
  
  calculateTotalPrice("Blaster");
  calculateTotalPrice("Radar");
  calculateTotalPrice("Droid");
  calculateTotalPrice("Grip");
  calculateTotalPrice("Scanner");