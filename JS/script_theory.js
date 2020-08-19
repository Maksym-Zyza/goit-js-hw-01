// ПЕРЕМЕННЫЕ
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
// console.log(Number(salary));
// console.log(Number(salary.toFixed(2)));

// -- Приведение (приобразование) к числу:
// const qwqw = "Hello";
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(qwqw));

// -- Математические функции console.log(Math);

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
// const messege = "Узнать количество симоылов в стороке";
// console.log(messege, messege.length);

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
// const blaclist1 = "спам";
// const blaclist2 = "распродажа";

// const string1 = "Привет, я принц Абдул, это не спам";
// const string2 = "Самая большая РАСПРОДАЖА";
// const string3 = "Реальное предложение";

// console.log(string1.includes(blaclist1));
// console.log(string1.includes(blaclist2));

// console.log(string2.includes(blaclist1));
// console.log(string2.toLowerCase().includes(blaclist2));

// console.log(string3.includes(blaclist1));
// console.log(string3.includes(blaclist2));

// -- ОПЕРАТОРЫ СРАВНЕНИЯ
// операнды и результат приводяться к числу!
// console.log(15 >= 10); //true
// console.log("15" < 10); //false
// console.log(true > 5); //false (1>5)

// ОПЕРАТОРЫ РАВЕНСТВА (== и ====) и НЕРАВЕНСТВА (!= и !==)
// ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (====) и НЕРАВЕНСТВО (!==)
// const a = 1 !== true;
// console.log(a);

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// Приведение к булю Boolean()
// console.log(Boolean(5)); //true
// console.log(Boolean(null)); //false
// Логические оператори которые приводяться к "0"!
// 0, NaN, null, undefined, пустая строка: "" или '', false

// Логическое И (&&)
// запинается на false, выводит на чем запинается или последнее значение
// console.log(5 && 6 && 7 && "hello");
// console.log(5 && NaN && 7 && "hello");

// Логическое ИЛИ (||)
// запинается на true, возвращает на чем запинается или последний операнд
// console.log(false || null || 10 || 15); // 10
// console.log(0 || NaN || undefined || "" || false || null); // null

// Логическое НЕ (!)
// делает инверсию правда > ложь и ложь > правда
// console.log(!null);

//ЗАДАЧИ

// Скрипт - Вхождение числа в отрезок х1 и х2
// до х1
// после х2
// от х1 до х2
// до х1 или после х2

