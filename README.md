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
   4.1 Вывод пользователю - confirm() и promnt()

- const sholdRenrw = confirm("Хотите продолжить подписку?");
  console.log(sholdRenrw); - возвращает true или false блокирует исполнение кода
- const quantity = prompt("Введите покличество товара?");
  console.log(quantity); - возвращает введенное значение либо null (значение стррока)
  quantity = Number(quantity); - для преобразования в числовое значение

  4.2 Парсинг числа Number.parseInt() и Number.parseFloat()

- Number.parseInt() - вычисляет число до первого знака.
- Number.parseFloat() - вычисляет нецелое число - "502.33"

  4.3 Округление числа - число.toFixed(значение)
  // значение выщитывается справа на лево

  4.4 Приведение (приобразование) к числу Number()

5. МАТЕМАТИЧЕСКИЕ ФУНКЦИИ:
   console.log(Math);

5.1 Возведение в степень: 2 в 8 степень Math.pow(2, 8)
// console.log(2 \*\* 8); - современный аналог

5.2 Корень квадратный Math.sqrt(9, 2)
5.3 Скрипт -возведения числа в степень
5.4 Псевдослучайные числа Math.random(), Math.round()
5.5 Рандомный цвет backgroundColor
5.6 Длина строки - свойсто length
5.7 Конкатенация строе (сшивание)
5.8 Скрипт который вывеедет строку в формате:
5.9 Шаблонные строки
5.10 Поиск в строке с методом includes() и toLowerCase()

6. ОПЕРАТОРЫ
   6.1 ОПЕРАТОРЫ СРАВНЕНИЯ (<, >, = ,)
   6.2 СРАВНЕНИЯ И РАВЕНСТВА (===, !==)

6.3 ЛОГИЧЕСКИЕ ОПЕРАТОРЫ:

- Приведение к булю Boolean()
- Логическое И (&&)
- Логическое ИЛИ (||)
- Логическое НЕ (!)

//ЗАДАЧИ

6.4 ОПЕРАТОРЫ ОТВЕТВЛЕНИЯ
/- if () {}
/- if () {} else {}
/- if () {} else if () {} else if () {} else {}

6.5 ТЕРНАРНЫЙ ОПЕРАТОР: const a = условие >= 0 ? выражение1 : выражение2;

7. БЛОЧНАЯ ВИДИМОСТЬ ПЕРЕМЕННЫХ

8. Інструкция switch () {}

9. Цикл for

10. Задачи

11. Codewars

12. DOM
