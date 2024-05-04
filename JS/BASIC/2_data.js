






// Стрелочные функции, основы
let sum = (a, b) => a + b;
// let sum = (a, b) => {
// return a + b;
// };
// let sum = function(a, b) {
// return a + b;
// };
alert(sum(1, 2)); // 3




let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"
let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};
// получаем свойства объекта:
alert(user.name); // John
alert(user.age); // 30
// Для удаления свойства мы можем использовать оператор delete:
delete user.age;

let user = {};
// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true
// удаление свойства
delete user["likes birds"];

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// Вместо name:name мы можем написать просто name:
function makeUser(name, age) {
    return {
        name, // то же самое, что и name: name
        age   // то же самое, что и age: age
        // ...
    };
}

// Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:
let user = {
    name,  // тоже самое, что и name:name
    age: 30
};


let user = {};
alert(user.noSuchProperty === undefined); // true означает "свойства нет"

// Это когда свойство существует, но содержит значение undefined:
let obj = {
    test: undefined
};

alert(obj.test); // выведет undefined, значит свойство не существует?
alert("test" in obj); // true, свойство существует!

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // ключи
    alert(key);  // name, age, isAdmin
    // значения ключей
    alert(user[key]); // John, 30, true
}


let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};
for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
// Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем схитрить, сделав коды не целочисленными свойствами. Добавления знака "+" перед каждым кодом будет достаточно.
let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
};
for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
}


// Здесь мы помещаем копию message во phrase:
let message = "Привет!";
let phrase = message;
// В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".!!!!!!!!!!!!!!!!!!!

// Объекты ведут себя иначе.
let user = {name: "John"};
let admin = user; // копируется ссылка !!!!!!!!!!!!!!!!!!


// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект.
// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:
let a = {};
let b = a; // копирование по ссылке
alert(a == b); // true, обе переменные ссылаются на один и тот же объект
alert(a === b); // true
// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
let a = {};
let b = {}; // два независимых объекта
alert(a == b); // false


// Object.assign(dest, [src1, src2, src3...])
// Первый аргумент dest — целевой объект.
// Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
let user = {name: "John"};
let permissions1 = {canView: true};
let permissions2 = {canEdit: true};
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }
// Если скопированное имя свойства уже существует, оно будет перезаписано:


let user = {
    name: "John",
    age: 30
};
user.sayHi = function (rrr) {
    alert("Привет!" + rrr);
};
user.sayHi(123); // Привет!
function sayHi() {
    alert("Привет!");
}

user.sayHi = sayHi;
user.sayHi(); // Привет!
user = {
    sayHi: function () {
        alert("Привет");
    }
};
user = {
    sayHi() { // то же самое, что и "sayHi: function(){...}"
        alert("Привет");
    }
};
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert(this.name);  // "this" - это "текущий объект".
    }
};
user.sayHi(); // John
// Значение this вычисляется во время выполнения кода, в зависимости от контекста. !!!!!!!!!!!
// Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение «this» в вызовах:
let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi() {
    alert(this.name);
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
// Значение this определяется во время исполнения кода.


// Функция-конструктор
// Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".
// Другими словами, new User(...) делает что-то вроде:
function User(name) {
    // this = {};  (неявно)
    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
    // return this;  (неявно)
}

// Таким образом, let user = new User("Jack") возвращает тот же результат, что и:
let user = {
    name: "Jack",
    isAdmin: false
};
// создаём функцию и сразу же вызываем её с помощью new
let user = new function () {
    this.name = "John";
    this.isAdmin = false;
    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
// Такой конструктор не может быть вызван снова, так как он нигде не сохраняется, просто создаётся
// и тут же вызывается. Таким образом, этот трюк направлен на инкапсуляцию кода,
// который создаёт отдельный объект, без возможности повторного использования в будущем.


// Возврат значения из конструктора, return
function BigUser() {
    this.name = "John";
    return {name: "Godzilla"};  // <-- возвращает этот объект
}

alert(new BigUser().name);  // Godzilla, получили этот объект
function SmallUser() {
    this.name = "John";
    return; // <-- возвращает this
    // return 1; // мы могли бы поставить примитив после return
}

alert(new SmallUser().name);  // John


// Создание методов в конструкторе
// Например, new User(name) ниже создаёт объект с заданным name и методом sayHi:
function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("Меня зовут: " + this.name);
    };
}

let john = new User("John");
john.sayHi(); // Меня зовут: John


// Опциональная цепочка '?.'
// Новая возможность
// Эта возможность была добавлена в язык недавно. В старых браузерах может понадобиться полифил. !!!!!
// Очевидным решением было бы проверить значение с помощью if или условного оператора ?, прежде чем обращаться к его свойству, вот так:
let user = {};
alert(user.address ? user.address.street : undefined);
alert(user?.address?.street); // undefined (без ошибки)


// Сокращённое вычисление
// Как было сказано ранее, ?. немедленно останавливает вычисление, если левая часть не существует.
// Так что если после ?. есть какие-то вызовы функций или операции, то они не произойдут.
let user = null;
let x = 0;
user?.sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++
alert(x); // 0, значение не увеличилось
// Другие варианты применения: ?.(), ?.[]
let userAdmin = {
    admin() {
        alert("Я админ");
    }
};
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)


// Тип данных «Символ» представляет собой уникальный идентификатор.
// По спецификации, в качестве ключей для свойств объекта могут использоваться только строки или символы.
let id = Symbol("id");
// Символы гарантированно уникальны. Даже если мы создадим множество символов
// с одинаковым описанием, это всё равно будут разные символы. Описание – это просто метка, которая ни на что не влияет.
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

// Если мы хотим использовать символ при литеральном объявлении объекта {...}, его необходимо заключить в квадратные скобки.
let id = Symbol("id");
let user = {
    name: "Вася",
    [id]: 123 // просто "id: 123" не сработает
};
// Это вызвано тем, что нам нужно использовать значение переменной id в качестве ключа, а не строку «id».
// Символы игнорируются циклом for…in
// Это – часть общего принципа «сокрытия символьных свойств». Если другая библиотека или скрипт будут
// работать с нашим объектом, то при переборе они не получат ненароком наше символьное свойство.
// Object.keys(user) также игнорирует символы.


// Глобальные символы
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert(id === idAgain); // true
// получаем имя по символу
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id


// Хинты
// Как JavaScript решает, какое преобразование применить?
// "string"
// Для преобразования объекта к строке, когда мы выполняем операцию над объектом, которая ожидает строку, например alert:
// alert(obj);
// используем объект в качестве ключа
// anotherObj[obj] = 123;
// "number"
// Для преобразования объекта к числу, в случае математических операций:
// явное преобразование
let num = Number(obj);
// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2;
// сравнения больше/меньше
let greater = user1 > user2;

// Чтобы выполнить преобразование, JavaScript пытается найти и вызвать три следующих метода объекта:
// Вызвать obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive (системный символ), если такой метод существует,
// Иначе, если хинт равен "string"
// попробовать вызвать obj.toString() или obj.valueOf(), смотря какой из них существует.
// Иначе, если хинт равен "number" или "default"
// попробовать вызвать obj.valueOf() или obj.toString(), смотря какой из них существует.
// Если метод Symbol.toPrimitive существует, он используется для всех хинтов, и больше никаких методов не требуется.
let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
// Для примера, используем их в реализации всё того же объекта user. Но уже используя комбинацию toString и valueOf вместо Symbol.toPrimitive:
let user = {
    name: "John",
    money: 1000,
    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },
    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    }
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500


// Примитив как объект
// Чтобы это работало, при таком доступе создаётся специальный «объект-обёртка», который предоставляет нужную функциональность, а после удаляется.
let str = "Привет";
alert(str.toUpperCase()); // ПРИВЕТ
// null/undefined не имеют методов
let billion = 1000000000;
let billion = 1_000_000_000 // Символ нижнего подчёркивания _ – это «синтаксический сахар», он делает число более читабельным.
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
let mcs = 0.000001;
let ms = 1e-6; // шесть нулей слева от 1
alert(0xff); // 255
alert(0xFF); // 255 (то же самое, регистр не имеет значения)
let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

