

//Промисы, async/await

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('/my/script.js', function () {
    // эта функция вызовется после того, как загрузится скрипт
    // newFunction(); // теперь всё работает
// ...
});


// Колбэк в колбэке
loadScript('/my/script.js', function (script) {

    loadScript('/my/script2.js', function (script) {

        loadScript('/my/script3.js', function (script) {
            // ...и так далее, пока все скрипты не будут загружены
        });

    })

});

//Перехват ошибок

loadScript('/my/script.js', function (error, script) {
    if (error) {
        // обрабатываем ошибку
    } else {
        // скрипт успешно загружен
    }
});

//Правила таковы:
//
// Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
// Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
// Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.


// Синтаксис создания Promise:

let promise = new Promise(function (resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
});

//У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
//
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).


let promise = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
});

// resolve запустит первую функцию, переданную в .then
promise.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
);
//Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:
let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // выведет "done!" спустя одну секунду


//catch
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает то же самое:
//
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
//
// // .catch(f) это то же самое, что promise.then(null, f)
// promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).


new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .then(result => alert(result)); // <-- .then показывает "value"


new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .catch(err => alert(err));  // <-- .catch показывает ошибку


//На завершённых промисах обработчики запускаются сразу
// Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его.
// Иногда может случиться так, что промис уже выполнен, когда мы добавляем к нему обработчик.
// В таком случае эти обработчики просто запускаются немедленно:
// при создании промиса он сразу переводится в состояние "успешно завершён"
let promise = new Promise(resolve => resolve("готово!"));
promise.then(alert); // готово! (выведется сразу)


// Давайте вспомним, как выглядел вариант с колбэками:
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}

// Теперь перепишем её, используя Promise.
// Новой функции loadScript более не нужен аргумент callback. Вместо этого она будет создавать и возвращать объект Promise, который перейдет в состояние «успешно завершён», когда загрузка закончится. Внешний код может добавлять обработчики («подписчиков»), используя .then:

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));


//Цепочка промисов

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function (result) {

    alert(result); // 4
    return result * 2;

});
//Всё это работает, потому что вызов promise.then тоже возвращает промис, так что мы можем вызвать на нём следующий .then.


//Thenable
// Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод .then, такие объекты называют «thenable», и этот объект будет обработан как промис.
// Смысл в том, что сторонние библиотеки могут создавать свои собственные совместимые с промисами объекты. Они могут иметь свои наборы методов и при этом быть совместимыми со встроенными промисами, так как реализуют метод .then.
class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // будет успешно выполнено с аргументом this.num*2 через 1 секунду
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
    .then(alert); // показывает 2 через 1000мс


// Код ниже запрашивает файл user.json и загружает его содержимое с сервера:

fetch('/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function (response) {
        // response.text() возвращает новый промис,
        // который выполняется и возвращает полный ответ сервера,
        // когда он загрузится
        return response.text();
    })
    .then(function (text) {
        // ...и здесь содержимое полученного файла
        alert(text); // {"name": "iliakan", isAdmin: true}
    });

// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
    // Загружаем данные в формате json
    .then(response => response.json())
    // Делаем запрос к GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Загружаем ответ в формате json
    .then(response => response.json())
    // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });


// Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный JSON. Самый лёгкий путь перехватить все ошибки – это добавить .catch в конец цепочки:

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));


//.catch перехватывает все виды ошибок в промисах: будь то вызов reject() или ошибка, брошенная в обработчике при помощи throw.
// .then также перехватывает ошибки таким же образом, если задан второй аргумент (который является обработчиком ошибок).


// Часто применяемый трюк – пропустить массив данных через map-функцию, которая для каждого элемента создаст задачу-промис, и затем обернуть получившийся массив в Promise.all.

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));


