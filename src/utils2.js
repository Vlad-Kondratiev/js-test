// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// =============================================

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// ============== ОКРУГЛЕНИЕ ==================
// const value = 27.5;

// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(27.4)); // 27
// console.log(Math.round(27.5)); // 28

// const x = 3.1415;
// console.log(x.toFixed(2)); // 3.14

// ============= ШАБЛОННЫЕ СТРОКИ ==============

// const companyName = 'Cyberdyne Systems';
// const repaireBots = 150;
// const defenceBots = 50;
// const totalBots = repaireBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // 'Cyberdyne Systems has 200 bots in stock'

// ============================================
// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// // const bmi = weight / (height * height);
// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi);

// =========== 2-й вариант, чейнинп ===========

// const weight = Number.parseFloat('88,3'.replace(',', '.'));
// const height = Number.parseFloat('1.75'.replace(',', '.'));

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

// console.log(bmi);

// =============================================

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

//===============================================

// //Знач по умолчанию и оператор нулевого слияния
// //при incomingValue = undefined value = 0, при любом другом числовом значении value = этому числовому значению
// const incomingValue = 0;
// const defaultValue = 10;

// const value1 = incomingValue || defaultValue; // 10
// const value2 = incomingValue ?? defaultValue; // 0

// console.log(value1);
// console.log(value2);

//================================================
// // Оператор % и методы строк

// // 70 покажет 01:10
// // 450 покажет 07:30
// // 1441 покажет 24:01

// const totalMinutes = 65;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const dobleDigitHours = String(hours).padStart(2, 0);
// const dobleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(hours);
// console.log(minutes);

// console.log(`${dobleDigitHours}:${dobleDigitMinutes}`);

//================================================
// Ввод пользователя и ветвления
// Используя конструкции if....else и prompt, напиши код который спрашивает
// "Какое официальное название JavaScript?" Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно". В противном случае "Не знаете? ECMAScript"

// const userAnswer = prompt('Какое официальное название JavaScript?');

// вариант 1
// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Верно');
// } else {
//   console.log('Не знаете? ECMAScript');
// }

// // вариант 2
// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase() ? 'Верно' : 'Не знаете? ECMAScript'
// );

//===============================================
// Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде

// const hours = 14;
// const minutes = 24;
// let timeString;

// // вариант 1
// if (minutes > 0) {
//   timeString = `${hours} ч. ${minutes} мин.`;
// } else {
//   timeString = `${hours} ч.`;
// }
// console.log(timeString);

// // вариант 2
// console.log(minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`);

//====================================================
// Ветвления

// const userInput = prompt('Введите число');
// const number = Number(userInput) || 0;
// let answer;

// if (number > 0) {
//   answer = 'Это положительное число';
// } else if (number < 0) {
//   answer = 'Это отрицательное число';
// } else {
//   answer = 'Это ноль';
// }

// console.log(answer);

//=====================================================
// вложенные ветвления
// Скрипт сравнивающий числа в переме a и b
// Если оба значения больше 100 то вывести большее из них
// В противном случае вывести сумму числа b и 512

// const a = 120;
// const b = 18;

// if (a > 100 && b > 100) {
//   //вар 1
//   //   const res = a > b ? a : b;
//   //вар 2
//   const res = Math.max(a, b);
//   //вар 3
//   //   let res;
//   //   if (a > b) {
//   //     res = a;
//   //   } else {
//   //     res = b;
//   //   }

//   console.log(res);
// } else {
//   console.log(b + 512);
// }

//=====================================================
// Форматирование ссылки (endsWith)
// Напиши скрипт, проверяющий заканчивается ли значение переменной link символом /
// Если нет - добавь в конец значения link этот символ. Используй if...else

// let link = 'https://my-site.com/about';

// // вар 1
// if (!link.endsWith('/')) link += '/';

// // вар 2
// // link += !link.endsWith('/') ? '/' : '';

// console.log(link);

//=====================================================
// Форматирование ссылки (endsWith)
// Напиши скрипт, проверяющий заканчивается ли значение переменной link символом /
// Если нет - добавь в конец значения link этот символ, но только в том случае,
// если в link есть подстрока "my-site". Используй if...else

// let link = 'https://my-site.com/about';

// // вар 1
// if (!link.endsWith('/') && link.includes('my-site')) link += '/';

// // вар 2
// // link += !link.endsWith('/') ? '/' : '';

// console.log(link);

//====================================================
// Форматирование ссылки
// Выполни рефакторинг кода задачи используя тернарный оператор

// let link = 'https://m-site.com/about';

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';

// console.log(link);

//====================================================
// if...else и логические операторы
// Напиши скрипт который будет выводить строку в зависимости от значения пременной hours
// Ели значение hours:
// hours < 17 'Pending'
// hours >= 17 и <= 24 'Expires'
// hours > 24 'Overdue'

// const hours = 29;
// let text;

// if (hours < 17) {
//   text = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//   text = 'Expires';
// } else {
//   text = 'Overdue';
// }

// console.log(text);

//====================================================
//Напиши дедлайн сдачи проекта. Используй if...else
// 0 дней "Сегодня"
// 1 день "Завтра"
// 2 дня "Послезавтра"
// 3+ дня "Дата в будущем"

// const dayUntilDeadLine = 0;
// let text;

