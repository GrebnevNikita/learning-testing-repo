



[1, 2].forEach(alert);

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
