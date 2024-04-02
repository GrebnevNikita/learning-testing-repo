Анонимные функции ¶
Анонимные функции, которые также знают как замыкания (closures) — функции без имени.
Анонимные функции вызывают или передают как значения параметрам с типом callable.

<?php
echo preg_replace_callback('~-([a-z])~', function ($match) {
    return strtoupper($match[1]);
}, 'hello-world');
// outputs helloWorld
?>
Пример присваивания анонимной функции как значения переменной

<?php

$greet = function($name) {
    printf("Привет, %s\r\n", $name);
};

$greet('Мир');
$greet('PHP');

?>

Пример наследования переменных из родительской области видимости

<?php

$message = 'привет';

// Без конструкции use
$example = function () {
    var_dump($message);
};
$example();

// Наследуем переменную $message
$example = function () use ($message) {
    var_dump($message);
};
$example();

// Анонимная функция наследует переменную с тем значением, которое переменная
// содержала перед определением функции, а не в месте вызова функции
$message = 'мир';
$example();

// Сбросим message
$message = 'привет';

// Наследование по ссылке
$example = function () use (&$message) {
    var_dump($message);
};
$example();

// Значение, которое изменили в родительской области видимости,
// отражается внутри вызова функции
$message = 'мир';
echo $example();

// Замыкания умеют принимать обычные аргументы
$example = function ($arg) use ($message) {
    var_dump($arg . ', ' . $message);
};
$example("привет");

// Объявление типа значения, которое вернёт функция, идёт после конструкции use
$example = function () use ($message): string {
    return "привет, $message";
};
var_dump($example());

?>
Вывод приведённого примера будет похож на:

Notice: Undefined variable: message in /example.php on line 6
NULL
string(12) "привет"
string(12) "привет"
string(12) "привет"
string(6) "мир"
string(20) "привет, мир"
string(20) "привет, мир"

