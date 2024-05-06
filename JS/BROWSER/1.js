// глобальные функции доступны как методы глобального объекта:
window.sayHi();

alert(window.innerHeight); // внутренняя высота окна браузера


//Document Object Model, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

// заменим цвет фона на красный,
document.body.style.background = "red";

// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 1000);

//Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

alert(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
    location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}

//Нельзя получить доступ к элементу, которого ещё не существует в момент выполнения скрипта.





for (let i = 0; i < document.body.childNodes.length; i++) {
    alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
}


//Коллекции перебираются циклом for..of. Некоторые начинающие разработчики пытаются использовать для этого цикл for..in.

//Следующий узел того же родителя (следующий сосед) – в свойстве nextSibling, а предыдущий – в previousSibling.


let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
    alert(elem.innerHTML); // "тест", "пройден"
}


//Псевдоклассы в CSS-селекторе, в частности :hover и :active, также поддерживаются. Например, document.querySelectorAll(':hover')
// let inputs = table.getElementsByTagName('input');

//Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа и автоматически обновляются при его изменении.
// <div>First div</div>
//
// <script>
//     let divs = document.getElementsByTagName('div');
//     alert(divs.length); // 1
// </script>
//
// <div>Second div</div>
//
// <script>
//     alert(divs.length); // 2
// </script>

//Напротив, querySelectorAll возвращает статическую коллекцию. Это похоже на фиксированный массив элементов.
// <div>First div</div>
//
// <script>
//     let divs = document.querySelectorAll('div');
//     alert(divs.length); // 1
// </script>
//
// <div>Second div</div>
//
// <script>
//     alert(divs.length); // 1
// </script>


document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";
document.getElementById("demo").innerHTML = "Hello JavaScript!";






















