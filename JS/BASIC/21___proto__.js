
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