let num = 255;
alert(num.toString(16));  // ff // toString(base)
alert(num.toString(2));   // 11111111 // toString(base)
// Внимание! Две точки в 123456..toString(36) это не опечатка.
// Если нам надо вызвать метод непосредственно на числе, как toString в примере выше, то нам надо поставить две точки .. после числа.


// Округление
// Одна из часто используемых операций при работе с числами – это округление.
// В JavaScript есть несколько встроенных функций для работы с округлением:
// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
let num = 12.34;
alert(num.toFixed(1)); // "12.3"
alert(0.1 + 0.2 == 0.3); // false
// Да-да, сумма 0.1 и 0.2 не равна 0.3.
// Странно! Что тогда, если не 0.3?
// alert( 0.1 + 0.2 ); // 0.30000000000000004
let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30
('b' + 'a' + +'a' + 'a').toLowerCase()
// banana
// Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:
alert(NaN === NaN); // false
// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert(isFinite(num));

// parseInt и parseFloat
// Для явного преобразования к числу можно использовать + или Number(). Если строка не является в точности числом, то результат будет NaN:
alert(+"100px"); // NaN
alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5
alert(parseInt('12.3')); // 12, вернётся только целая часть
alert(parseFloat('12.3.4')); // 12.3, произойдёт остановка чтения на второй точке
Math.random()

let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
// Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки,
// то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:
function sum(a, b) {
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
// Ещё одно преимущество обратных кавычек — они могут занимать более одной строки, вот так:
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // список гостей, состоящий из нескольких строк
alert(`The backslash: \\`); // The backslash: \


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


// let arr = new Array();
let arr = [];
let fruits = ["Яблоко", "Апельсин", "Слива"];
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // Яблоко
alert(fruits[1]); // Апельсин
alert(fruits[2]); // Слива
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
alert(fruits.length); // 3
// В массиве могут храниться элементы любого типа.
let arr = ['Яблоко', {name: 'Джон'}, true, function () {
    alert('привет');
}];
// получить элемент с индексом 1 (объект) и затем показать его свойство
alert(arr[1].name); // Джон
// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет
let fruits = ["Apple", "Orange", "Plum"];
alert(fruits[fruits.length - 1]); // Plum


// Очередь
// first in, first out

// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
// push добавляет элемент в конец.

// стек
// push добавляет элемент в конец.
// pop удаляет последний элемент.

// Удаляет последний элемент из массива и возвращает его:
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert(fruits.pop()); // удаляем "Груша" и выводим его
alert(fruits); // Яблоко, Апельсин

// Добавляет элемент в конец массива:
let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");
alert(fruits); // Яблоко, Апельсин, Груша
// Вызов fruits.push(...) равнозначен fruits[fruits.length] = ....

// Методы, работающие с началом массива:

// shift
// Удаляет из массива первый элемент и возвращает его:
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert(fruits.shift()); // удаляем Яблоко и выводим его
// Апельсин, Груша
// unshift
// Добавляет элемент в начало массива:
let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');
// Яблоко, Апельсин, Груша
// Методы push и unshift могут добавлять сразу несколько элементов:
fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");
// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]


let fruits = ["Банан"]
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert(arr === fruits); // true
arr.push("Груша"); // массив меняется по ссылке
alert(fruits); // Банан, Груша - теперь два элемента


// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
// Операция shift должна выполнить 3 действия:
// Удалить элемент с индексом 0.
// Сдвинуть все элементы влево, заново пронумеровать их, заменив 1 на 0, 2 на 1 и т.д.
// Обновить свойство length .
// То же самое происходит с unshift: чтобы добавить элемент в начало массива, нам нужно сначала сдвинуть существующие элементы вправо, увеличивая их индексы.

// А что же с push/pop? Им не нужно ничего перемещать.
// Чтобы удалить элемент в конце массива, метод pop очищает индекс и уменьшает значение length.


// Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}
// Но для массивов возможен и другой вариант цикла, for..of:
for (let fruit of fruits) {
    alert(fruit);
}

// Технически, так как массив является объектом, можно использовать и вариант for..in:
// Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr) {
    alert(arr[key]); // Яблоко, Апельсин, Груша
}


// Многомерные массивы
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
alert(matrix[1][1]); // 5, центральный элемент


// toString
// Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.
let arr = [1, 2, 3];
alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); // true


// В JavaScript, в отличие от некоторых других языков программирования, массивы не следует сравнивать при помощи оператора ==.
// Два объекта равны друг другу == только в том случае, если они ссылаются на один и тот же объект.
// Если один из аргументов == является объектом, а другой – примитивом, то объект преобразуется в примитив, как описано в главе Преобразование объектов в примитивы.
// …За исключением null и undefined, которые равны == друг другу и ничему больше.


// Как удалить элемент из массива?
// Так как массивы – это объекты, то можно попробовать delete:
let arr = ["I", "go", "home"];
delete arr[1]; // удалить "go"
alert(arr[1]); // undefined
// теперь arr = ["I",  , "home"];
alert(arr.length); // 3


let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
alert(arr); // осталось ["Я", "JavaScript"]
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert(arr) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// Здесь видно, что splice возвращает массив из удалённых элементов:
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let removed = arr.splice(0, 2);
alert(removed); // "Я", "изучаю" <-- массив из удалённых элементов

// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(2, 0, "сложный", "язык");
alert(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"

let arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
alert(arr); // 1,2,3,4,5


// slice
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(arr.slice(-2)); // s,t (копирует с -2 до конца)
// Можно вызвать slice без аргументов: arr.slice() создаёт копию arr.


// concat
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
let arr = [1, 2];
// создать массив из: arr и [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6


// Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть:
let arr = [1, 2];
let arrayLike = {
    0: "что-то",
    length: 1
};
alert(arr.concat(arrayLike)); // 1,2,[object Object]


// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
arr.forEach(function (item, index, array) {
});
// Например, этот код выведет на экран каждый элемент массива:
// Вызов alert для каждого элемента
["Бильбо", "Гэндальф", "Назгул"].forEach(alert);
["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
});


let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

let fruits = ['Яблоко', 'Апельсин', 'Яблоко']
alert(fruits.indexOf('Яблоко')); // 0 (первый 'Яблоко')
alert(fruits.lastIndexOf('Яблоко')); // 2 (последний 'Яблоко')

// Метод includes правильно обрабатывает NaN
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (неверно, должен быть 0)
alert(arr.includes(NaN));// true (верно)
// Это связано с тем, что includes был добавлен в JavaScript гораздо позже и использует более современный алгоритм сравнения.


// find и findIndex/findLastIndex
// Функция вызывается по очереди для каждого элемента массива:
let result = arr.find(function (item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася


// findIndex/findLastIndex
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Вася"}
];

// Найти индекс первого Васи
alert(users.findIndex(user => user.name == 'Вася')); // 0
// Найти индекс последнего Васи
alert(users.findLastIndex(user => user.name == 'Вася')); // 3


// filter
// Метод find ищет один (первый) элемент, который заставит функцию вернуть true.
// Если найденных элементов может быть много, можно использовать arr.filter(fn).
// Синтаксис схож с find, но filter возвращает массив из всех подходящих элементов:
let results = arr.filter(function (item, index, array) {
    // если `true` -- элемент добавляется к results и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2


// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
let result = arr.map(function (item, index, array) {
    // возвращается новое значение вместо элемента
});
// Например, здесь мы преобразуем каждый элемент в его длину:

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6


// sort(fn)
// По умолчанию элементы сортируются как строки.
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [1, 2, 15];
arr.sort(compareNumeric);// проходит по каждому и сравнивает по переданной функции
alert(arr);  // 1, 2, 15


[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    alert(a + " <> " + b);
    return a - b;
});


let arr = [1, 2, 15];
arr.sort(function (a, b) {
    return a - b;
});
alert(arr);  // 1, 2, 15


// стрелочные функции
arr.sort((a, b) => a - b);
// Используйте localeCompare для строк
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (неправильно)
alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно!)


// reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1


// split и join
let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
    alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
let str = "тест";
alert(str.split('')); // т,е,с,т


let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert(str); // Вася;Петя;Маша


// let value = arr.reduce(function(accumulator, item, index, array) {
// // ...
// }, [initial]);
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.


// Массивы не образуют отдельный тип данных. Они основаны на объектах.
alert(typeof {}); // object
alert(typeof []); // тоже object
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

for (let char of "test") {
    // срабатывает 4 раза: по одному для каждого символа
    alert(char); // t, затем e, затем s, затем t
}


// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.
let map = new Map();
map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ
// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"
alert(map.size); // 3

// в обычном обьекте нельзя нормально сделать поле обьектом, а в map можно
let john = {name: "John"};
let ben = {name: "Ben"};
let visitsCountObj = {}; // попробуем использовать объект
visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[john] = 123; // пробуем использовать объект john в качестве ключа, при этом объект ben будет замещён
// Вот что там было записано!
alert(visitsCountObj["[object Object]"]); // 123

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);
// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}
// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}
// Кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array:
// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // огурец: 500 и так далее
});

