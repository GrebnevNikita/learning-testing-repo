let arr = new Array();
let arr = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];

let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits[0] ); // Яблоко
alert( fruits[1] ); // Апельсин
alert( fruits[2] ); // Слива




fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]


alert( fruits.length ); // 3


// В массиве могут храниться элементы любого типа.
// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
alert( arr[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет




// Висячая запятая
// Список элементов массива, как и список свойств объекта, может оканчиваться запятой:

    let fruits = [
        "Яблоко",
        "Апельсин",
        "Слива",
    ];
// «Висячая запятая» упрощает процесс добавления/удаления элементов, так как все строки становятся идентичными.



let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum
alert( fruits.at(-1) ); // Plum !!! НОВИНКА МОЖЕТ НЕ ВЕЗДЕ РАБОТАТЬ


// Очередь
// first in, first out

// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
// push добавляет элемент в конец.

// стек
// push добавляет элемент в конец.
// pop удаляет последний элемент.


// Удаляет последний элемент из массива и возвращает его:

let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удаляем "Груша" и выводим его
alert( fruits ); // Яблоко, Апельсин


// Добавляет элемент в конец массива:

let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");
alert( fruits ); // Яблоко, Апельсин, Груша
















