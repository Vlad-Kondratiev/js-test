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

const playlist = {
  name: 'My Playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  trackCount: 5,

  //   // олдскульная запись:
  //   getName: function () {
  //     console.log('Ага, это getName');
  //   },
  // современный синтаксис:
  getName() {
    console.log('Ага, это getName');
  },
};

console.log(playlist);

playlist.getName();
