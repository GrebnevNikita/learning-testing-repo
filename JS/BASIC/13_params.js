
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

