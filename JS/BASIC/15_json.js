

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