// const x1 = 10;
// const x2 = 30;
// const number = 5;
// console.log(number);
// console.log(`Число ${number} попадает в отрезок ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок  после ${x2}?`, number > x2);
// console.log(
//   `Число ${number} попадает в отрезок от ${x1} до ${x2}?`,
//   number > x1 && number < x2
// );
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}?`,
//   number < x1 || number > x2
// );

// Скрипт - проверка возможности открыть чат с пользователем, для этого пользователь должен быть:
// - другом
// - онлайн
// - без режима безпокоить

// const isOnLine = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = (isOnLine && isFriend) || !isDnd;
// console.log(`Можно открыть чат?`, canOpenChat);

// Скрипт - проверка подписки пользователя при доступе к контенту
// - есть три типа подписки: free, pro, vip
// - оплучить доступ могут только пользователи: pro, vip

// const sub = "pro";
// console.log(sub);
// const canAccess = sub === "pro" || sub === "vip";
// console.log(`Есть доступ к подписке?`, canAccess);

// ОПЕРАТОРЫ ОТВЕТВЛЕНИЯ if () {}
// if (выражение true / false) { тело }
// - if (true) {тело выполняется}
// - if (false) {тело не выполняется}

// if (5 > 3) {
//   console.log("Hello!");
// }
// console.log("Дальше!");

// if () {} else {}
// - выполняется одно из двух

// if (10 > 5) {
//   console.log("x > y");
// } else {
//   console.log("x < y");
// }

// if () {} else if () {} else if () {} else {}
// - выполняется до первого совпадения

// const salery = 2500;
// if (salery <= 500) {
//   console.log("Уровень 1");
// } else if (salery > 500 && salery < 1500) {
//   console.log("Уровень 2");
// } else if (salery > 1500 && salery < 3000) {
//   console.log("Уровень 3");
// } else {
//   console.log("Уровень 4");
// }

// ТЕРНАРНЫЙ ОПЕРАТОР: const a = условие >= 0 ? выражение1 : выражение2;
// const balanse = 1000;
// let message;
// if (balanse > 0) {
//   message = "Позитивный баланс";
// } else {
//   message = "Негативный баланс";
// }
// console.log(message);

// const balanse = 1000;
// const message = balanse >= 0 ? "Позитивный баланс" : "Негативный баланс";
// console.log(message);

// БЛОЧНАЯ ВИДИМОСТЬ ПЕРЕМЕННЫХ
// - глобальные переменные - глобально, блочные - блочно!
// const a = 5;
// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b); // недоступна глобально - ошибка

// Інструкция switch () {}
// Используется когда переменная сравнивается со значениями

// Пример: Присвоение отелю цены по количестку зверзд.

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 30;
//     console.log(`Коментарий`);
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log(`Такого количества зверд нет.`);
// }
// console.log(price);

// Задача: Напиши скрипт выбора опции доставки товара.
// Опция хранится в переменной options: 1 - самовывоз, 2 -курьер, 3 - почта.

// 1. сделать переменные
// 2. сделать switch 1 2 3
// 3. в каждом кейсе задать в message строку
// 4. сделать лог message

// const options = 3;
// let message = "";

// switch (options) {
//   case 1:
//     message = "Вы можете забрать товар завтра с 9:00";
//     break;

//   case 2:
//     message = "Курьер доставит посылку завтра с 9:00 до 18:00";
//     break;

//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;

//   default:
//     message = "Вам передзвонит менеджер";
// }

// console.log(message);

// 9. ЦИКЛ for (инициалязация; условие; пост - выражение) { тело цикла}
// for (let i = 5; i < 100; i += 1) {
//   console.log(i);
// }

// for (let i = 150; i > 100; i -= 5) {
//   console.log(i);
// }
// Прекращает работу, когда в условии - false
//  i= i+1  ES6: i += 1

// ЗАДАЧА 1
// Перебрать работников в цикле, генерация и сложение их зарплаты

// const minSalory = 500;
// const maxSalory = 5000;
// const employers = 5;
// let totalSalary = 0;

// for (let i = 0; i <= employers; i += 1) {
//   let salory = Math.round(Math.random() * (maxSalory - minSalory) + minSalory);
//   console.log(`ЗП работника ${i} - ${salory}`);
//   totalSalary += salory;
// }
// console.log(totalSalary);

// ЗАДАЧА 2
// Подсчитать сумму всех четных чилел от min до max.

// const min = 6;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(`не чётное: `, i);
//     continue;
//   }
//   console.log(`чётное: `, i);
//   total += i;
// }
// console.log(total);

// ЗАДАЧА 3
// Покупка в магазине:
// Есди сумма не пребышает баланс пользователя, вычисляем из баланса сумму, сообщение - "На счету осталось [число] кредитов"
// Если сумма превышает баланс - сообщение "На счему недостаточно средств"
// В конце сообщение - "Операция завершена"

// let balanse = 10000;
// const payment = 3000;

// if (payment <= balanse) {
//   balanse -= payment; //balanse = balanse - payment;
//   console.log(`На счету осталось ${balanse} кредитов`);
// } else console.log(`На счему недостаточно средств`);
// console.log("Операция завершена");

// ЗАДАЧА 4
// Разный % скидки дается о потраченой рание сумми + сумма покупки

// let totalSpent = 5000;
// let payment = 300;
// let discount = 0;

// if (100 <= totalSpent && totalSpent < 1000) {
//   totalSpent += payment;
//   console.log(`Потрачено ${totalSpent} - Бронзовые партнер, скидка 2 %`);
//   discount = 0.02;
// } else if (1000 <= totalSpent && totalSpent < 5000) {
//   totalSpent += payment;
//   console.log(`Потрачено ${totalSpent} - Серебряный партнер, скидка 5 %`);
//   discount = 0.05;
// } else if ((totalSpent) => 5000) {
//   totalSpent += payment;
//   console.log(`Потрачено ${totalSpent} - Золотой партнер, скидка 10 %`);
//   discount = 0.1;
// } else {
//   console.log(`У вас еще нет партнерской скидки`);
// }

// payment = payment - payment * discount;
// console.log(
//   `Оформлен заказ на сумму ${payment} со скидкой ${discount * 100} %`
// );

// totalSpent += payment;
// console.log(`Общая сумма потраченая в магазине: ${totalSpent}`);

// ЗАДАЧА 5
//

const butAdd = document.querySelector("button"); // выбрать елемент с документа по сетектору
// console.log(butAdd); // вывести елемент в консоль
// console.dir(butAdd); // посмотреть сфойства
// console.dir(butAdd.textContent); // посмотреть текст елемента
// butAdd.textContent = "qwqwqw"; // задать текст елемента
const butRes = document.querySelector("button[data-reset]");
// console.log(butRes);
const valueInput = document.querySelector("input[data-value]");
// console.log(valueInput);
const outpuutEl = document.querySelector(".js-outpuut span");
// console.log(outpuutEl);

let total = 0;
// добавляем слушателя событий при клике и в него ф-ю
butAdd.addEventListener("click", function () {
  console.log(`Значение ${total}`);
  const value = Number(valueInput.value);
  console.log(value);
  total += value;
  console.log("total: ", total);
  outpuutEl.textContent = total;
  valueInput.value = "";
});

butRes.addEventListener("click", function () {
  total = 0;
  outpuutEl.textContent = total;
});
