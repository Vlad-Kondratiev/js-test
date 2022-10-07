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