// Вар 1
// if (dayUntilDeadLine === 0) {
//   console.log('Сегодня');
// } else if (dayUntilDeadLine === 1) {
//   console.log('Завтра');
// } else if (dayUntilDeadLine === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// //Вар 2
// switch (dayUntilDeadLine) {
//   case 0:
//     text = 'Сегодня';
//     break;
//   case 1:
//     text = 'Завтра';
//     break;
//   case 2:
//     text = 'Послезавтра';
//     break;
//   default:
//     text = 'Дата в будущем';
// }

// console.log(text);

//====================================================
// Напиши цикл for который выводитв консоль браузера числа по возростанию
// от min  до max, но только если число кратное 5

// const min = 19;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

//===================================================
// Напиши скрипт который будет спрашивать логин с помощью prompt и логировать
// результат в консоль браузера
// - 'Админ' - запрос пароля
// - ничего не введено инажата клавиша 'Esc' - 'Отмена'
// - в противном случае 'Я вас не знаю'
// - если введен пароль 'Я админ' - вывести "Здравствуйте"
// - иначе выводить "Неверный пароль"

// const login = prompt('Login');

// if (login) {
//   if (login === 'Админ') {
//     const password = prompt('password');

//     if (password === 'Я админ') {
//       console.log('Здравствуйте');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Я вас не знаю');
//   }
// } else {
//   console.log('Отмена');
// }

// const login = prompt('Login');
// if (login) {
//   if (login === 'Admin'.toLowerCase()) {
//     const password = prompt('Password');

//     if (password === 'Im admin'.toLowerCase()) {
//       console.log('Hello');
//     } else {
//       console.log('False');
//     }
//   } else {
//     console.log('I dont know you');
//   }
// } else {
//   console.log('Cansel');
// }

// ==================================================
// ================== МАССИВЫ =======================

// const friends = ['Mango', 'Kiwi', 'Polly', 'Ajax'];

// console.table(friends);

// // Как достучаться до элемента массива
// console.log(friends[2]);

// // Как перезаписать элемент массива
// friends[1] = 'qweqwe';

// ==================================================

// // Длина массива и индекс последнего элемента
// const clients = ['Mango', 'Poly', 'Ajax'];
// // Длинна массива
// console.log('Длина массива:', clients.length); // 3

// // Индекс последнего элемента
// const lastElementIndex = clients.length - 1;
// console.log('Индекс последнего элемента:', lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// Итерация по массиву

// // Цикл for
// const clients = ['Mango', 'Ajax', 'Poly'];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// // Цикл for...of
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// ==================================================
// // Операторы break и continue
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// // Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя.

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// ==================================================

// // Используем цикл для вывода только чисел больше определенного значения.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ==================================================
// // Присвоение по ссылке и по значению
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// ==================================================

// //Сложные типы - объекты, массивы, функции присваиваются по ссылке, то есть переменная просто получает ссылку на уже существующий объект.
// const a = ['Mango'];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// ==================================================
// ========== Методы split() и join()
// //Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.
// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// //Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter.
// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

// // ============ Метод indexOf()
// //indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// ============== Метод includes()
// // includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

//Проверка множественных условий с includes()
// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry' || fruit === 'cherry' || fruit === 'cranberries') {
//   console.log('It is a red fruit!');
// }

//=========
// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry' || fruit === 'cherry' || fruit === 'cranberries') {
//   console.log('It is a red fruit!');
// }

//========= или

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ==================================================
// =========== Методы push() и pop() ================
// // Метод push() добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// // Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// ==================================================
// ================= Метод slice() ==================
// // slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// ================ Метод splice() ==================
// ============ Удаление
//Удаляет, добавляет и заменяет элементы в произвольном месте массива.
// splice(position, num)
// - position - указывает позицию (индекс) первого элемента для удаления
// - num - определяет количество удаляемых элементов
// Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы. Например, у нас есть массив оценок, который содержит пять чисел от 1 до 5.

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// =========== Добавление
// Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.
// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// Можно добавить произвольное количество элементов, передав четвертый, пятый аргумент и т. д.
// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// =========== Замена
// Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.
// splice(position, num, new_element_1, new_element_2, ...)
// - position - указывает позицию (индекс) первого элемента для удаления
// - num - определяет количество удаляемых элементов
// - Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// ==================================================
// =========== Метод concat()
//Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ==================================================
// =============== Функции
// // 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }
// // 2. Передача аргументов при вызове функции
// multiply(2, 3, 5); // Результат умножения равен 30

// =============== Возврат значения
//Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.
// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// =============== Порядок выполнения кода
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log('Лог до вызова функции multiply');
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log('Лог после вызова функции multiply');

// Последовательность логов в консоли
// "Лог до вызова функции multiply"
// "Результат умножения равен 30"
// "Лог после вызова функции multiply"

// Когда интерпретатор встречает вызов функции (или метода), он приостанавливает выполнение текущего кода и начинает выполнять код из тела функции. После того как весь код функции будет выполнен, интерпретатор выходит из тела функции, возвращаясь в то место, откуда пришел и продолжает выполнять код, следующий после вызова функции.

// ================ Параметры по умолчанию
//Иногда необходимо объявить функцию, у параметров которой будут значения отличные от undefined, даже если для них не передали аргументы. Это делается очень простым и очевидным образом, достаточно указать значение по умолчанию прямо при объявлении параметров в подписи функции. При такой записи, если для параметра не передано значение аргумента, используется значение по умолчанию.
function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1
