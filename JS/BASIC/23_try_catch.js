

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
