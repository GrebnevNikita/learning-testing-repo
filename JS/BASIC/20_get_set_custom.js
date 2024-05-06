
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

