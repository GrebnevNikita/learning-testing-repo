// export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
//     import позволяет импортировать функциональность из других модулей.
//     Например, если у нас есть файл sayHi.js, который экспортирует функцию:

// 📁 sayHi.js
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// …Тогда другой файл может импортировать её и использовать:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
// Директива import загружает модуль по пути ./sayHi.js относительно текущего файла и записывает экспортированную функцию sayHi в соответствующую переменную.

//Модули не работают локально. Только через HTTP(s)
// Если вы попытаетесь открыть веб-страницу локально, через протокол file://, вы обнаружите, что директивы import/export не работают.
// Для тестирования модулей используйте локальный веб-сервер, например,
// static-server или используйте возможности «живого сервера» вашего редактора, например, расширение Live Server для VS Code.


// В модулях всегда используется режим use strict. Например, присваивание к необъявленной переменной вызовет ошибку.

// <script type="module">
//     a = 5; // ошибка
// </script>


// Своя область видимости переменных
// Каждый модуль имеет свою собственную область видимости. Другими словами, переменные и функции, объявленные в модуле, не видны в других скриптах.

// <!doctype html>
// <script type="module" src="user.js"></script>
// <script type="module" src="hello.js"></script>


import {user} from './user.js';

document.body.innerHTML = user; // John
// В браузере также существует независимая область видимости для каждого скрипта <script type="module">:

// <script type="module">
//     // Переменная доступна только в этом модуле
//     let user = "John";
// </script>
//
// <script type="module">
//     alert(user); // Error: user is not defined
// </script>


//
// Если нам нужно сделать глобальную переменную уровня всей страницы, можно явно присвоить её объекту window,
// тогда получить значение переменной можно обратившись к window.user. Но это должно быть исключением, требующим веской причины.


//Код в модуле выполняется только один раз при импорте
// Если один и тот же модуль используется в нескольких местах,
// то его код выполнится только один раз, после чего экспортируемая функциональность передаётся всем импортёрам.


// 📁 alert.js
alert("Модуль выполнен!");
// Импорт одного и того же модуля в разных файлах

// 📁 1.js
// import `./alert.js`; // Модуль выполнен!

// 📁 2.js
// import `./alert.js`; // (ничего не покажет)


// Например, модуль admin.js предоставляет определённую функциональность, но ожидает передачи учётных данных в объект admin извне:

// 📁 admin.js
export let admin = {};

export function sayHi() {
    alert(`Ready to serve, ${admin.name}!`);
}

// В init.js, первом скрипте нашего приложения, мы установим admin.name. Тогда все это увидят, включая вызовы, сделанные из самого admin.js:

// 📁 init.js
import {admin} from './admin.js';

admin.name = "Pete";
// Другой модуль тоже увидит admin.name:

// 📁 other.js
import {admin, sayHi} from './admin.js';

alert(admin.name); // Pete
sayHi(); // Ready to serve, Pete!


// В модуле «this» не определён

//     <script>
//         alert(this); // window
//     </script>
//
// <script type="module">
//     alert(this); // undefined
// </script>


// Модули являются отложенными (deferred)
// Модули всегда выполняются в отложенном (deferred) режиме


//Другими словами:
//
// загрузка внешних модулей, таких как <script type="module" src="...">, не блокирует обработку HTML.
// модули, даже если загрузились быстро, ожидают полной загрузки HTML документа, и только затем выполняются.
// сохраняется относительный порядок скриптов: скрипты, которые идут раньше в документе, выполняются раньше.
// Как побочный эффект, модули всегда видят полностью загруженную HTML-страницу, включая элементы под ними.


// <script type="module">
//     alert(typeof button); // object: скрипт может 'видеть' кнопку под ним
//     // так как модули являются отложенными, то скрипт начнёт выполнятся только после полной загрузки страницы
// </script>
//
// Сравните с обычным скриптом ниже:
//
//     <script>
//         alert(typeof button); // Ошибка: кнопка не определена, скрипт не видит элементы под ним
//         // обычные скрипты запускаются сразу, не дожидаясь полной загрузки страницы
//     </script>
//
// <button id="button">Кнопка</button>


//Атрибут async работает во встроенных скриптах
<!-- загружаются зависимости (analytics.js) и скрипт запускается -->
<!-- модуль не ожидает загрузки документа или других тэгов <script> -->
// <script async type="module">
//     import {counter} from './analytics.js';
//
//     counter.count();
// </script>


// Скрипт выполнит импорт (загрузит ./analytics.js) и сразу запустится, когда будет готов, даже если HTML документ ещё не будет загружен, или если другие скрипты ещё загружаются.

//Это очень полезно, когда модуль ни с чем не связан, например для счётчиков, рекламы, обработчиков событий.
//


//Внешние скрипты
// Внешние скрипты с атрибутом type="module" имеют два отличия:
// Внешние скрипты с одинаковым атрибутом src запускаются только один раз:
// <!-- скрипт my.js загрузится и будет выполнен только один раз -->
// <script type="module" src="my.js"></script>
// <script type="module" src="my.js"></script>
// Внешний скрипт, который загружается с другого домена, требует указания заголовков CORS. Другими словами, если модульный скрипт загружается с другого домена, то удалённый сервер должен установить заголовок Access-Control-Allow-Origin означающий, что загрузка скрипта разрешена.
//
// <!-- another-site.com должен указать заголовок Access-Control-Allow-Origin -->
// <!-- иначе, скрипт не выполнится -->
// <script type="module" src="http://another-site.com/their.js"></script>
// Это обеспечивает лучшую безопасность по умолчанию.


