
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
