# goit-js-hw-01

1. pryttierrs.json

2. Модули - type="module"
   При подключениии файлов JS указываем type="module" чтобы в каждом файле можна было задавать одинаковые переменные.
    <script src="./JS/script_1.js" type="module"></script>

3. ПЕРЕМЕННЫЕ

- const a = 5; //задаем переменную
- console.log(a); //выводим в консоль, интерпритатор ищет значение снизу вверх!
- console.log(typeof a); //проверяем тип (или довабить в задании "typeof")
- alert('qwqw'); //выводит значение в окно

4. МЕТОДЫ:
   // -- Вывод пользователю - confirm() и promnt()

- const sholdRenrw = confirm("Хотите продолжить подписку?");
  console.log(sholdRenrw); - возвращает true или false блокирует исполнение кода
- const quantity = prompt("Введите покличество товара?");
  console.log(quantity); - возвращает введенное значение либо null (значение стррока)
  quantity = Number(quantity); - для преобразования в числовое значение

// -- Парсинг числа:
Number.parseInt() и Number.parseFloat()

let elementWhids = "50.2533px";
const resalt = Number.parseFloat(elementWhids);
console.log(resalt);

- Number.parseInt() - вычисляет число до первого знака.
- Number.parseFloat() - вычисляет нецелое число - "502.33"

// -- Округление числа - число.toFixed(значение)

let salary = 1300.87854;
salary = salary.toFixed(2);
console.log(salary);
salary = Number(salary);

Краткая запись: // значение выщитывается справа на лево
let salary = 1300.87811;
console.log(Number(salary.toFixed(2)));

// -- Приведение (приобразование) к числу:

console.log(Number(true)); // 1
console.log(Number(false)); //0
console.log(Number(qwqw)); // NaN

5. МАТЕМАТИЧЕСКИЕ ФУНКЦИИ:
   console.log(Math);

// -- Возведение в степень: 2 в 8 степень:
const base = 2;
const power = 8;
console.log(base \*\* power);
const result = Math.pow(2, 8); //256 - Math.pow() - возведение в степень: 2 в 8 степени.
console.log(result);

<!-- console.log(2 ** 8); - современный аналог -->

// -- Корень квадратный Math.sqrt()
console.log(Math.sqrt(9, 2));

// -- Скрипт -возведения числа в степень
// -- Генерим псевдослучайные числа:
// -- Рандомный цвет backgroundColor
// -- Длина строки - свойсто length
// -- Конкатенация строе (сшивание)
// -- Скрипт который вывеедет строку в формате:
// -- Шаблонные строки
// -- Поиск в строке с методом includes() и toLowerCase()

// -- ОПЕРАТОРЫ СРАВНЕНИЯ
