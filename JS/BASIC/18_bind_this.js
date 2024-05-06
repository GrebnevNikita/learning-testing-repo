
// Потеря «this»
// Мы уже видели примеры потери this. Как только метод передаётся отдельно от объекта – this теряется.


let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000); // Привет, undefined!
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
setTimeout(function () {
    user.sayHi(); // Привет, Вася!
}, 1000);
// setTimeout(() => user.sayHi(), 1000); // Привет, Вася!


// В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.
// полный синтаксис будет представлен немного позже
let boundFunc = func.bind(context);
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)
sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!
// В строке (*) мы берём метод user.sayHi и привязываем его к user.
// Теперь sayHi – это «связанная» функция, которая может быть вызвана отдельно или передана в setTimeout (контекст всегда будет правильным).
// Здесь мы можем увидеть, что bind исправляет только this, а аргументы передаются как есть:
let user = {
    firstName: "Вася",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    }
};

let say = user.say.bind(user);
say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")
// Удобный метод: bindAll
// Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}


// У стрелочных функций нет «this»
// Как мы помним из главы Методы объекта, "this", у стрелочных функций нет this.
// Если происходит обращение к this, его значение берётся снаружи.
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
group.showList();
// Здесь внутри forEach использована стрелочная функция, таким образом this.title в ней будет иметь точно такое же значение, как в методе showList: group.title.

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined
            alert(this.title + ': ' + student)
        });
    }
};
group.showList();

// У стрелочных функций также нет переменной arguments.
function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
// То же самое без стрелочной функции выглядело бы так:
function defer(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}

// Здесь мы были вынуждены создать дополнительные переменные args и ctx, чтобы функция внутри setTimeout могла получить их.
// Итого
// Стрелочные функции:
// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// (У них также нет super, но мы про это не говорили. Про это будет в главе Наследование классов).
// Всё это потому, что они предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем. И они отлично справляются с этой задачей!
