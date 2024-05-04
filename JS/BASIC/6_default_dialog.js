


let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
// Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.
let isBoss = confirm("Ты здесь главный?");
alert(isBoss); // true, если нажата OK



ask("Вы согласны?", showOk, showCancel); // использование: функции showOk, showCancel передаются в качестве аргументов ask
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
}

function showCancel() {
}

// Мы можем переписать этот пример значительно короче, используя Function Expression:
ask(
    "Вы согласны?",
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    })