// Так что мы можем создать Map из обычного объекта следующим образом:
let obj = {
    name: "John",
    age: 30
};
let map = new Map(Object.entries(obj));
alert(map.get('name')); // John

// Мы можем использовать Object.fromEntries, чтобы получить обычный объект из Map.
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2


// Set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
// Его основные методы это:
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит,
// за счёт этого как раз и получается, что каждое значение появляется один раз.

let set = new Set();

let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set хранит только 3 уникальных значения
alert(set.size); // 3
for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
}


// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:
let set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) alert(value);
// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

// set.values() – возвращает перебираемый объект для значений,
// set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.


let john = {name: "John"};
let array = [john];
john.name = 123;
console.log(john)// 123!!!
console.log(array)// 123!!!


// Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями:
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
// нельзя использовать строку в качестве ключа
weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект


// Object.keys(obj), Object.values(obj), Object.entries(obj).map.keys(), map.values(), map.entries()
// Методы поддерживаются для структур:
// Map
// Set
// Array


let user = {
    name: "John",
    age: 30
};
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

let user = {
    name: "John",
    age: 30
};

// перебор значений
for (let value of Object.values(user)) {
    alert(value); // John, затем 30
}


// Object.keys/values/entries игнорируют символьные свойства
// Так же, как и цикл for..in, эти методы игнорируют свойства, использующие Symbol(...) в качестве ключей.
// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:
// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
alert(doublePrices.meat); // 8


// Деструктуризация массива
let arr = ["Ilya", "Kantor"];
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor
// Отлично смотрится в сочетании со split или другими методами, возвращающими массив:
let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor


// «остаточные параметры» – троеточие ("..."):
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


// Деструктуризация объекта
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200


let now = new Date();
alert(now); // показывает текущие дату и время
// Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.
// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);
// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);
// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp).
// Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:
// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(Dec31_1969);
let date = new Date("2017-01-26");
alert(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)


new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
// Максимальная точность – 1 мс (до 1/1000 секунды):

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 1.01.2011, 02:03:04.567

// getFullYear()
// Получить год (4 цифры)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.
// getDay()
// getTime()
// getTimezoneOffset()
// Возвращает разницу в минутах между UTC и местным часовым поясом:

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
alert(new Date().getTimezoneOffset());
// Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0:
// getUTCFullYear(), getUTCMonth(), getUTCDay(). Для их использования требуется после "get" подставить

// Установка компонентов даты
// Следующие методы позволяют установить компоненты даты и времени:
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
// У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().


// Автоисправление – это очень полезная особенность объектов Date. Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...1st Feb 2013!
let date = new Date();
alert(+date); // количество миллисекунд, то же самое, что date.getTime()
let start = Date.now(); // количество миллисекунд с 1 января 1970 года
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = Date.now(); // заканчиваем отсчёт времени
alert(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты


// Но какая функция быстрее?
// Для начала можно запустить их много раз подряд и засечь разницу. В нашем случае функции очень простые, так что потребуется хотя бы 100000 повторений.
// Проведём измерения:
function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

alert('Время diffSubtract: ' + bench(diffSubtract) + 'мс');
alert('Время diffGetTime: ' + bench(diffGetTime) + 'мс');
// Вот это да! Метод getTime() работает ощутимо быстрее! Всё потому, что не производится преобразование типов, и интерпретаторам такое намного легче оптимизировать.

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417 (таймстамп)


// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
// число в JSON остаётся числом
alert(JSON.stringify(1)) // 1
// строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
alert(JSON.stringify('test')) // "test"
alert(JSON.stringify(true)); // true
alert(JSON.stringify([1, 2, 3])); // [1,2,3]


// JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// Свойства-функции (методы).
// Символьные ключи и значения.
// Свойства, содержащие undefined.
let user = {
    sayHi() { // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
};

alert(JSON.stringify(user)); // {} (пустой объект)

// Вот типичные ошибки в написанном от руки JSON (иногда приходится писать его для отладки):
JSON.parse(json);
let json = `{
  name: "John",                     // Ошибка: имя свойства без кавычек
  "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
  'isAdmin': false,                 // Ошибка: одинарные кавычки в ключе (должны быть двойными)
  "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения
  "gender": "male"                  // Ошибка: отсутствует запятая после непоследнего свойства
  "friends": [0,1,2,3],             // Ошибка: не должно быть запятой после последнего свойства
}`;

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;
schedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
alert(schedule.meetups[1].date.getDate()); // 18 - отлично!


// Итеративный способ: цикл for:
function pow(x, n) {
    let result = 1;
    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

alert(pow(2, 3)); // 8
// Рекурсивный способ: упрощение задачи и вызов функцией самой себя:
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(2, 3)); // 8


// Остаточные параметры (...)
// Многие встроенные функции JavaScript поддерживают произвольное количество аргументов.
// Math.max(arg1, arg2, ..., argN) – вычисляет максимальное число из переданных.
// Object.assign(dest, src1, ..., srcN) – копирует свойства из исходных объектов src1..N в
function sum(a, b) {
    return a + b;
}

function sumAll(...args) { // args — имя массива
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6
// Остаточные параметры должны располагаться в конце
// Остаточные параметры собирают все остальные аргументы, поэтому бессмысленно писать что-либо после них. Это вызовет ошибку:
// function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
// Ошибка
// }


// Переменная "arguments"
// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.
function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");
// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");

// Стрелочные функции не имеют "arguments"
// Если мы обратимся к arguments из стрелочной функции, то получим аргументы внешней «нормальной» функции.
function f() {
    let showArg = () => alert(arguments[0]);
    showArg(2);
}

f(1); // 1
// Как мы помним, у стрелочных функций нет собственного this. Теперь мы знаем, что нет и своего объекта arguments.
let arr = [3, 5, 1];
alert(Math.max(arr)); // NaN
let arr = [3, 5, 1];
alert(Math.max(...arr)); // 5 (оператор "раскрывает" массив в список аргументов)
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(...arr1, ...arr2)); // 8
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25


let str = "Привет";
alert([...str]); // П,р,и,в,е,т
// Если переменная объявлена внутри блока кода {...}, то она видна только внутри этого блока.
{
    // показать сообщение
    let message = "Hello";
    alert(message);
}
{
    // показать другое сообщение
    let message = "Goodbye";
    alert(message);
}


// Функция называется «вложенной», когда она создаётся внутри другой функции.
function sayHiBye(firstName, lastName) {
    // функция-помощник, которую мы используем ниже
    function getFullName() {
        return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
}

// Ниже, makeCounter создает функцию «счётчик», которая при каждом вызове возвращает следующее число:
function makeCounter() {
    let count = 0;
    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2


// Замыкания
// В программировании есть общий термин: «замыкание», – который должен знать каждый разработчик.
// Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
// В некоторых языках это невозможно, или функция должна быть написана специальным образом,
// чтобы получилось замыкание. Но, как было описано выше, в JavaScript, все функции изначально являются
// замыканиями (есть только одно исключение, про которое будет рассказано

// Для «var» не существует блочной области видимости


// Глобальный объект
// Глобальный объект предоставляет переменные и функции, доступные в любом месте программы.
// По умолчанию это те, что встроены в язык или среду исполнения.
// В браузере он называется window


// Объект функции, NFE
// Как мы уже знаем, в JavaScript функция – это значение.
// Каждое значение в JavaScript имеет свой тип. А функция – это какой тип?
// В JavaScript функции – это объекты.
function sayHi() {
    alert("Hi");
}

alert(sayHi.name); // sayHi // имя функции
let sayHi = function () {
    alert("Hi");
};
alert(sayHi.name); // sayHi (есть имя!)
let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye
// функция объявлена внутри массива
let arr = [function () {
}];
alert(arr[0].name); // <пустая строка>
// здесь отсутствует возможность определить имя, поэтому его нет


// Свойство «length»
// Ещё одно встроенное свойство «length» содержит количество параметров функции в её объявлении. Например:
function f1(a) {
}

function f2(a, b) {
}

function many(a, b, ...more) {
}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2


// Пользовательские свойства
// Мы также можем добавить свои собственные свойства.
// Давайте добавим свойство counter для отслеживания общего количества вызовов:
function sayHi() {
    alert("Hi");
    // давайте посчитаем, сколько вызовов мы сделали
    sayHi.counter++;
}

sayHi.counter = 0; // начальное значение
sayHi(); // Hi
sayHi(); // Hi
alert(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза


// Синтаксис "new Function"
// Существует ещё один вариант объявления функции. Он используется крайне редко, но иногда другого решения не найти.
let func = new Function([arg1, arg2, ...argN], functionBody);
// Функция создаётся с заданными аргументами arg1...argN и телом functionBody.
let sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3
// А вот функция без аргументов, в этом случае достаточно указать только тело:
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello
// let str = ... код, полученный с сервера динамически ...
let func = new Function(str);
func();


// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
function sayHi() {
    alert('Привет');
}

setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
// неправильно!
// setTimeout(sayHi(), 1000);


// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.
let timerId = setTimeout(eny);
clearTimeout(timerId);
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера
clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)
// Следующий пример выводит сообщение каждые 2 секунды. Через 5 секунд вывод прекращается:
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 5000);


/** вместо:
 let timerId = setInterval(() => alert('tick'), 2000);
 */
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);


// Прозрачное кеширование
function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }
        let result = func(x); // иначе, вызываем функцию
        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

slow = cachingDecorator(slow);
alert(slow(1)); // slow(1) кешируем
alert("Again: " + slow(1)); // возвращаем из кеша
alert(slow(2)); // slow(2) кешируем
alert("Again: " + slow(2)); // возвращаем из кеша


// Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
function say(phrase) {
    alert(this.name + ': ' + phrase);
}

let user = {name: "John"};
// 'user' становится 'this', и "Hello" становится первым аргументом
say.call(user, "Hello"); // John: Hello
let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // теперь 'this' передаётся правильно
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
alert(worker.slow(2)); // работает
alert(worker.slow(2)); // работает, не вызывая первоначальную функцию (кешируется)


// Потеря «this»
// Мы уже видели примеры потери this. Как только метод передаётся отдельно от объекта – this теряется.


let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000); // Привет, undefined!
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
setTimeout(function () {
    user.sayHi(); // Привет, Вася!
}, 1000);
// setTimeout(() => user.sayHi(), 1000); // Привет, Вася!


