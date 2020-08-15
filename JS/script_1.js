// const a = 5;
// console.log(a);
// console.log(typeof a);

// МЕТОДЫ:

// -- Вывод пользователя - confirm() и promnt()

// const sholdRenrw = confirm("Хотите продолжить подписку?");
// console.log(sholdRenrw);

// -- Введите числа Number(n)

// let quantity = prompt("Введите кокличество товара?");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// -- Парсинг числа: Number.parseInt() и Number.parseFloat()

// let elementWhids = "50.2533px";
// const resalt = Number.parseFloat(elementWhids);
// console.log(resalt);

// -- Округление числа - .toFixed(n)

// let salary = 1300.87811;
// console.log(Number(salary.toFixed(2)));
// // console.log(salary);
// // salary = Number(salary);

// -- Приведение (приобразование) к числу:

// const qwqw = "Hello";
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(qwqw));

// -- Математические функции:

// console.log(Math);

// Корень квадратный Math.sqrt()
// console.log(Math.sqrt(9, 2));

// // Возведение в степень - Math.pow()
// // const result = Math.pow(2, 8);
// console.log(2 ** 10);

// const base = 2;
// const power = 10;
// console.log(base ** power);

// -- Скрипт - Возведение в числа в степень

// // 1.Попросить ввести число и сохранить переменную
// let base = prompt("Введите число");
// base = Number(base);
// console.log(base);
// // 2.Попросить ввести степень и сохранить переменную
// let power = prompt("Введите степень");
// power = Number(power);
// console.log(power);
// // 3.Возвести число в степень и вывести в консоль
// console.log(base ** power);

// -- Генерим псевдослучайные числа:
// Math.random(); - генерит рандомное чило от 0 до 1
// Math.round(); - округление целого чила

// console.log(Math.random());
// const max = 50;
// const min = 1;
// let result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// -- Рандомный цвет backgroundColor
// const collors = ["orange", "blue", "tomato", "gray", "green", "blue"];
// const max = collors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const collor = collors[index];
// console.log(collor);
// document.body.style.backgroundColor = collor;

// -- Длина строки - свойсто length
// const messege = "Узнать количество симоылов в стороке - 41";
// console.log(messege.length);

// -- Конкатенация строе (сшивание)
// const firstName = "Donald";
// const lactName = "Dack";
// console.log(firstName + " " + secondName);

// -- Скрипт который вывеедет строку в формате:
// "Гость х у посесяется в z номер q"
// const firstName = "Бил";
// const lactName = "Джон";
// const room = "716";
// const type = "VIP";
// console.log(
//   firstName + " " + lactName + " поселяется в " + type + " № " + room
// );

// -- Шаблонные строки
// console.log(`${firstName} ${lactName} поселяется в ${type} № ${room}`);

// -- Нормализация с методом toLowerCase()
// let brand = prompt("Введите бренд");
// brand = brand.toLowerCase();
// console.log(brand);

// Первую букву не изменняем и применяем toLowerCase() со второго символа (буквы)
// let brand = "SamSUgG";
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// -- Поиск в строке с методом includes() и toLowerCase()
const blaclist1 = "спам";
const blaclist2 = "распродажа";

const string1 = "Привет, я принц Абдул, это не спам";
const string2 = "Самая большая РАСПРОДАЖА";
const string3 = "Реальное предложение";

console.log(string1.includes(blaclist1));
console.log(string1.includes(blaclist2));

console.log(string2.includes(blaclist1));
console.log(string2.toLowerCase().includes(blaclist2));

console.log(string3.includes(blaclist1));
console.log(string3.includes(blaclist2));

// -- ОПЕРАТОРЫ СРАВНЕНИЯ
