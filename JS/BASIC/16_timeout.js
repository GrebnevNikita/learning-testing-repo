
// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
function sayHi() {
    alert('Привет');
}

setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
// неправильно!
// setTimeout(sayHi(), 1000);


// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.
let timerId = setTimeout(eny);
clearTimeout(timerId);
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера
clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)
// Следующий пример выводит сообщение каждые 2 секунды. Через 5 секунд вывод прекращается:
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 5000);


/** вместо:
 let timerId = setInterval(() => alert('tick'), 2000);
 */
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

