// const playlist = {
//   name: 'My Playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   trackCount: 5,
// };

// console.log(playlist);

// Литерал всегда справа от равно
// // литерал - когда объявляется переменная и записывается туда значение:
// const x = {};

// // когда передаем аргумент в функцию:
// const fn = function (myObject) {
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });

// // когда возвращаем из функции сам литерал объекта:
// const rtfm = function () {
//   return { a: 5 };
// };
// console.log(rtfm());

// В остальных случаях это область видимости

// const playlist = {
//   name: 'My Playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   trackCount: 5,
// };

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

// console.log(playlist.propertyName);

// Де записи ниже полностью идентичны
// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// ======== Короткая запись свойств =======
// ========================================

// const username = 'Mango';
// const email = 'mangomail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// ========= Вычисляемые свойствf =========
// ========================================

// <input name='color' value='tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// ============ ссылочный тип =============
// ========================================

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.c = 100;

// console.log(a);
// console.log(b);

// ==== Массивы и функции это объекты =====
// ========================================

// const a = [1, 2, 3];

// a.hello = ';)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn);

// ============ Методы объекта ============
// ========================================

// const playlist = {
//   name: 'My Playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   trackCount: 5,

//   //   // олдскульная запись:
//   //   getName: function () {
//   //     console.log('Ага, это getName');
//   //   },
//   // современный синтаксис:
//   getName() {
//     console.log('Ага, это getName');
//   },
// };

// console.log(playlist);

// playlist.getName();

// ========================================

// const playlist = {
//   name: 'My Playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   trackCount: 5,
//   changeName(newName) {
//     console.log('this inside changeName: ', this);

//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };

// playlist.changeName('New Name');

// playlist.addTrack('New Track');
// playlist.addTrack('New Track 2');
// playlist.addTrack('New Track 3');

// playlist.updateRating(6);
// console.log(playlist);

// ===============================

// const playlist = {
//   name: 'My Playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   changeName(newName) {
//     console.log('this inside changeName: ', this);

//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('New Name');

// playlist.addTrack('New Track');
// console.log(playlist.getTrackCount());
// playlist.addTrack('New Track 2');
// console.log(playlist.getTrackCount());
// playlist.addTrack('New Track 3');
// console.log(playlist.getTrackCount());

// playlist.updateRating(6);
// console.log(playlist);

// ============ ИТЕРАЦИЯ по КЛЮЧАМ =======================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// ================ ИТЕРАЦИЯ по ЗНАЧЕНИЯМ ==================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

// ============= РАБОТА с КОЛЛЕКЦИЕЙ =================
// =============== Массив объектов ===================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);

//   friend.newProp = 555;
// }

// console.table(friends);

// ============ Ищем друга по имени ================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// const findFriendByName = function (allFriends, friendname) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === friendname) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// ============== Получить имена всех друзей ===============

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     names.push(friend.name);
//   }

//   // console.log(names);
//   return names;
// };

// =============== Получить имена друзей онлайн ================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// =============== Получить имена друзей офлайн ================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// =============================================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//   const FriendsStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.online) {
//       FriendsStatus.online.push(friend);
//       continue;
//     }
//     FriendsStatus.offline.push(friend);
//   }

//   return FriendsStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// ================= Узнать кол-во свойств в объекте =================

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).length);

// ================== ОПЕРАЦИЯ spread (распыление) ====================

// const numbers = [1, 2, 3].concat([4, 5, 6, 7], [8, 9, 10]);
// console.log(numbers);

// const numbers = [0, 10, 20, ...[1, 2, 3, 777], 4, 5];
// console.log(numbers);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers);

// ====== Поиск самой маленькой и самой большой температуры =======

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));

// // передача по значению (примитивы) ====================
// const a = [1, 2, 3]; // array а = [1, 2, 3]
// const b = [...a]; // создается копия массива a - array b = [1, 2, 3]

// console.log(a);
// console.log(b);

// // если массив включает в себя объекты (сложные типы), то создается ссылки на оригинальный объект
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); // равно - потаму что сравниваются ссылки на один и тот же объект
// console.log(a === b); // не равно - потаму что это разные ячейки памяти

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

// ==== Сшиваем несколько массивов в один с помощью spread ====

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// ==================== Распыление объектов ====================

// const a = { x: 1, d: 'name: Mango', y: 2 };
// const b = { x: 0, z: 3 };

// // // старий способ:
// // const c = Object.assign({}, a, b);
// // // или:
// // const c = {};
// // Object.assign( c, a, b);

// // современний варіант:
// const c = {
//   ...a,
//   ...b,
// };

// console.log(c);

// ==========================

// const defaultSettings = {
//   theme: 'light',
//   shoNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   shoNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// =================== Деструктеризація об'екта ==================

const playlist = {
  name: 'My Playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  trackCount: 5,
};

// // олдскульный вариант:
// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);

// современная запись операции деструктеризации

const { rating, tracks, name, trackCount } = playlist;

console.log(name, rating, tracks, trackCount);
