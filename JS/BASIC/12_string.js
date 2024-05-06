

let str = `Hello`;
// получаем первый символ
alert(str[0]); // H
alert(str.at(0)); // H
// получаем последний символ
alert(str[str.length - 1]); // o
alert(str.at(-1)); // o


// Также можно перебрать строку посимвольно, используя for..of:
for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}


// Строки неизменяемы
// Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его.
// Как только строка создана — она такая навсегда.!!!!!!!
let str = 'Hi';
str[0] = 'h'; // ошибка
alert(str[0]); // не работает
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface

let str = 'widget with id';
alert(str.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
alert(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
alert(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (widget with id)
// Необязательный второй аргумент позволяет начать поиск с определённой позиции.
alert(str.indexOf('id', 2)) // 12

// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле.
// Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:
let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска
let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    alert(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1; // продолжаем со следующей позиции
}

str.lastIndexOf(substr, position)
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.
// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.
let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}

alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false
alert("Midget".includes("id")); // true
alert("Midget".includes("id", 3)); // false, поиск начат с позиции 3
alert("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
alert("Widget".endsWith("get")); // true, "get" — окончание "Widget"


let str = "stringify";
alert(str.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)
alert(str.slice(2)); // ringify, с позиции 2 и до конца
alert(str.slice(-4, -1)); // gif // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// для substring эти два примера — одинаковы
alert(str.substring(2, 6)); // "ring"
alert(str.substr(-4, 2));// gi, получаем 2 символа, начиная с позиции 4 с конца строки


alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90
alert(String.fromCodePoint(90)); // Z


// Давайте сделаем строку, содержащую символы с кодами от 65 до 220 — это латиница и ещё некоторые распространённые символы:
let str = '';
for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
