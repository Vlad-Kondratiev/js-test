//================= МОДУЛЬ 1 =======================
//==================== 1  ==========================

// const productName = "Droid";
// const pricePerItem = 2000;

//==================== 2  ==========================

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = 3500;

//==================== 3  ==========================

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

//==================== 4  ==========================

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

//==================== 5  ==========================

// const productName = 'Droid';
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//==================== 6  ==========================

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//==================== 7  ==========================

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }

// sayHi();

//==================== 8  ==========================

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//==================== 9  ==========================

// function add(a, b, c) {
//   return a + b + c;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//==================== 10 ==========================

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//==================== 11 ==========================

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

//==================== 12 ==========================

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   return `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   //console.log(message);

//   // Change code above this line
//   //return message;
//   // consol.log (`You ordered droids worth ${message} price credits Delivery ${deliveryFee} credits) is included in total price`);
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

//==================== 13 ==========================

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   console.log(passed);

//   // Change code above this line
//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// //==================== 14 ==========================

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }

// isValidPassword('mangodab3st');
// isValidPassword('kiwirul3z');
// isValidPassword('jqueryismyjam');

// //==================== 15 ==========================

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// //==================== 16 ==========================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available >= ordered) {
//     // Change this line
//     message = 'Order is processed, our manager will contact you.';
//   } else {
//     message = 'Not enough goods in stock!';
//   }

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// //==================== 17 ==========================

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// //==================== 18 ==========================

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// //==================== 19 ==========================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// //==================== 20 ==========================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     // Change this line
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     // Change this line
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// //==================== 21 ==========================

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// //==================== 22 ==========================

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = 'pro' === subType || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('starter');
// checkIfCanAccessContent('vip');
// checkIfCanAccessContent('free');

// //==================== 23 ==========================

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 76);

// //==================== 24 ==========================

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   // Change code above this line
//   return discount;
// }

//==================== 24 ==========================

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (price) {
//       case type === "starter"
//         price = 0;
//         break;

//       case type === "professional"
//         price = 20;
//         break;

//       case type === "organization"
//         price = 50;
//         break;
//     }
//     return price;
//   }

// ================== 25 ==================

// function checkStorage(available, ordered) {
//     let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//     return message;
//   }

//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);

// ================== 26 ==================

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//     return message;
//   }

//   checkPassword("jqueryismyjam");
//   checkPassword("angul4r1sl1f3");
//   checkPassword("r3actsux");

// ================== 27 ==================

//   function getSubscriptionPrice(type) {
//     let price;

//    switch (type) {
//       case "starter":
//         price = 0;
//         break;

//       case "professional":
//         price = 20;
//         break;

//       case "organization":
//         price = 50;
//         break;

//      default:
//        console.log("Invalid subscription type");
//     }
//     return price;
//   }

//   getSubscriptionPrice("professional");
//   getSubscriptionPrice("organization");
//   getSubscriptionPrice("starter");

// ================== 28 ==================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   switch (password) {
//     case null:
//       return 'Canceled by user!';
//       //   console.log('Canceled by user!');
//       break;

//     case ADMIN_PASSWORD:
//       return 'Welcome!';
//       break;

//     default:
//       return 'Access denied, wrong password!';
//   }
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// ================== 29 ==================

// function getShippingCost(country) {
//   let price;

//   switch (country) {
//     case 'Australia':
//       price = 170;
//       return `Shipping to ${country} will cost ${price} credits`;
//     //   break;

//     case 'China':
//       price = 100;
//       return `Shipping to ${country} will cost ${price} credits`;
//     //   break;

//     case 'Chile':
//       price = 250;
//       return `Shipping to ${country} will cost ${price} credits`;
//     //   break;

//     case 'Jamaica':
//       price = 120;
//       return `Shipping to ${country} will cost ${price} credits`;
//     //   break;

//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// getShippingCost('Australia');
// getShippingCost('Germany');
// getShippingCost('China');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');

// ================== 30 ==================

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     return message;
//   }

// ================== 31 ==================

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// ================== 32 ==================

// function getSubstring(string, length) {
//   const substring = string.slice(string, length);

//   return substring;
// }

// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

// ================== 33 ==================

// function formatMessage(message, maxLength) {
//   let result;
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';

//   return result;
// }
// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// ================== 34 ==================

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

// ================== 35 ==================

// function checkForName(fullName, name) {
//   const result = fullName.includes('Egor Kolbasov Vadim Nekrasov');
//   name.includes('Egor Vadim'); // Change this line
//   return result;
// }
// checkForName('Egor Kolbasov', 'Egor');
// checkForName('Egor Kolbasov', 'egor');
// checkForName('Egor Kolbasov', 'egOr');
// checkForName('Egor Kolbasov', 'Zhenya');
// checkForName('Vadim Nekrasov', 'Vadim');
// checkForName('Vadim Nekrasov', 'vadim');
// checkForName('Vadim Nekrasov', 'Dima');

// ================== 36 ==================

// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   result = message.includes('sale') || message.includes('spam');

//   return result;
// }
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');

// ========================================
