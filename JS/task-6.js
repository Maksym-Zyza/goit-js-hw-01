// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

let input;
let total = 0;
input = Number(prompt("Введите чило"));
console.log(input);

// for (let input = 0; input !== null; input += total) {
  console.log(`Число - ${input}`);
  if (input === null) {
    console.log(`Выход`);
    break;
  }
}
alert(`Общая сумма чисел равна ${total}`);

// if (input > 0) {
//   console.log(`Число - ${input}`);
//   total += input;
//   console.log(`Cумма равна - ${total}`);
// } else if (input === "") {
//   console.log(`Общая сумма чисел равна ${total}`);
//   alert(`Общая сумма чисел равна ${total}`);
// } else {
//   console.log(`ytsdfsdf`);
// }
// alert(`Общая сумма чисел равна ${total}`);

// function () {
//   console.log(`Значение ${total}`);
//   const value = Number(valueInput.value);
//   console.log(value);
//   total += value;
//   console.log("total: ", total);
//   outpuutEl.textContent = total;
//   valueInput.value = "";
// }