// В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.
// полный синтаксис будет представлен немного позже
let boundFunc = func.bind(context);
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)
sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!
// В строке (*) мы берём метод user.sayHi и привязываем его к user.
// Теперь sayHi – это «связанная» функция, которая может быть вызвана отдельно или передана в setTimeout (контекст всегда будет правильным).
// Здесь мы можем увидеть, что bind исправляет только this, а аргументы передаются как есть:
let user = {
    firstName: "Вася",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    }
};

let say = user.say.bind(user);
say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")
// Удобный метод: bindAll
// Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}


// У стрелочных функций нет «this»
// Как мы помним из главы Методы объекта, "this", у стрелочных функций нет this.
// Если происходит обращение к this, его значение берётся снаружи.
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
group.showList();
// Здесь внутри forEach использована стрелочная функция, таким образом this.title в ней будет иметь точно такое же значение, как в методе showList: group.title.

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined
            alert(this.title + ': ' + student)
        });
    }
};
group.showList();

// У стрелочных функций также нет переменной arguments.
function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
// То же самое без стрелочной функции выглядело бы так:
function defer(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}

// Здесь мы были вынуждены создать дополнительные переменные args и ctx, чтобы функция внутри setTimeout могла получить их.
// Итого
// Стрелочные функции:
// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// (У них также нет super, но мы про это не говорили. Про это будет в главе Наследование классов).
// Всё это потому, что они предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем. И они отлично справляются с этой задачей!


// Флаги свойств
// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).
// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
let user = {
    name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
// Например, здесь создаётся свойство name, все флаги которого имеют значение false:
let user = {};
Object.defineProperty(user, "name", {
    value: "John"
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг writable:
let user = {
    name: "John"
};
Object.defineProperty(user, "name", {
    writable: false
});
user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'


// Ошибки появляются только в строгом режиме
// В нестрогом режиме, без use strict, мы не увидим никаких ошибок при записи
// в свойства «только для чтения» и т.п. Но эти операции всё равно не будут выполнены успешно. Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

// Неперечислимое свойство
let user = {
    name: "John",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user, "toString", {
    enumerable: false
});
// Теперь наше свойство toString пропало из цикла:
for (let key in user) alert(key); // name
// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.


Object.defineProperties(user, {
    name: {value: "John", writable: false},
    surname: {value: "Smith", writable: false},
    // ...
});


// Свойства - геттеры и сеттеры
let obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },
    set propName(value) {
        // сеттер, срабатывает при записи obj.propName = value
    }
};


// Дескрипторы свойств доступа
// Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных.
// Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.
// То есть, дескриптор аксессора может иметь:
// get – функция без аргументов, которая сработает при чтении свойства,
// set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
// enumerable – то же самое, что и для свойств-данных,
// configurable – то же самое, что и для свойств-данных.
// Например, для создания аксессора fullName при помощи defineProperty мы можем передать дескриптор с использованием get и set:

let user = {
    name: "John",
    surname: "Smith"
};
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

alert(user.fullName); // John Smith
for (let key in user) alert(key); // name, surname
// Ещё раз заметим, что свойство объекта может быть либо свойством-аксессором (с методами get/set), либо свойством-данным (со значением value).
// При попытке указать и get, и value в одном дескрипторе будет ошибка:
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },
    value: 2
});


// Умные геттеры/сеттеры
// Геттеры/сеттеры можно использовать как обёртки над «реальными» значениями свойств, чтобы получить больше контроля над операциями с ними.
// Например, если мы хотим запретить устанавливать короткое имя для user, мы можем использовать сеттер name для проверки, а само значение хранить в отдельном свойстве _name:
let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
alert(user.name); // Pete
user.name = ""; // Имя слишком короткое...


// Прототипы, наследование

// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object,
// а оно отсутствует, JavaScript автоматически берёт его из прототипа.
// В программировании такой механизм называется «прототипным наследованием».
// Многие интересные возможности языка и техники программирования основываются на нём.

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};
// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (из rabbit)


// Операция записи не использует прототип
// Прототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.
// В приведённом ниже примере мы присваиваем rabbit собственный метод walk:

let animal = {
    eats: true,
    walk() {
        /* этот метод не будет использоваться в rabbit */
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk = function () {
    alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

// Свойства-аксессоры – исключение, так как запись в него обрабатывается функцией-сеттером. То есть это фактически вызов функции.
// По этой причине admin.fullName работает корректно в приведённом ниже коде:
let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)
// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper
// Здесь в строке (*) свойство admin.fullName имеет геттер в прототипе user, поэтому вызывается он. В строке (**) свойство также имеет сеттер в прототипе, который и будет вызван.
// Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.
// Цикл for…in
// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// Object.keys возвращает только собственные ключи
alert(Object.keys(rabbit)); // jumps
// for..in проходит и по своим, и по унаследованным ключам
for (let prop in rabbit) alert(prop); // jumps, затем eats

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key):
// он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.
let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
    } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
    }
}


