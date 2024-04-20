alert('Привет, мир!');

// <script src="/path/to/script.js"></script>
[1, 2].forEach(alert);

"use strict";
// этот код работает в современном режиме

let message;
message = 'Hello!';
// Константы в верхнем регистре
// Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.
const COLOR_RED = "#F00";

alert(1 / 0); // Infinity

alert(Infinity); // Infinity
// NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:

alert("не число" / 2); // NaN, такое деление является ошибкой
// Значение NaN «прилипчиво». Любая математическая операция с NaN возвращает NaN:

alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("не число" / 2 - 1); // NaN

let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках.
// Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
let age;

alert(age); // выведет "undefined"
let age = 123;
// изменяем значение на undefined
age = undefined;

let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
// Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

let isBoss = confirm("Ты здесь главный?");
alert(isBoss); // true, если нажата OK


let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string


alert("6" / "2"); // 3, строки преобразуются в числа


alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
alert(Number(true));        // 1
alert(Number(false));       // 0

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("Привет!")); // true
alert(Boolean("")); // false

// Заметим, что строка с нулём "0" — это true
// Некоторые языки (к примеру, PHP) воспринимают строку "0" как false. Но в JavaScript, если строка не пустая, то она всегда true.


// Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:

let x = 1;
x = -x;
alert(x); // -1, применили унарный минус
// Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:
let x = 1, y = 3;
alert(y - x); // 2, бинарный минус вычитает значения

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert(+apples + +oranges); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

if (1 && 0) { // вычисляется как true && false
    alert("не сработает, так как результат ложный");
}


// Оператор нулевого слияния (??)
let result = a ?? b
let result = (a !== null && a !== undefined) ? a : b;
let user;
alert(user ?? "Аноним"); // Аноним (user не существует)
let user = "Иван";
alert(user ?? "Аноним"); // Иван (user существует)


function sayHi() {   // (1) создаём
    alert("Привет");
}

let func = sayHi;    // (2) копируем

func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)

function sayHi() {
    // ...
}

let sayHi = function () {
    // ...
};


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("Вы согласны.");
}

function showCancel() {
    alert("Вы отменили выполнение.");
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// Мы можем переписать этот пример значительно короче, используя Function Expression:
ask(
    "Вы согласны?",
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    })


// Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.

// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:

// Function Expression
let sum = function (a, b) {
    return a + b;
};


let age = 16; // возьмём для примера 16

if (age < 18) {
    welcome();               // \   (выполнится)
                             //  |
    function welcome() {     //  |
        alert("Привет!");      //  |  Function Declaration доступно
    }                        //  |  во всём блоке кода, в котором объявлено
                             //  |
    welcome();               // /   (выполнится)

} else {

    function welcome() {
        alert("Здравствуйте!");
    }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome(); // Ошибка: welcome is not defined


// Стрелочные функции, основы

let func = (arg1, arg2, ...argN) => expression;

// Другими словами, это сокращённая версия:
let func = function (arg1, arg2, ...argN) {
    return expression;
};


let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

















