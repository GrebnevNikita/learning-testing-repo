
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
    constructor() { // конструктор
        // ...
    }

    method() {
    } // метод
    get something() {
    } // геттер
    set something(aa) {
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