// F.prototype
// Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.
let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal
alert(rabbit.eats); // true
// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
// F.prototype используется только в момент вызова new F
// F.prototype используется только при вызове new F и присваивается в качестве свойства [[Prototype]] нового объекта.
// Если после создания свойство F.prototype изменится (F.prototype = <другой объект>), то новые объекты, созданные с помощью new F, будут иметь в качестве [[Prototype]] другой объект, а уже существующие объекты сохранят старый.
// У каждой функции (за исключением стрелочных) по умолчанию уже есть свойство "prototype".
// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.
function Rabbit() {
}

// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
alert(Rabbit.prototype.constructor == Rabbit); // true
// Соответственно, если мы ничего не меняем, то свойство constructor будет доступно всем кроликам через [[Prototype]]:
function Rabbit() {
}

// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)


// Встроенные прототипы
// Свойство "prototype" широко используется внутри самого языка JavaScript. Все встроенные функции-конструкторы используют его.
// …Но краткая нотация obj = {} – это то же самое, что и obj = new Object()
// Таким образом, когда вызывается obj.toString(), метод берётся из Object.prototype.
let obj = {};
alert(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString
// Обратите внимание, что по цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]:
alert(Object.prototype.__proto__); // null


//Другие встроенные прототипы
// Другие встроенные объекты, такие как Array, Date, Function и другие, также хранят свои методы в прототипах.
// Например, при создании массива [1, 2, 3] внутренне используется конструктор массива Array.
// Поэтому прототипом массива становится Array.prototype, предоставляя ему свои методы. Это позволяет эффективно использовать память.

let arr = [1, 2, 3];
// наследует ли от Array.prototype?
alert(arr.__proto__ === Array.prototype); // true
// затем наследует ли от Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true
// и null на вершине иерархии
alert(arr.__proto__.__proto__.__proto__); // null


//В браузерных инструментах, таких как консоль разработчика, можно посмотреть цепочку наследования (возможно, потребуется использовать console.dir для встроенных объектов):

//Самое сложное происходит со строками, числами и булевыми значениями.
// Как мы помним, они не объекты. Но если мы попытаемся получить доступ к их свойствам,
// то тогда будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean, который предоставит методы и после этого исчезнет.


//В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.
// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.


//Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.
// Современные же методы это:
// Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.


let animal = {
    eats: true
};
// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}


// Класс: базовый синтаксис
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// Использование:
let user = new User("Иван");
user.sayHi();


//В JavaScript класс – это разновидность функции.

//Вот что на самом деле делает конструкция class User {...}:
// Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.
// При вызове метода объекта new User он будет взят из прототипа, как описано в главе F.prototype. Таким образом, объекты new User имеют доступ к методам класса.

// Можно проверить вышесказанное и при помощи кода:

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// класс - это функция
alert(typeof User); // function
// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true
// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // sayHi() { alert(this.name); }
// в прототипе ровно 2 метода
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//В отличие от обычных функций, конструктор класса не может быть вызван без new:
//Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".
//Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.
//Как и функции, классы можно определять внутри другого выражения, передавать, возвращать, присваивать и т.д.

let User = class MyClass {
    sayHi() {
        alert(MyClass); // имя MyClass видно только внутри класса
    }
};
new User().sayHi(); // работает, выводит определение MyClass
alert(MyClass); // ошибка, имя MyClass не видно за пределами класса


// Мы даже можем динамически создавать классы «по запросу»:
function makeClass(phrase) {
    // объявляем класс и возвращаем его
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}

// Создаём новый класс
let User = makeClass("Привет");
new User().sayHi(); // Привет


// Как и в литеральных объектах, в классах можно объявлять вычисляемые свойства, геттеры/сеттеры и т.д.
// Вот пример user.name, реализованного с использованием get/set:

class User {
    constructor(name) {
        // вызывает сеттер
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }

}

let user = new User("Иван");
alert(user.name); // Иван

user = new User(""); // Имя слишком короткое.

// _, which is frequently used to preface the name of an object's property or method that is private.
// This is a quick and easy way to immediately identify a private class member


//MyClass технически является функцией (той, которую мы определяем как constructor), в то время как методы, геттеры и сеттеры записываются в MyClass.prototype.
class MyClass {
    prop = value; // свойство
    constructor(...) { // конструктор
        // ...
    }

    method(...) {
    } // метод
    get something(...) {
    } // геттер
    set something(...) {
    } // сеттер
    [Symbol.iterator]() {
    } // метод с вычисляемым именем (здесь - символом)
    // ...
}


//Наследование классов
// Наследование классов – это способ расширения одного класса другим классом.
//
// Таким образом, мы можем добавить новый функционал к уже существующему.
//
// Ключевое слово «extends»
// Допустим, у нас есть класс Animal:

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal("Мой питомец");

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!

//Объект класса Rabbit имеет доступ как к методам Rabbit,
// таким как rabbit.hide(), так и к методам Animal, таким как rabbit.run().
// Внутри ключевое слово extends работает по старой доброй механике прототипов.
// Оно устанавливает Rabbit.prototype.[[Prototype]] в Animal.prototype. Таким образом, если метода не оказалось в Rabbit.prototype, JavaScript берет его из Animal.prototype.


//Синтаксис создания класса допускает указывать после extends не только класс, но и любое выражение.
// Пример вызова функции, которая генерирует родительский класс:
function f(phrase) {
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

class User extends f("Привет") {
}

new User().sayHi(); // Привет
// Здесь class User наследует от результата вызова f("Привет").
// Это может быть полезно для продвинутых приёмов проектирования,
// где мы можем использовать функции для генерации классов в зависимости от многих условий и затем наследовать и

// Переопределение методов
// Теперь давайте продвинемся дальше и переопределим метод. По умолчанию все методы, не указанные в классе Rabbit, берутся непосредственно «как есть» из класса Animal.
// Но если мы укажем в Rabbit собственный метод, например stop(), то он будет использован вместо него:

class Rabbit extends Animal {
    stop() {
        // ...теперь это будет использоваться для rabbit.stop()
        // вместо stop() из класса Animal
    }
}

// У классов есть ключевое слово "super" для таких случаев.
//
// super.method(...) вызывает родительский метод.
// super(...) для вызова родительского конструктора (работает только внутри нашего конструктора).
// Пусть наш кролик автоматически прячется при остановке:
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} стоит.`);
    }

}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }

    stop() {
        super.stop(); // вызываем родительский метод stop
        this.hide(); // и затем hide
    }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!


//У стрелочных функций нет super
// Как упоминалось в главе Повторяем стрелочные функции, стрелочные функции не имеют super.
// При обращении к super стрелочной функции он берётся из внешней функции:
class Rabbit extends Animal {
    stop() {
        setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
    }
}

// В примере super в стрелочной функции тот же самый, что и в stop(), поэтому метод отрабатывает как и ожидается. Если бы мы указали здесь «обычную» функцию, была бы ошибка:
// Unexpected super
setTimeout(function () {
    super.stop()
}, 1000);


//Переопределение конструктора
// С конструкторами немного сложнее.
// До сих пор у Rabbit не было своего конструктора.
// Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, то автоматически создаётся такой «пустой» конструктор:
class Rabbit extends Animal {
    // генерируется для классов-потомков, у которых нет своего конструктора
    constructor(...args) {
        super(...args);
    }
}


// Давайте добавим конструктор для Rabbit. Он будет устанавливать earLength в дополнение к name:
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    // ...
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }

    // ...
}

// Не работает!
let rabbit = new Rabbit("Белый кролик", 10); // Error: this is not defined.
// Упс! При создании кролика – ошибка! Что не так?
// Конструкторы в наследуемых классах должны обязательно вызывать super(...), и (!) делать это перед использованием this..


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    // ...
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    // ...
}

// теперь работает
let rabbit = new Rabbit("Белый кролик", 10);
alert(rabbit.name); // Белый кролик
alert(rabbit.earLength); // 10


class Animal {
    name = 'animal';

    constructor() {
        alert(this.name); // (*)
    }
}

class Rabbit extends Animal {
    name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal
// Здесь, класс Rabbit расширяет Animal и переопределяет поле name своим собственным значением.
//Другими словами, родительский конструктор всегда использует своё собственное значение поля, а не переопределённое.


class Animal {
    showName() {  // вместо this.name = 'animal'
        alert('animal');
    }

    constructor() {
        this.showName(); // вместо alert(this.name);
    }
}

class Rabbit extends Animal {
    showName() {
        alert('rabbit');
    }
}

new Animal(); // animal
new Rabbit(); // rabbit
// Обратите внимание: теперь результат другой.
//  И это то, чего мы, естественно, ожидаем. Когда родительский конструктор вызывается в производном классе, он использует переопределённый метод.
// …Но для полей класса это не так. Как уже было сказано, родительский конструктор всегда использует родительское поле.


//
// Итого
// Чтобы унаследовать от класса: class Child extends Parent:
// При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
//     При переопределении конструктора:
//     Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
//     При переопределении другого метода:
//     Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
//     Внутренние детали:
//     Методы запоминают свой объект во внутреннем свойстве [[HomeObject]]. Благодаря этому работает super, он в его прототипе ищет родительские методы.
//     Поэтому копировать метод, использующий super, между разными объектами небезопасно.
//     Также:
//
// У стрелочных функций нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.


//Статические свойства и методы
// Мы также можем присвоить метод самому классу. Такие методы называются статическими.
// В объявление класса они добавляются с помощью ключевого слова static, например:
class User {
    static staticMethod() {
        alert(this === User);
    }
}

User.staticMethod(); // true
// Это фактически то же самое, что присвоить метод напрямую как свойство функции:
class User {
}

User.staticMethod = function () {
    alert(this === User);
};
// Значением this при вызове User.staticMethod() является сам конструктор класса User (правило «объект до точки»).


// Например, есть объекты статей Article, и нужна функция для их сравнения.
// Естественное решение – сделать для этого статический метод Article.compare:

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// использование
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert(articles[0].title); // CSS
// Здесь метод Article.compare стоит «над» статьями, как средство для их сравнения. Это метод не отдельной статьи, а всего класса.
// Другим примером может быть так называемый «фабричный» метод.


class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {
        // помним, что this = Article
        return new this("Сегодняшний дайджест", new Date());
    }
}

let article = Article.createTodays();

alert(article.title); // Сегодняшний дайджест
// Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно вызывать Article.createTodays(). Ещё раз, это не метод одной статьи, а метод всего класса.

// Статические методы недоступны для отдельных объектов
// Статические методы могут вызываться для классов, но не для отдельных объектов.
article.createTodays(); /// Error: article.createTodays is not a function


// предположим, что Article - это специальный класс для управления статьями
// статический метод для удаления статьи по id:
Article.remove({id: 12345});
// ??? стандартный? главный класс имеет доступ ко всем своим созданным копиям?


//
// Статические свойства
// Новая возможность
// Эта возможность была добавлена в язык недавно. Примеры работают в последнем Chrome.
// Статические свойства также возможны, они выглядят как свойства класса, но с static в начале:
class Article {
    static publisher = "Илья Кантор";
}

alert(Article.publisher); // Илья Кантор
// Это то же самое, что и прямое присваивание Article:
Article.publisher = "Илья Кантор";


//Статические свойства и методы наследуются.


// Например, метод Animal.compare в коде ниже наследуется и доступен как Rabbit.compare:

class Animal {
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

// Наследует от Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.
// Мы можем вызвать Rabbit.compare, при этом будет вызван унаследованный Animal.compare.

//Итого
// Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса.


//Технически, статическое объявление – это то же самое, что и присвоение классу:
// MyClass.property = ...
// MyClass.method = ...
// Статические свойства и методы наследуются.
// Для class B extends A прототип класса B указывает на A: B.[[Prototype]] = A. Таким образом, если поле не найдено в B, поиск продолжается в A.


//В объектно-ориентированном программировании свойства и методы разделены на 2 группы:
//
// Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
// Внешний интерфейс – методы и свойства, доступные снаружи класса.


//В JavaScript есть два типа полей (свойств и методов) объекта:
// Публичные: доступны отовсюду. Они составляют внешний интерфейс. До этого момента мы использовали только публичные свойства и методы.
// Приватные: доступны только внутри класса. Они для внутреннего интерфейса.
//Защищённые поля не реализованы в JavaScript на уровне языка, но на практике они очень удобны, поэтому их эмулируют.


//Защищённые свойства обычно начинаются с префикса _.


class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
// Теперь доступ под контролем, поэтому указать воду ниже нуля не удалось.


//Свойство только для чтения «power»
// Давайте сделаем свойство power доступным только для чтения. Иногда нужно, чтобы свойство устанавливалось только при создании объекта и после этого никогда не изменялось.
// Это как раз требуется для кофеварки: мощность никогда не меняется.
// Для этого нам нужно создать только геттер, но не сеттер:
class CoffeeMachine {
    // ...
    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);
alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
coffeeMachine.power = 25; // Error (no setter)
// Геттеры/сеттеры
// Здесь мы использовали синтаксис геттеров/сеттеров.
//
// Но в большинстве случаев использование функций get.../set... предпочтительнее:
//
class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(100)
coffeeMachine._waterAmount = 25; // no error
// Это выглядит немного длиннее, но функции более гибкие.
// Они могут принимать несколько аргументов (даже если они нам сейчас не нужны).
// Итак, на будущее, если нам надо что-то отрефакторить, функции – более безопасный выбор.
// С другой стороны, синтаксис get/set короче, решать вам.


//Защищённые поля наследуются
// Если мы унаследуем class MegaMachine extends CoffeeMachine,
// ничто не помешает нам обращаться к this._waterAmount или this._power из методов нового класса.
// Таким образом, защищённые поля, конечно же, наследуются. В отличие от приватных полей, в чём мы убедимся ниже.


//Новая возможность
// Эта возможность была добавлена в язык недавно. В движках JavaScript пока не поддерживается или поддерживается частично, нужен полифил.


//Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.
//На уровне языка # является специальным символом, который означает, что поле приватное. Мы не можем получить к нему доступ извне или из наследуемых классов.


class CoffeeMachine {

    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
// В отличие от защищённых, функциональность приватных полей обеспечивается самим языком. Это хорошо.
// Но если мы унаследуем от CoffeeMachine, то мы не получим прямого доступа к #waterAmount. Мы будем вынуждены полагаться на геттер/сеттер waterAmount:

class MegaCoffeeMachine extends CoffeeMachine {
    method() {
        alert(this.#waterAmount); // Error: can only access from CoffeeMachine
    }
}


//Приватные поля особенные.
// Как мы помним, обычно мы можем получить доступ к полям объекта с помощью this[name]:
class User {
    sayHi() {
        let fieldName = "name";
        alert(`Hello, ${this[fieldName]}`);
    }
}

// С приватными свойствами такое невозможно: this['#name'] не работает. Это ограничение синтаксиса сделано для обеспечения приватности.


// Расширение встроенных классов
// От встроенных классов, таких как Array, Map и других, тоже можно наследовать.
// добавим один метод (можно более одного)
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false


//При помощи специального статического геттера Symbol.species можно вернуть конструктор, который JavaScript будет использовать в filter, map и других методах для создания новых объектов.
// Если бы мы хотели, чтобы методы map, filter и т. д. возвращали обычные массивы, мы могли бы вернуть Array в Symbol.species, вот так:
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // встроенные методы массива будут использовать этот метод как конструктор
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);
// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function


//Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.


class Rabbit {
}

let rabbit = new Rabbit();
alert(rabbit instanceof Rabbit); // true
function Rabbit() {
}

alert(new Rabbit() instanceof Rabbit); // true
let arr = [1, 2, 3];
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true


// примесь
let sayHiMixin = {
    sayHi() {
        alert(`Привет, ${this.name}`);
    },
    sayBye() {
        alert(`Пока, ${this.name}`);
    }
};

// использование:
class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!
// Это не наследование, а просто копирование методов.
// Таким образом, класс User может наследовать от другого класса,
// но при этом также включать в себя примеси, «подмешивающие» другие методы, например:


// Примеси могут наследовать друг друга.

let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)
    sayHi() {
        // вызываем метод родителя
        super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Пока, ${this.name}`); // (*)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!
