// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

// добавляет поле mood со значением 'happy'
user.mood = 'happy';  

// заменяет значение hobby на 'skydiving'
user.hobby = 'skydiving';

// заменяет значение premium на false
user.premium = false;

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// var 1
const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
};

// var 2
for (const item of Object.entries(user)) {
    console.log(`${item[0]}: ${item[1]}`);
};

// var 3
for (const key in user) {
    console.log(key);
}

console.log(user);