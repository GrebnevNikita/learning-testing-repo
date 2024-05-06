

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