// Обратим внимание, что при вызове родительского метода super.say()
// из sayHiMixin (строки, помеченные (*)) этот метод ищется в прототипе самой примеси, а не класса.


let eventMixin = {
    /**
     * Подписаться на событие, использование:
     * menu.on('select', function(item) { ... }
     */
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    /**
     * Отменить подписку, использование:
     * menu.off('select', handler)
     */
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    /**
     * Сгенерировать событие с указанным именем и данными
     * this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return; // обработчиков для этого события нет
        }

        // вызовем обработчики
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};
// .on(eventName, handler) – назначает функцию handler, чтобы обработать событие с заданным именем.
// Технически существует свойство _eventHandlers, в котором хранится массив обработчиков для каждого имени события, и оно просто добавляет это событие в список.
// .off(eventName, handler) – убирает функцию из списка обработчиков.
// .trigger(eventName, ...args) – генерирует событие: все назначенные обработчики из _eventHandlers[eventName] вызываются, и ...args передаются им в качестве аргументов.
class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", value => alert(`Выбранное значение: ${value}`));
menu.choose("123"); // Выбранное значение: 123


//
// try..catch работает синхронно
// Исключение, которое произойдёт в коде, запланированном «на будущее», например в setTimeout, try..catch не поймает:

try {
    setTimeout(function () {
        noSuchVariable; // скрипт упадёт тут
    }, 1000);
} catch (e) {
    alert("не сработает");
}
// Это потому, что функция выполняется позже, когда движок уже покинул конструкцию try..catch.

// Чтобы поймать исключение внутри запланированной функции, try..catch должен находиться внутри самой этой функции:

setTimeout(function () {
    try {
        noSuchVariable; // try..catch обрабатывает ошибку!
    } catch {
        alert("ошибка поймана!");
    }
}, 1000);


try {
    lalala; // ошибка, переменная не определена!
} catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

    // Можем также просто вывести ошибку целиком
    // Ошибка приводится к строке вида "name: message"
    alert(err); // ReferenceError: lalala is not defined
}


let json = '{ "age": 30 }'; // данные неполны

try {

    let user = JSON.parse(json); // <-- выполнится без ошибок

    if (!user.name) {
        throw new SyntaxError("Данные неполны: нет имени"); // (*)
    }

    alert(user.name);

} catch (e) {
    alert("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
}


try {
    alert('try');
    if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
    alert('catch');
} finally {
    alert('finally');
}


let num = +prompt("Введите положительное целое число?", 35)
let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Должно быть целое неотрицательное число");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (e) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert(`Выполнение заняло ${diff}ms`);


// Класс Error встроенный, вот его примерный код, просто чтобы мы понимали, что расширяем:
// "Псевдокод" встроенного класса Error, определённого самим JavaScript
class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
        // this.stack = '<стек вызовов>'; // нестандартное свойство, но обычно поддерживается
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}

function test() {
    throw new ValidationError("Упс!");
}

try {
    test();
} catch (err) {
    alert(err.message); // Упс!
    alert(err.name); // ValidationError
    alert(err.stack); // список вложенных вызовов с номерами строк для каждого
}


//Промисы, async/await

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('/my/script.js', function () {
    // эта функция вызовется после того, как загрузится скрипт
    // newFunction(); // теперь всё работает
// ...
});


// Колбэк в колбэке
loadScript('/my/script.js', function (script) {

    loadScript('/my/script2.js', function (script) {

        loadScript('/my/script3.js', function (script) {
            // ...и так далее, пока все скрипты не будут загружены
        });

    })

});

//Перехват ошибок

loadScript('/my/script.js', function (error, script) {
    if (error) {
        // обрабатываем ошибку
    } else {
        // скрипт успешно загружен
    }
});

//Правила таковы:
//
// Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
// Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
// Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.


// Синтаксис создания Promise:

let promise = new Promise(function (resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
});

//У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
//
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).


let promise = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
});

// resolve запустит первую функцию, переданную в .then
promise.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
);
//Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:
let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // выведет "done!" спустя одну секунду


//catch
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает то же самое:
//
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
//
// // .catch(f) это то же самое, что promise.then(null, f)
// promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).


new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .then(result => alert(result)); // <-- .then показывает "value"


new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .catch(err => alert(err));  // <-- .catch показывает ошибку


//На завершённых промисах обработчики запускаются сразу
// Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его.
// Иногда может случиться так, что промис уже выполнен, когда мы добавляем к нему обработчик.
// В таком случае эти обработчики просто запускаются немедленно:
// при создании промиса он сразу переводится в состояние "успешно завершён"
let promise = new Promise(resolve => resolve("готово!"));
promise.then(alert); // готово! (выведется сразу)


// Давайте вспомним, как выглядел вариант с колбэками:
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}

// Теперь перепишем её, используя Promise.
// Новой функции loadScript более не нужен аргумент callback. Вместо этого она будет создавать и возвращать объект Promise, который перейдет в состояние «успешно завершён», когда загрузка закончится. Внешний код может добавлять обработчики («подписчиков»), используя .then:

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));


//Цепочка промисов

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function (result) {

    alert(result); // 4
    return result * 2;

});
//Всё это работает, потому что вызов promise.then тоже возвращает промис, так что мы можем вызвать на нём следующий .then.


//Thenable
// Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод .then, такие объекты называют «thenable», и этот объект будет обработан как промис.
// Смысл в том, что сторонние библиотеки могут создавать свои собственные совместимые с промисами объекты. Они могут иметь свои наборы методов и при этом быть совместимыми со встроенными промисами, так как реализуют метод .then.
class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // будет успешно выполнено с аргументом this.num*2 через 1 секунду
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
    .then(alert); // показывает 2 через 1000мс


// Код ниже запрашивает файл user.json и загружает его содержимое с сервера:

fetch('/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function (response) {
        // response.text() возвращает новый промис,
        // который выполняется и возвращает полный ответ сервера,
        // когда он загрузится
        return response.text();
    })
    .then(function (text) {
        // ...и здесь содержимое полученного файла
        alert(text); // {"name": "iliakan", isAdmin: true}
    });

// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
    // Загружаем данные в формате json
    .then(response => response.json())
    // Делаем запрос к GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Загружаем ответ в формате json
    .then(response => response.json())
    // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });


// Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный JSON. Самый лёгкий путь перехватить все ошибки – это добавить .catch в конец цепочки:

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));


//.catch перехватывает все виды ошибок в промисах: будь то вызов reject() или ошибка, брошенная в обработчике при помощи throw.
// .then также перехватывает ошибки таким же образом, если задан второй аргумент (который является обработчиком ошибок).


// Часто применяемый трюк – пропустить массив данных через map-функцию, которая для каждого элемента создаст задачу-промис, и затем обернуть получившийся массив в Promise.all.

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));


let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
    .then(responses => {
        // все промисы успешно завершены
        for (let response of responses) {
            alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
        }

        return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then(responses => Promise.all(responses.map(r => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then(users => users.forEach(user => alert(user.name)));

//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.


// Promise.all(iterable) разрешает передавать не-промисы в iterable (перебираемом объекте)
// Обычно, Promise.all(...) принимает перебираемый объект промисов (чаще всего массив). Но если любой из этих объектов не является промисом, он передаётся в итоговый массив «как есть».
//
// Например, здесь результат: [1, 2, 3]

Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(alert); // 1, 2, 3
// Таким образом, мы можем передавать уже готовые значения, которые не являются промисами, в Promise.all, иногда это бывает удобно.


// Promise.race
// Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.

let promise = Promise.race(iterable);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), !!
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


//Promise.any
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
// Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй.
// После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.


Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});
// Как вы можете видеть, объекты ошибок для отклонённых промисов доступны в свойстве errors объекта AggregateError.


//Итого
//Мы ознакомились с шестью статическими методами класса Promise:
//Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
//Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
//status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
//value – результат, если успешно или reason – ошибка, если нет.
//Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
//Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
//Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
//Promise.reject(error) – возвращает промис с ошибкой error.
//Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.


//Обработчики промисов .then/.catch/.finally всегда асинхронны.
//Даже когда промис сразу же выполнен, код в строках ниже .then/.catch/.finally будет запущен до этих обработчиков.
let promise = Promise.resolve();
promise.then(() => alert("промис выполнен"));
alert("код выполнен"); // этот alert показывается первым


let promise = Promise.resolve();
promise.then(() => alert("промис выполнен"));
alert("код выполнен"); // этот alert показывается первым
// Если вы запустите его, сначала вы увидите код выполнен, а потом промис выполнен.


//Очередь микрозадач
//Очередь определяется как первым-пришёл-первым-ушёл (FIFO): задачи, попавшие в очередь первыми, выполняются тоже первыми.
//Выполнение задачи происходит только в том случае, если ничего больше не запущено.
//Или, проще говоря, когда промис выполнен, его обработчики .then/catch/finally попадают в очередь.
// Они пока не выполняются. Движок JavaScript берёт задачу из очереди и выполняет её, когда он освободится от выполнения текущего кода.


//Но что если порядок имеет значение для нас? Как мы можем вывести код выполнен после промис выполнен?
Promise.resolve()
    .then(() => alert("промис выполнен!"))
    .then(() => alert("код выполнен"));
//Теперь порядок стал таким, как было задумано.


//"Необработанная ошибка" возникает в случае, если ошибка промиса не обрабатывается в конце очереди микрозадач.

//Обычно, если мы ожидаем ошибку, мы добавляем .catch в конец цепочки промисов, чтобы обработать её:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
promise.catch(err => alert('поймана!'));
// не запустится, ошибка обработана
window.addEventListener('unhandledrejection', event => {
    alert(event.reason);
});

//…Но если мы забудем добавить .catch, то, когда очередь микрозадач опустеет, движок сгенерирует событие:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));

// А что, если мы поймаем ошибку, но позже? Вот так:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
setTimeout(() => promise.catch(err => alert('поймана')), 1000);
// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));
// Теперь, при запуске, мы сначала увидим «Ошибка в промисе!», а затем «поймана».
//Если бы мы не знали про очередь микрозадач, то могли бы удивиться:
// «Почему сработал обработчик unhandledrejection? Мы же поймали ошибку!».


//Но теперь мы понимаем, что событие unhandledrejection возникает,
// когда очередь микрозадач завершена: движок проверяет все промисы и,
// если какой-либо из них в состоянии «rejected», то генерируется это событие.
//В примере выше .catch, добавленный в setTimeout, также срабатывает,
// но позже, уже после возникновения unhandledrejection, так что это ни на что не влияет.


//Async/await
//Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.


// Асинхронные функции
// Начнём с ключевого слова async. Оно ставится перед функцией, вот так:
// Например, эта функция возвратит выполненный промис с результатом 1:

async function f() {
    return 1;
}

f().then(alert); // 1
// Можно и явно вернуть промис, результат будет одинаковым:
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1

//Await
// работает только внутри async–функций
let value = await promise;


// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор,
// пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

// В этом примере промис успешно выполнится через 1 секунду:

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    alert(result); // "готово!"
}

f();
// В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится.
// Это произойдёт через секунду после запуска функции. После чего в переменную result будет записан
// результат выполнения промиса, и браузер отобразит alert-окно «готово!».
// Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса,
// это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами:
// выполнять прочие скрипты, обрабатывать события и т.п.


// await нельзя использовать в обычных функциях
// Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку:
function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // SyntaxError
}


async function showAvatar() {

    // запрашиваем JSON с данными пользователя
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();


//await нельзя использовать на верхнем уровне вложенности
//Программисты, узнав об await,
// часто пытаются использовать эту возможность на верхнем уровне вложенности (вне тела функции). Но из-за того, что await работает только внутри async–функций, так сделать не получится:


// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
// Можно обернуть этот код в анонимную async–функцию, тогда всё заработает:

(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
...
})();


//await работает с «thenable»–объектами


// Асинхронные методы классов
// Для объявления асинхронного метода достаточно написать async перед именем:

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter()
    .wait()
    .then(alert); // 1
// Как и в случае с асинхронными функциями, такой метод гарантированно возвращает промис, и в его теле можно использовать await.


// Обработка ошибок
// Когда промис завершается успешно, await promise возвращает результат.
// Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.


// В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:

async function f() {

    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        // перехватит любую ошибку в блоке try: и в fetch, и в response.json
        alert(err);
    }
}

f();
// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected).
//  В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:

async function f() {
    let response = await fetch('http://no-such-url');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)


//В браузере мы можем поймать такие ошибки, используя событие unhandledrejection:
//
window.addEventListener('unhandledrejection', function (event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function () {
    throw new Error("Ошибка!");
}); // нет обработчика ошибок


//async/await отлично работает с Promise.all
//Когда необходимо подождать несколько промисов одновременно, можно обернуть их в Promise.all, и затем await:
// await будет ждать массив с результатами выполнения всех промисов
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    // ...
]);
//В случае ошибки она будет передаваться как обычно: от завершившегося с ошибкой промиса к Promise.all.
// А после будет сгенерировано исключение, которое можно отловить, обернув выражение в try..catch.


//Ключевое слово async перед объявлением функции:
//Обязывает её всегда возвращать промис.
//Позволяет использовать await в теле этой функции.
//Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:
//
//Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
//Иначе вернётся результат промиса.
//Вместе они предоставляют отличный каркас для написания асинхронного кода. Такой код легко и писать, и читать.
//
//Хотя при работе с async/await можно обходиться без promise.then/catch, иногда всё-таки приходится использовать
// эти методы (на верхнем уровне вложенности, например). Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.


//Генераторы
//Обычные функции возвращают только одно-единственное значение (или ничего).
//
//Генераторы могут порождать (yield) множество значений одно за другим, по мере необходимости.
// Генераторы отлично работают с перебираемыми объектами и позволяют легко создавать потоки данных.


// Функция-генератор
// Для объявления генератора используется специальная синтаксическая конструкция: function*, которая называется «функция-генератор».

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();
alert(generator); // [object Generator]

//Основным методом генератора является next(). При вызове он запускает выполнение кода до ближайшей
// инструкции yield <значение> (значение может отсутствовать, в этом случае оно предполагается равным undefined).
// По достижении yield выполнение функции приостанавливается, а соответствующее значение – возвращается во внешний код:
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}

// Повторный вызов generator.next() возобновит выполнение кода и вернёт результат следующего yield:
let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}

// И, наконец, последний вызов завершит выполнение функции и вернёт результат return:
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}

// Новые вызовы generator.next() больше не имеют смысла. Впрочем, если они и будут, то не вызовут ошибки, но будут возвращать один и тот же объект: {done: true}.


// function* f(…) или function *f(…)?
// Нет разницы, оба синтаксиса корректны.


// Перебор генераторов
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

for (let value of generator) {
    alert(value); // 1, затем 2
}
// …Но обратите внимание: пример выше выводит значение 1, затем 2. Значение 3 выведено не будет!
//Это из-за того, что перебор через for..of игнорирует последнее значение, при котором done: true.



function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
// В коде выше ...generateSequence() превращает перебираемый объект-генератор в массив элементов





// Композиция генераторов
// сначала цифры 0..9 (с кодами символов 48…57)
// за которыми следуют буквы в верхнем регистре A..Z (коды символов 65…90)
// за которыми следуют буквы алфавита a..z (коды символов 97…122)
//Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой (осуществлять их композицию).
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

//Итого
// Генераторы создаются при помощи функций-генераторов function* f(…) {…}.
// Внутри генераторов и только внутри них существует оператор yield.
// Внешний код и генератор обмениваются промежуточными результатами посредством вызовов next/yield.














