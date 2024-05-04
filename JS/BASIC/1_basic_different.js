// <script src="/path/to/script.js"></script>

alert('Привет, мир!');
"use strict"; // этот код работает в современном режиме

// Оператор нулевого слияния (??)
let result = a ?? b // (a !== null && a !== undefined) ? a : b;



// Константы в верхнем регистре
// Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.
const COLOR_RED = "#F00";

// В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках.
// Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
let age;
alert(age); // выведет "undefined"
let age = 123;
age = undefined; // изменяем значение на undefined


x = -x;// Унарным называется оператор, который применяется к одному операнду.
alert(y - x); // Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:


if (1 && 0) { // вычисляется как true && false
}