// Не допускаются «голые» модули
// В браузере import должен содержать относительный или абсолютный путь к модулю. Модули без пути называются «голыми» (bare). Они не разрешены в import.
import {sayHi} from 'sayHi'; // Ошибка, "голый" модуль
// путь должен быть, например './sayHi.js' или абсолютный


//Инструменты сборки
// В реальной жизни модули в браузерах редко используются в «сыром» виде. Обычно, мы объединяем модули вместе, используя специальный инструмент, например Webpack и после выкладываем код на рабочий сервер.
//
// Одно из преимуществ использования сборщика – он предоставляет больший контроль над тем, как модули ищутся, позволяет использовать «голые» модули и многое другое «своё», например CSS/HTML-модули.
//
// Сборщик делает следующее:
//
// Берёт «основной» модуль, который мы собираемся поместить в <script type="module"> в HTML.
// Анализирует зависимости (импорты, импорты импортов и так далее)
// Собирает один файл со всеми модулями (или несколько файлов, это можно настроить), перезаписывает встроенный import функцией импорта от сборщика, чтобы всё работало. «Специальные» типы модулей, такие как HTML/CSS тоже поддерживаются.
// В процессе могут происходить и другие трансформации и оптимизации кода:
// Недостижимый код удаляется.
// Неиспользуемые экспорты удаляются («tree-shaking»).
// Специфические операторы для разработки, такие как console и debugger, удаляются.
// Современный синтаксис JavaScript также может быть трансформирован в предыдущий стандарт, с похожей функциональностью, например, с помощью Babel.
// Полученный файл можно минимизировать (удалить пробелы, заменить названия переменных на более короткие и т.д.).


// Экспорт до объявления
// Мы можем пометить любое объявление как экспортируемое, разместив export перед ним, будь то переменная, функция или класс.

// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
    constructor(name) {
        this.name = name;
    }
}


// Экспорт отдельно от объявления
// Также можно написать export отдельно.

// Здесь мы сначала объявляем, а затем экспортируем:

// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // список экспортируемых переменных


// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
// Но если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя import * as <obj>. Например:

// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');


// Импорт «как»
// Мы также можем использовать as, чтобы импортировать под другими именами.

// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
// Экспортировать «как»
// Аналогичный синтаксис существует и для export.

// 📁 say.js
...
export {sayHi as hi, sayBye as bye};
// Теперь hi и bye – официальные имена для внешнего кода, их нужно использовать при импорте:

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!


// Ставим export default перед тем, что нужно экспортировать:

// 📁 user.js
export default class User { // просто добавьте "default"
    constructor(name) {
        this.name = name;
    }
}
// Заметим, в файле может быть не более одного export default.
// …И потом импортируем без фигурных скобок:

// 📁 main.js
import User from './user.js'; // не {User}, просто User

new User('John');


// Так как в файле может быть максимум один export default, то экспортируемая сущность не обязана иметь имя.
export default class { // у класса нет имени
    constructor() {
    }
}
export default function (user) { // у функции нет имени
    alert(`Hello, ${user}!`);
}
// экспортируем значение, не создавая переменную
export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// Например, чтобы экспортировать функцию отдельно от её объявления:

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// то же самое, как если бы мы добавили "export default" перед функцией
export {sayHi as default};
// Или, ещё ситуация, давайте представим следующее: модуль user.js экспортирует одну сущность «по умолчанию» и несколько именованных (редкий, но возможный случай):

// 📁 user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// Вот как импортировать экспорт по умолчанию вместе с именованным экспортом:

// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');


// Реэкспорт
// Синтаксис «реэкспорта» export ... from ... позволяет импортировать что-то и тут же экспортировать, возможно под другим именем, вот так:

export {sayHi} from './say.js'; // реэкспортировать sayHi

export {default as User} from './user.js'; // реэкспортировать default


// Выражение import()
// Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.
//
//     Использовать его мы можем динамически в любом месте кода, например, так:

let modulePath = prompt("Какой модуль загружать?");

import(modulePath)
    .then(obj => '<объект модуля>')
    .catch(err => '<ошибка загрузки, например если нет такого модуля>')
// Или если внутри асинхронной функции, то можно let module = await import(modulePath).
//   Например, если у нас есть такой модуль say.js:

// 📁 say.js*/

export function hi() {
    alert(`Привет`);
}

export function bye() {
    alert(`Пока`);
}

// …То динамический импорт может выглядеть так:

let {hi, bye} = await import('./say.js');

hi();
bye();
// А если в say.js указан экспорт по умолчанию:
//
// 📁 say.js
export default function () {
    alert("Module loaded (export default)!");
}

// …То для доступа к нему нам следует взять свойство default объекта модуля:

let obj = await import('./say.js');
let say = obj.default;
// или, одной строкой: let {default: say} = await import('./say.js');

say();








