




// В JavaScript есть 8 основных типов данных.
// Семь из них называют «примитивными» типами данных:
// typeof
let value = true; // boolean
value = String(value); // теперь value это строка "true" // string
typeof undefined // "undefined" // undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
typeof 0 // "number" // number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
typeof 10n // "bigint" // bigint для целых чисел произвольной длины.
typeof true // "boolean" // boolean для true/false.
typeof "foo" // "string" // string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
typeof Symbol("id") // "symbol" // symbol для уникальных идентификаторов.
typeof null // "object"  (2) // null для неизвестных значений – отдельный тип, имеющий одно значение null.
typeof alert // "function"  (3)

// И один не является «примитивным» и стоит особняком:
typeof Math // "object"  (1) // object для более сложных структур данных.



alert(1 / 0); // Infinity
alert(Infinity); // Infinity
alert("не число" / 2); // NaN, такое деление является ошибкой
// NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:
// Значение NaN «прилипчиво». Любая математическая операция с NaN возвращает NaN:



alert("6" / "2"); // 3, строки преобразуются в числа

alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
alert(Number(true));        // 1
alert(Number(false));       // 0

alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Привет!")); // true
alert(Boolean("")); // false
alert(Boolean("0")); // true
// Некоторые языки (к примеру, PHP) воспринимают строку "0" как false. Но в JavaScript, если строка не пустая, то она всегда true.



let apples = "2";
let oranges = "3";
alert(+apples + +oranges); // 5 // оба операнда предварительно преобразованы в числа
alert(Number(apples) + Number(oranges)); // 5 // более длинный вариант