let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
    .then(responses => {
        // все промисы успешно завершены
        for (let response of responses) {
            alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
        }

        return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then(responses => Promise.all(responses.map(r => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then(users => users.forEach(user => alert(user.name)));

//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.


// Promise.all(iterable) разрешает передавать не-промисы в iterable (перебираемом объекте)
// Обычно, Promise.all(...) принимает перебираемый объект промисов (чаще всего массив). Но если любой из этих объектов не является промисом, он передаётся в итоговый массив «как есть».
//
// Например, здесь результат: [1, 2, 3]

Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(alert); // 1, 2, 3
// Таким образом, мы можем передавать уже готовые значения, которые не являются промисами, в Promise.all, иногда это бывает удобно.


// Promise.race
// Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.

let promise = Promise.race(iterable);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), !!
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


//Promise.any
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
// Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй.
// После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.


Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});
// Как вы можете видеть, объекты ошибок для отклонённых промисов доступны в свойстве errors объекта AggregateError.


//Итого
//Мы ознакомились с шестью статическими методами класса Promise:
//Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
//Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
//status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
//value – результат, если успешно или reason – ошибка, если нет.
//Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
//Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
//Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
//Promise.reject(error) – возвращает промис с ошибкой error.
//Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.


//Обработчики промисов .then/.catch/.finally всегда асинхронны.
//Даже когда промис сразу же выполнен, код в строках ниже .then/.catch/.finally будет запущен до этих обработчиков.
let promise = Promise.resolve();
promise.then(() => alert("промис выполнен"));
alert("код выполнен"); // этот alert показывается первым


let promise = Promise.resolve();
promise.then(() => alert("промис выполнен"));
alert("код выполнен"); // этот alert показывается первым
// Если вы запустите его, сначала вы увидите код выполнен, а потом промис выполнен.


//Очередь микрозадач
//Очередь определяется как первым-пришёл-первым-ушёл (FIFO): задачи, попавшие в очередь первыми, выполняются тоже первыми.
//Выполнение задачи происходит только в том случае, если ничего больше не запущено.
//Или, проще говоря, когда промис выполнен, его обработчики .then/catch/finally попадают в очередь.
// Они пока не выполняются. Движок JavaScript берёт задачу из очереди и выполняет её, когда он освободится от выполнения текущего кода.


//Но что если порядок имеет значение для нас? Как мы можем вывести код выполнен после промис выполнен?
Promise.resolve()
    .then(() => alert("промис выполнен!"))
    .then(() => alert("код выполнен"));
//Теперь порядок стал таким, как было задумано.


//"Необработанная ошибка" возникает в случае, если ошибка промиса не обрабатывается в конце очереди микрозадач.

//Обычно, если мы ожидаем ошибку, мы добавляем .catch в конец цепочки промисов, чтобы обработать её:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
promise.catch(err => alert('поймана!'));
// не запустится, ошибка обработана
window.addEventListener('unhandledrejection', event => {
    alert(event.reason);
});

//…Но если мы забудем добавить .catch, то, когда очередь микрозадач опустеет, движок сгенерирует событие:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));

// А что, если мы поймаем ошибку, но позже? Вот так:
let promise = Promise.reject(new Error("Ошибка в промисе!"));
setTimeout(() => promise.catch(err => alert('поймана')), 1000);
// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));
// Теперь, при запуске, мы сначала увидим «Ошибка в промисе!», а затем «поймана».
//Если бы мы не знали про очередь микрозадач, то могли бы удивиться:
// «Почему сработал обработчик unhandledrejection? Мы же поймали ошибку!».


//Но теперь мы понимаем, что событие unhandledrejection возникает,
// когда очередь микрозадач завершена: движок проверяет все промисы и,
// если какой-либо из них в состоянии «rejected», то генерируется это событие.
//В примере выше .catch, добавленный в setTimeout, также срабатывает,
// но позже, уже после возникновения unhandledrejection, так что это ни на что не влияет.


//Async/await
//Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.


// Асинхронные функции
// Начнём с ключевого слова async. Оно ставится перед функцией, вот так:
// Например, эта функция возвратит выполненный промис с результатом 1:

async function f() {
    return 1;
}

f().then(alert); // 1
// Можно и явно вернуть промис, результат будет одинаковым:
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1

//Await
// работает только внутри async–функций
let value = await promise;


// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор,
// пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

// В этом примере промис успешно выполнится через 1 секунду:

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    alert(result); // "готово!"
}

f();
// В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится.
// Это произойдёт через секунду после запуска функции. После чего в переменную result будет записан
// результат выполнения промиса, и браузер отобразит alert-окно «готово!».
// Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса,
// это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами:
// выполнять прочие скрипты, обрабатывать события и т.п.


// await нельзя использовать в обычных функциях
// Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку:
function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // SyntaxError
}


async function showAvatar() {

    // запрашиваем JSON с данными пользователя
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();


//await нельзя использовать на верхнем уровне вложенности
//Программисты, узнав об await,
// часто пытаются использовать эту возможность на верхнем уровне вложенности (вне тела функции). Но из-за того, что await работает только внутри async–функций, так сделать не получится:


// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
// Можно обернуть этот код в анонимную async–функцию, тогда всё заработает:

(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
...
})();


//await работает с «thenable»–объектами


// Асинхронные методы классов
// Для объявления асинхронного метода достаточно написать async перед именем:

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter()
    .wait()
    .then(alert); // 1
// Как и в случае с асинхронными функциями, такой метод гарантированно возвращает промис, и в его теле можно использовать await.


// Обработка ошибок
// Когда промис завершается успешно, await promise возвращает результат.
// Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.


// В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:

async function f() {

    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        // перехватит любую ошибку в блоке try: и в fetch, и в response.json
        alert(err);
    }
}

f();
// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected).
//  В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:

async function f() {
    let response = await fetch('http://no-such-url');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)


//В браузере мы можем поймать такие ошибки, используя событие unhandledrejection:
//
window.addEventListener('unhandledrejection', function (event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function () {
    throw new Error("Ошибка!");
}); // нет обработчика ошибок


//async/await отлично работает с Promise.all
//Когда необходимо подождать несколько промисов одновременно, можно обернуть их в Promise.all, и затем await:
// await будет ждать массив с результатами выполнения всех промисов
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    // ...
]);
//В случае ошибки она будет передаваться как обычно: от завершившегося с ошибкой промиса к Promise.all.
// А после будет сгенерировано исключение, которое можно отловить, обернув выражение в try..catch.


//Ключевое слово async перед объявлением функции:
//Обязывает её всегда возвращать промис.
//Позволяет использовать await в теле этой функции.
//Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:
//
//Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
//Иначе вернётся результат промиса.
//Вместе они предоставляют отличный каркас для написания асинхронного кода. Такой код легко и писать, и читать.
//
//Хотя при работе с async/await можно обходиться без promise.then/catch, иногда всё-таки приходится использовать
// эти методы (на верхнем уровне вложенности, например). Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.
