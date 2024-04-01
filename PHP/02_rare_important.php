<?php
/*

$output = `php -f ./test_2.php`;
echo "<pre>$output</pre>";


phpinfo();

php -f LEARNING/test_1.php

if (str_contains($_SERVER['HTTP_USER_AGENT'], 'Firefox')) {
    echo 'Вы используете Firefox.';
}

ini_set('memory_limit', '7000M');
ini_set('max_execution_time', 1200);
session_start();

error_reporting(E_ERROR);
error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', 0);
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('html_errors', false);

htmlspecialchars() обеспечивает правильную кодировку "особых" HTML-символов так,
 чтобы вредоносный HTML или Javascript не был вставлен на вашу страницу.

htmlentities() — Преобразовывает все возможные символы в соответствующие HTML-сущности


settype($foo, "integer"); // $foo теперь 5 (целое число)
settype($bar, "string");  // $bar теперь "1" (строка)

$a_bool = true;   // логическое значение
$a_str  = "foo";  // строка
$a_str2 = 'foo';  // строка
$an_int = 12;     // целое число

echo gettype($foo);

echo get_debug_type($a_bool), "\n";//bool
echo get_debug_type($a_str), "\n";//string

 Если это целое число, увеличить на четыре
if (is_int($an_int)) {
    $an_int += 4;
}
var_dump($an_int); //int(16)

 Если $a_bool - это строка, вывести её
if (is_string($a_bool)) {
    echo "Строка: $a_bool";
}

var_dump((bool) "");        // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)


UINT_MAX	Максимальное значение для переменной типа unsigned int.	4 294 967 295 (0xffffffff)
LONG_MIN	Минимальное значение для переменной типа long.	-2 147 483 648
LONG_MAX	Максимальное значение для переменной типа long.	2 147 483 647

1-2
2-4
3-8
4-16
5-32
6-64
7-128
8-256
9-512
10-1024
11-2048
12-4096
13-8192
14-16384
15-32768
16-65536
17-131072
18-262144
19-524288
20-1048576
21-2097152
22-4194304
23-8388608
24-16777216
25-33554432
26-67108864
27-134217728
28-268435456
29-536870912
30-1073741824
31-2147483648 int 2147483647
32-4294967296
33-8589934592


var_dump
int(2305843009213693952) -61-2305843009213693952
int(4 611 686 018 427 387 904) -62-4611686018427387904
float(9.2233720368548E+18) -63-9.2233720368548E+18
float(1.844674407371E+19) -64-1.844674407371E+19

gettype   checked
integer-61-2305843009213693952
integer-62-4611686018427387904
double-63-9.2233720368548E+18
double-64-1.844674407371E+19

A float has 7 decimal digits of precision and occupies 32 bits .
A double is a 64-bit IEEE 754 double-precision floating-point number


Сравнение чисел с плавающей точкой ¶
$a и $b равны до 5-ти знаков после точки.
$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if (abs($a - $b) < $epsilon) {
    echo "true";
}
$x = 8 - 6.4;  // which is equal to 1.6
$y = 1.6;
var_dump($x == $y); // is not true
PHP thinks that 1.6 (coming from a difference) is not equal to 1.6. To make it work, use round()
var_dump(round($x, 2) == round($y, 2)); // this is true
This happens probably because $x is not really 1.6, but 1.599999.. and var_dump shows it to you as being 1.6.






$juices = array("apple", "orange", "koolaid1" => "purple");

echo "He drank some $juices[0] juice.".PHP_EOL;
echo "He drank some $juices[1] juice.".PHP_EOL;
echo "He drank some $juices[koolaid1] juice.".PHP_EOL;



class people {
    public $john = "John Smith";
    public $jane = "Jane Smith";
    public $robert = "Robert Paulsen";
    public $smith = "Smith";
}

$people = new people();

echo "$people->john drank some $juices[0] juice.";
echo "$people->john then said hello to $people->jane.";
echo "$people->john's wife greeted $people->robert.";
echo "$people->robert greeted the two $people->smith.";




$array = array(
    1    => "a",
    "1"  => "b",
    1.5  => "c",
    true => "d",
);

$array = array(
    "a",
    "b",
    6 => "c",
    "d",
);

$array = array(
    1    => 'a',
    '1'  => 'b', // значение «b» перезапишет значение «a»
    1.5  => 'c', // значение «c» перезапишет значение «b»
    -1 => 'd',
    '01'  => 'e', // поскольку это не целочисленная строка, она НЕ перезапишет ключ 1
    '1.5' => 'f', // поскольку это не целочисленная строка, она НЕ перезапишет ключ 1
    true => 'g', // значение «g» перезапишет значение «c»
    false => 'h',
    '' => 'i',
    null => 'j', // значение «j» перезапишет значение «i»
    'k', // значение «k» присваивается ключу 2. Потому что самый большой целочисленный ключ до этого был 1
    2 => 'l', // значение «l» перезапишет значение «k»
);

$array = array(
    "foo" => "bar",
    42    => 24,
    "multi" => array(
        "dimensional" => array(
            "array" => "foo"
        )
    )
);

var_dump($array["foo"]);
var_dump($array[42]);
var_dump($array["multi"]["dimensional"]["array"]);

$arr[] = 56;
$arr["x"] = 42;
unset($arr[5]); // Это удаляет элемент из массива
unset($arr);    // Это удаляет весь массив



1	E_ERROR (int)	Фатальные ошибки времени выполнения. Это неустранимые средствами самого скрипта ошибки, такие как ошибка распределения памяти и т.п. Выполнение скрипта в таком случае прекращается.
2	E_WARNING (int)	Предупреждения времени выполнения (не фатальные ошибки). Выполнение скрипта в таком случае не прекращается.
4	E_PARSE (int)	Ошибки на этапе компиляции. Должны генерироваться только парсером.
8	E_NOTICE (int)	Уведомления времени выполнения. Указывают на то, что во время выполнения скрипта произошло что-то, что может указывать на ошибку, хотя это может происходить и при обычном выполнении программы.
16	E_CORE_ERROR (int)	Фатальные ошибки, которые происходят во время запуска РНР. Такие ошибки схожи с E_ERROR, за исключением того, что они генерируются ядром PHP.
32	E_CORE_WARNING (int)	Предупреждения (не фатальные ошибки), которые происходят во время начального запуска РНР. Такие предупреждения схожи с E_WARNING, за исключением того, что они генерируются ядром PHP.
64	E_COMPILE_ERROR (int)	Фатальные ошибки на этапе компиляции. Такие ошибки схожи с E_ERROR, за исключением того, что они генерируются скриптовым движком Zend.
128	E_COMPILE_WARNING (int)	Предупреждения на этапе компиляции (не фатальные ошибки). Такие предупреждения схожи с E_WARNING, за исключением того, что они генерируются скриптовым движком Zend.
256	E_USER_ERROR (int)	Сообщения об ошибках, сгенерированные пользователем. Такие ошибки схожи с E_ERROR, за исключением того, что они генерируются в коде скрипта средствами функции PHP trigger_error().
512	E_USER_WARNING (int)	Предупреждения, сгенерированные пользователем. Такие предупреждения схожи с E_WARNING, за исключением того, что они генерируются в коде скрипта средствами функции PHP trigger_error().
1024	E_USER_NOTICE (int)	Уведомления, сгенерированные пользователем. Такие уведомления схожи с E_NOTICE, за исключением того, что они генерируются в коде скрипта, средствами функции PHP trigger_error().
2048	E_STRICT (int)	Включаются для того, чтобы PHP предлагал изменения в коде, которые обеспечат лучшее взаимодействие и совместимость кода.
4096	E_RECOVERABLE_ERROR (int)	Фатальные ошибки с возможностью обработки. Такие ошибки указывают, что, вероятно, возникла опасная ситуация, но при этом, скриптовый движок остаётся в стабильном состоянии. Если такая ошибка не обрабатывается функцией, определённой пользователем для обработки ошибок (смотрите set_error_handler()), выполнение приложения прерывается, как происходит при ошибках E_ERROR.
8192	E_DEPRECATED (int)	Уведомления времени выполнения об использовании устаревших конструкций. Включаются для того, чтобы получать предупреждения о коде, который не будет работать в следующих версиях PHP.
16384	E_USER_DEPRECATED (int)	Уведомления времени выполнения об использовании устаревших конструкций, сгенерированные пользователем. Такие уведомления схожи с E_DEPRECATED за исключением того, что они генерируются в коде скрипта, с помощью функции PHP trigger_error().
32767	E_ALL (int)	Все поддерживаемые ошибки, предупреждения и замечания.





Простая распаковка массива
Работает также с синтаксисом array().
$arr1 = [1, 2, 3];
$arr2 = [...$arr1]; // [1, 2, 3]
$arr3 = [0, ...$arr1]; // [0, 1, 2, 3]
$arr4 = [...$arr1, ...$arr2, 111]; // [1, 2, 3, 1, 2, 3, 111]
$arr5 = [...$arr1, ...$arr1]; // [1, 2, 3, 1, 2, 3]



$testCase = array(
    1 => '',
    2 => "",
    3 => null,
    4 => array(),
    5 => FALSE,
    6 => NULL,
    7=>'0',
    8=>0,

);

foreach ($testCase as $k => $v) {
    if (empty($v)) {
        echo "<br> $k=>$v is empty";
    }
}
/**
Output
1=> is empty
2=> is empty
3=> is empty
4=>Array is empty
5=> is empty
6=> is empty
7=>0 is empty
8=>0 is empty



Пример передачи замыкания в callback-параметр

 Замыкание
$double = function($a) {
    return $a * 2;
};
Диапазон чисел
$numbers = range(1, 5);

Передаём в параметр замыкание в качестве callback-функции
для удвоения каждого элемента в созданном выше диапазоне
$new_numbers = array_map($double, $numbers);
array_map — Применяет callback-функцию ко всем элементам указанных массивов
print implode(' ', $new_numbers);

Результат выполнения приведённого примера:
2 4 6 8 10

Тип mixed принимает любое значение. Он эквивалентен объединению типов object|resource|array|string|float|int|bool|null. Тип доступен с PHP 8.0.0.
На языке теории типов, mixed — верхний тип. Остальные типы — его подтипы.


Void ¶
void — это тип, который допустимо указывать только как возвращаемое значение, которое указывает, что функция не возвращает значение, зато работу функции по-прежнему можно прерывать. Поэтому его нельзя объявлять в объединении типов. Тип доступен с PHP 7.1.0.
Замечание: Даже если объявить, что функция возвращает тип void, она всё равно вернёт значение null.


Конструктор – это метод, который вызывается автоматически при создании объекта класса. Конструкторы в PHP имеют имя “__construct()“. Они могут использоваться для инициализации свойств объекта. Например:
Деструктор – это метод, который вызывается автоматически при уничтожении объекта класса. Деструкторы в PHP имеют имя “__destruct()“. Они могут использоваться для освобождения ресурсов, которые занимал объект. Например:


В этом примере класс Bat использует трейты Animal и CanFly для доступа к их свойствам и методам.

Трейты – это более гибкий и безопасный способ реализации функциональности, похожей на множественное наследование, в PHP.

Почему PHP не поддерживает множественное наследование классов?

Существует несколько причин, почему PHP не поддерживает множественное наследование классов:

Сложность: Множественное наследование может привести к сложным и запутанным иерархиям классов, что может затруднить чтение и сопровождение кода.
Проблемы с алмазными конфликтами: Если два родительских класса имеют метод с одинаковым именем, то возникает алмазный конфликт, и неясно, какой метод должен быть вызван.
Производительность: Множественное наследование может привести к снижению производительности, так как код должен будет выполнять поиск в нескольких иерархиях классов.
Использование трейтов – это более простой, понятный и эффективный способ реализации функциональности, похожей на множественное наследование, в PHP.



Приватный метод (свойство) (он же private) - такой метод (свойство), доступ к которому можно получить только из того же класса (или объекта того же класса).

Защищенный метод (свойство) (он же protected) - такой метод (свойство), доступ к которому можно получить только из того же класса (или объекта того же класса) и из его наследников.

Публичный метод (свойство) (он же public) - такой метод (свойство), доступ к которому можно получить откуда угодно - извне определенного класса, из объекта определенного класса, из наследников.



Относительные типы классов ¶
Эти объявления типов можно использовать только внутри классов.
self ¶
Значение должно быть instanceof того же класса, что и класс, в котором используется объявление типа.
parent ¶
Значение должно быть instanceof родительского класса, наследуемого классом, в котором объявляется тип.
static ¶
static — это тип только для возвращаемого значения, который требует, чтобы возвращаемое значение было instanceof того же класса, что и класс, в котором вызывается метод. Доступен научная с PHP 8.0.0.





Камень второй — методы существуют в единственном экземпляре.
Тут всё чуть сложнее. Для понимания сути приведу код:
class A {
  public function foo() {
    static $x = 0;
    echo ++$x;
  }
}

$a1 = new A;
$a2 = new A;

$a1->foo(); // 1
$a2->foo(); // 2
$a1->foo(); // 3
$a2->foo(); // 4

Вопреки интуитивному ожиданию «разные объекты — разные методы» мы наглядно видим на этом примере, что динамические методы в PHP «не размножаются». Даже если у нас будет сто объектов этого класса, метод будет существовать лишь в одном экземпляре, просто при каждом вызове в него будет пробрасываться разный $this.

Такое поведение может быть неожиданным для неподготовленного к нему разработчика и послужить источником ошибок. Нужно заметить, что наследование класса (и метода) приводит к тому, что всё-таки создается новый метод:

class A {
  public function foo() {
    static $x = 0;
    echo ++$x;
  }
}

class B extends A {
}

$a1 = new A;
$b1 = new B;

$a1->foo(); // 1
$b1->foo(); // 1
$a1->foo(); // 2
$b1->foo(); // 2







Основы ¶
Переменные в PHP представлены знаком доллара с последующим именем переменной. Имя переменной чувствительно к регистру.
Имена переменных соответствуют тем же правилам, что и остальные наименования в PHP.
 Правильное имя переменной должно начинаться с буквы или символа подчёркивания и состоять из букв, цифр и символов подчёркивания в любом количестве.
 Это можно отобразить регулярным выражением: ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$






Предопределённые константы ¶
Предопределённые константы ядра ¶
Эти константы определяет ядро PHP. Сюда входят PHP, движок Zend и SAPI-модули.

PHP_VERSION (string)
Текущая версия PHP в виде строки в формате «major.minor.release[extra]».
PHP_MAJOR_VERSION (int)
Текущая «основная» (major) версия PHP в виде целого числа (например, int(5) для версии «5.2.7-extra»).
PHP_MINOR_VERSION (int)
Текущая «промежуточная» (minor) версия PHP в виде целого числа (например, int(2) для версии «5.2.7-extra»).
PHP_RELEASE_VERSION (int)
Текущая «релиз»-версия (release) PHP в виде целого числа (например, int(7) для версии «5.2.7-extra»).
PHP_VERSION_ID (int)
Текущая версия PHP в виде целого числа, её удобно использовать при сравнениях версий (например, int(50207) для версии «5.2.7-extra»).
PHP_EXTRA_VERSION (string)
Текущая «экстра»-версия PHP в виде строки (например, «-extra» для версии «5.2.7-extra»). Обычно используется в различных дистрибутивах для индикации версий пакетов.
ZEND_THREAD_SAFE (bool)
Указывает, потокобезопасна ли текущая сборка PHP.
ZEND_DEBUG_BUILD (bool)
Указывает, собран ли PHP для отладки.
PHP_ZTS (int)
Указывает, потокобезопасна ли текущая сборка PHP.
PHP_DEBUG (int)
Указывает, собран ли PHP для отладки.
PHP_MAXPATHLEN (int)
Максимальная длина файловых имён (включая путь), поддерживаемая данной сборкой PHP.
PHP_OS (string)
Операционная система, под которую собирался PHP.
PHP_OS_FAMILY (string)
Семейство операционных систем, для которых собран PHP. Любая из «Windows», «BSD», «Darwin», «Solaris», «Linux» или «unknown». Константа доступна с PHP 7.2.0.
PHP_SAPI (string)
API сервера (Server API) данной сборки PHP. Смотрите также php_sapi_name().
PHP_EOL (string)
Корректный символ конца строки (End Of Line) для платформы.
PHP_INT_MAX (int)
Максимальное целое число, поддерживаемое сборкой PHP. Обычно это int(2147483647) в 32-битных системах и int(9223372036854775807) в 64-битных.
PHP_INT_MIN (int)
Минимальное целое число, поддерживаемое сборкой PHP. Обычно это int(-2147483648) в 32-битных системах и int(-9223372036854775808) в 64-битных. Обычно PHP_INT_MIN === ~PHP_INT_MAX.
PHP_INT_SIZE (int)
Размер целого числа в байтах в сборке PHP.
PHP_FLOAT_DIG (int)
Количество десятичных цифр, которые могут быть округлены в числе с плавающей точкой (float) и обратно без потери точности. Константа доступна с PHP 7.2.0.
PHP_FLOAT_EPSILON (float)
Наименьшее представимое положительное число x, такое, что x + 1.0 != 1.0. Константа доступна с PHP 7.2.0.
PHP_FLOAT_MIN (float)
Наименьшее представимое положительное число с плавающей точкой float. Если нужно наименьшее представимое отрицательное число с плавающей точкой float, указывают - PHP_FLOAT_MAX. Константа доступна с PHP 7.2.0.
PHP_FLOAT_MAX (float)
Максимальное представимое число с плавающей точкой float. Константа доступна с PHP 7.2.0.
DEFAULT_INCLUDE_PATH (string)
PEAR_INSTALL_DIR (string)
PEAR_EXTENSION_DIR (string)
PHP_EXTENSION_DIR (string)
Каталог по умолчанию, в котором нужно искать динамически загружаемые модули (если он не переопределён директивой extension_dir). По умолчанию — PHP_PREFIX (или PHP_PREFIX . "\\ext" в Windows).
PHP_PREFIX (string)
Значение --prefix было установлено при настройке. В Windows это значение --with-prefix было установлено при настройке.
PHP_BINDIR (string)
Значение --bindir было установлено при настройке. В Windows это значение --with-prefix было установлено при настройке.
PHP_BINARY (string)
Указывает путь к исполняемым файлам PHP во время выполнения скрипта.
PHP_MANDIR (string)
Указывает, куда были установлены страницы руководства (manpages).
PHP_LIBDIR (string)
PHP_DATADIR (string)
PHP_SYSCONFDIR (string)
PHP_LOCALSTATEDIR (string)
PHP_CONFIG_FILE_PATH (string)
PHP_CONFIG_FILE_SCAN_DIR (string)
PHP_SHLIB_SUFFIX (string)
Суффикс разделяемых (динамических) модулей платформы-сборки, например, «so» (большинство Unix-систем) или «dll» (Windows).
PHP_FD_SETSIZE (int)
Максимальное количество файловых дескрипторов для системных вызовов. Константа доступна с PHP 7.1.0.
E_ERROR (int)
Константа сообщения об ошибке
E_WARNING (int)
Константа сообщения об ошибке
E_PARSE (int)
Константа сообщения об ошибке
E_NOTICE (int)
Константа сообщения об ошибке
E_CORE_ERROR (int)
Константа сообщения об ошибке
E_CORE_WARNING (int)
Константа сообщения об ошибке
E_COMPILE_ERROR (int)
Константа сообщения об ошибке
E_COMPILE_WARNING (int)
Константа сообщения об ошибке
E_USER_ERROR (int)
Константа сообщения об ошибке
E_USER_WARNING (int)
Константа сообщения об ошибке
E_USER_NOTICE (int)
Константа сообщения об ошибке
E_RECOVERABLE_ERROR (int)
Константа сообщения об ошибке
E_DEPRECATED (int)
Константа сообщения об ошибке
E_USER_DEPRECATED (int)
Константа сообщения об ошибке
E_ALL (int)
Константа сообщения об ошибке
E_STRICT (int)
Константа сообщения об ошибке
__COMPILER_HALT_OFFSET__ (int)
true (bool)
Смотрите раздел Логический тип.
false (bool)
Смотрите раздел Логический тип.
null (null)
Смотрите Null.
PHP_WINDOWS_EVENT_CTRL_C (int)
Событие Windows CTRL + C. Константа доступна с PHP 7.4.0 (только для Windows).
PHP_WINDOWS_EVENT_CTRL_BREAK (int)
Событие Windows CTRL + BREAK. Константа доступна с PHP 7.4.0 (Только для Windows).
PHP_CLI_PROCESS_TITLE (bool)
Указывает, доступны ли настройка и получение названия процесса. Константа доступна только в SAPI-интерфейсе командной строки CLI.
STDERR (resource)
Уже открытый поток для стандартного вывода ошибок stderr. Константа доступна только в SAPI-интерфейсе командной строки CLI.
STDIN (resource)
Уже открытый поток для стандартного ввода stdin. Константа доступна только в SAPI-интерфейсе командной строки CLI.
STDOUT (resource)
Уже открытый поток для стандартного вывода stdout. Константа доступна только в SAPI-интерфейсе командной строки CLI.


Магические константы PHP
__LINE__	Текущий номер строки в файле.
__FILE__	Полный путь и имя текущего файла с развёрнутыми симлинками. Если используется внутри подключаемого файла, то возвращается имя данного файла.
__DIR__	Директория файла. Если используется внутри подключаемого файла, то возвращается директория этого файла. Это эквивалентно вызову dirname(__FILE__). Возвращаемое имя директории не оканчивается на слеш, за исключением корневой директории.
__FUNCTION__	Имя функции или {closure} в случае анонимной функции.
__CLASS__	Имя класса. Это имя содержит название пространства имён, в котором класс был объявлен (например, Foo\Bar). При использовании в методах трейтов __CLASS__ является именем класса, в котором эти методы используется.
__TRAIT__	Имя трейта. Это имя содержит название пространства имён, в котором трейт был объявлен (например, Foo\Bar).
__METHOD__	Имя метода класса.
__NAMESPACE__	Имя текущего пространства имён.
ClassName::class	Полное имя класса.



Зарезервированные слова
int	float	bool	string
true	false	null	void (с PHP 7.1)
iterable (с PHP 7.1)	object (с PHP 7.2)	mixed (с PHP 8.0)	never (с PHP 8.1)

Мягко зарезервированные слова
enum	resource	numeric







Список базовых типов:
Встроенные типы
    null,array,object,resource,never,void
    Скалярные типы:bool,int,float,string
    «Относительные типы классов»: self, parent и static
Типы значений
    false
    true
Определяемые пользователем типы (часто называемые класс-типами)
    Интерфейсы
    Классы
    Перечисления
callable





REST расшифровывается как REpresentational State Transfer.
Это был термин, первоначально введен Роем Филдингом (Roy Fielding), который также был одним из создателей протокола HTTP.
Отличительной особенностью сервисов REST является то, что они позволяют наилучшим образом использовать протокол HTTP.
Теперь давайте кратко рассмотрим HTTP.
REST API

Создать пользователя: POST /users
Удалить пользователя: DELETE /users/1
Получить всех пользователей: GET /users
Получить одного пользователя: GET /users/1


Формат обмена данными: здесь нет никаких ограничений. JSON — очень популярный формат, хотя можно использовать и другие, такие как XML
Транспорт: всегда HTTP. REST полностью построен на основе HTTP.








<?php


class People
{
    public static $per_static = 'per_static';
    public $per_public = 'per_public';
    private $per_private = 'per_private';

    public function study()
    {
        echo "{$this->per_public} учится в {$this->per_private}";
    }
}

$people = new People();
print_r('<br>');
echo 'isset($people) -' . isset($people);
print_r('<br>');
echo 'empty($people) -' . empty($people);
print_r('<br>');
echo 'is_null($people) -' . is_null($people);
print_r('<br>');
echo 'is_bool($people) -' . is_bool($people);
print_r('<br>');
echo 'is_numeric($people) -' . is_numeric($people);
print_r('<br>');
echo 'is_float($people) -' . is_float($people);
print_r('<br>');
echo 'is_int($people) -' . is_int($people);
print_r('<br>');
echo 'is_string($people) -' . is_string($people);
print_r('<br>');
echo 'is_object($people) -' . is_object($people);
print_r('<br>');
echo 'is_array($people) -' . is_array($people);
print_r('<br>');
print_r('<br>');
print_r('<br>');
echo 'isset($people->per_public) -' . isset($people->per_public);
print_r('<br>');
echo 'empty($people->per_public) -' . empty($people->per_public);
print_r('<br>');
echo 'is_null($people->per_public) -' . is_null($people->per_public);
print_r('<br>');
echo 'is_bool($people->per_public) -' . is_bool($people->per_public);
print_r('<br>');
echo 'is_numeric($people->per_public) -' . is_numeric($people->per_public);
print_r('<br>');
echo 'is_float($people->per_public) -' . is_float($people->per_public);
print_r('<br>');
echo 'is_int($people->per_public) -' . is_int($people->per_public);
print_r('<br>');
echo 'is_string($people->per_public) -' . is_string($people->per_public);
print_r('<br>');
echo 'is_object($people->per_public) -' . is_object($people->per_public);
print_r('<br>');
echo 'is_array($people->per_public) -' . is_array($people);
print_r('<br>');
print_r('<br>');
print_r('<br>');

echo 'isset($people::$per_static) -' . isset($people::$per_static);
print_r('<br>');
echo 'empty($people::$per_static) -' . empty($people::$per_static);
print_r('<br>');
echo 'is_null($people::$per_static) -' . is_null($people::$per_static);
print_r('<br>');
echo 'is_bool($people::$per_static) -' . is_bool($people::$per_static);
print_r('<br>');
echo 'is_numeric($people::$per_static) -' . is_numeric($people::$per_static);
print_r('<br>');
echo 'is_float($people::$per_static) -' . is_float($people::$per_static);
print_r('<br>');
echo 'is_int($people::$per_static) -' . is_int($people::$per_static);
print_r('<br>');
echo 'is_string($people::$per_static) -' . is_string($people::$per_static);
print_r('<br>');
echo 'is_object($people::$per_static) -' . is_object($people::$per_static);
print_r('<br>');
echo 'is_array($people::$per_static) -' . is_array($people::$per_static);
print_r('<br>');

print_r('<br>');
print_r('<br>');
$set_to_null = null;

echo 'isset($set_to_null) -' . isset($set_to_null);
print_r('<br>');
echo 'empty($set_to_null) -' . empty($set_to_null);
print_r('<br>');
echo 'is_null($set_to_null) -' . is_null($set_to_null);
print_r('<br>');
echo 'is_bool($set_to_null) -' . is_bool($set_to_null);
print_r('<br>');
echo 'is_numeric($set_to_null) -' . is_numeric($set_to_null);
print_r('<br>');
echo 'is_float($set_to_null) -' . is_float($set_to_null);
print_r('<br>');
echo 'is_int($set_to_null) -' . is_int($set_to_null);
print_r('<br>');
echo 'is_string($set_to_null) -' . is_string($set_to_null);
print_r('<br>');
echo 'is_object($set_to_null) -' . is_object($set_to_null);
print_r('<br>');
echo 'is_array($set_to_null) -' . is_array($set_to_null);
print_r('<br>');

print_r('<br>');
print_r('<br>');
$array = [-1, 1, 0, '999', '1', '0', 0.1, 2222.1, false, '', 'string', null, 92233720368547758071, array(), [], [1, 2, 3]];

foreach ($array as $k => $var) {
print_r('<br>');
print_r($var);
print_r('<br>');
    echo 'isset($var) -' . isset($var);
    print_r('<br>');
    echo 'empty($var) -' . empty($var);
    print_r('<br>');
    echo 'is_null($var) -' . is_null($var);
    print_r('<br>');
    echo 'is_bool($var) -' . is_bool($var);
    print_r('<br>');
    echo 'is_numeric($var) -' . is_numeric($var);
    print_r('<br>');
    echo 'is_float($var) -' . is_float($var);
    print_r('<br>');
    echo 'is_int($var) -' . is_int($var);
    print_r('<br>');
    echo 'is_string($var) -' . is_string($var);
    print_r('<br>');
    echo 'is_object($var) -' . is_object($var);
    print_r('<br>');
    echo 'is_array($var) -' . is_array($var);
    print_r('<br>');
    print_r('<br>');
    print_r('<br>');
    print_r('<br>');
}


unset($foo);




Looping through letters is possible. I'm amazed at how few people know that.

for($col = 'R'; $col != 'AD'; $col++) {
    echo $col.' ';
}

returns: R S T U V W X Y Z AA AB AC

Условный (тернарный) оператор
условие ? выражение1 : выражение2
Тернарная операция или трёхместная операция (от лат. ternus — трёхкратный) — операция, имеющая 3 операнда:
 Тернарная условная операция — операция в информатике,
возвращающая свой второй или третий операнд в зависимости от логического значения первого операнда.


match
больше похожем на тернарный оператор. Также, в отличие от switch, используется строгое сравнение (===), а не слабое (==).
Простой пример использования match

<?php
$food = 'cake';
$return_value = match ($food) {
    'apple' => 'На столе лежит яблоко',
    'banana' => 'На столе лежит банан',
    'cake' => 'На столе стоит торт',
};
var_dump($return_value);


https://www.php.net/manual/ru/control-structures.declare.php#control-structures.declare.ticks

ример использования тика

<?php

declare(ticks=1);

// Функция, исполняемая при каждом тике
function tick_handler()
{
    echo "Вызывается tick_handler()\n";
}

register_tick_function('tick_handler'); // вызывает событие тика

$a = 1; // вызывает событие тика

if ($a > 0) {
    $a += 2; // вызывает событие тика
    print $a; // вызывает событие тика
}
It's amazing how many people didn't grasp the concept here.
 Note the wording in the documentation.
 It states that the tick handler is called every n native execution cycles.
That means native instructions, not including system calls (i'm guessing).
 This can give you a very good idea if you need to optimize a particular part of your script,
 since you can measure quite effectively how many native instructions are in your actual code.



$rrr ['1'] = 1;
$rrr ['2'] = 2;
$rrr ['3'] = 3;
ttt ($rrr);
function ttt (&$www) {
    $www['1']=0;
}


Значения аргументов по умолчанию
function makecoffee($type = "капучино")


Работа с функциями посредством переменных
$func = 'foo';
$func();        // Вызывает функцию foo()




Callback (англ. call — вызов, англ. back — обратный) или фу́нкция обра́тного вы́зова
в программировании — передача исполняемого кода в качестве одного из параметров другому коду. Обратный вызов позволяет в функции исполнять код, который задаётся в аргументах при её вызове. Этот код может быть определён в других контекстах программного кода и быть недоступным для прямого вызова из этой функции. Некоторые алгоритмические задачи в качестве своих входных данных имеют не только числа или объекты, но и действия (алгоритмы), которые естественным образом задаются как обратные вызовы.

#include <stdlib.h>
// функция сравнения целых чисел по модулю
int compare_abs(const void *a, const void *b) {
   int a1 = *(int*)a;
   int b1 = *(int*)b;
   return abs(a1) - abs(b1);
}
int main() {
   int size = 10;
   int m[size] = {1, -3, 5, -100, 7, 33, 44, 67, -4, 0};
   // сортировка массива m по возрастанию модулей
   qsort(m, size, sizeof(int), compare_abs);
   return 0;
}
Об обратном вызове можно думать как о действии, передаваемом некоторой основной процедуре в качестве аргумента. И это действие может рассматриваться как:

подзадача и использоваться для обработки данных внутри этой процедуры;
«телефонная связь», используемая для того, чтобы «связываться» с тем, кто вызвал процедуру,
 при наступлении какого-то события (англ. callback дословно переводится как «звонок обратно»).


Callable и callback-функции ¶
Callback-функции разрешено обозначать объявлением типа callable.

Функции вроде call_user_func() или usort() принимают определённые пользователем callback-функции в качестве параметра.
 Callback-функциями бывают как простые функции, так и методы объектов, включая статические методы классов.





Стрелочные функции захватывают переменные по значению автоматически
$y = 1;
$fn1 = fn($x) => $x + $y;
// эквивалентно использованию $y по значению:
$fn2 = function ($x) use ($y) {
    return $x + $y;
};
var_export($fn1(3));

Результат выполнения приведённого примера: 4

$z = 1;
$fn = fn($x) => fn($y) => $x * $y + $z;
// Выведет 51
var_export($fn(5)(10));



$func = 'foo';
$func();        // Вызывает функцию foo()


Пример присвоения анонимной функции переменной
$greet = function($name) {
    printf("Привет, %s\r\n", $name);
};

$greet('Мир');






Статические методы, которые создают объект класса ¶
PHP поддерживает только один конструктор для класса. Однако бывает так, что нужно создавать разные объекты для разных входных данных. Рекомендуемый способ — использовать статические методы как обёртки над конструктором.

Пример #5 Использование статических методов для создания объектов

<?php

class Product
{
    private ?int $id;
    private ?string $name;

    private function __construct(?int $id = null, ?string $name = null)
    {
        $this->id = $id;
        $this->name = $name;
    }

    function __destruct()
   {
       print "Уничтожается " . __CLASS__  . "\n";

   }

    public static function fromBasicData(int $id, string $name): static
    {
        $new = new static($id, $name);
        return $new;
    }

    public static function fromJson(string $json): static
    {
        $data = json_decode($json, true);
        return new static($data['id'], $data['name']);
    }

    public static function fromXml(string $xml): static
    {
        // Пользовательская логика
        $data = convert_xml_to_array($xml);
        $new = new static();
        $new->id = $data['id'];
        $new->name = $data['name'];
        return $new;
    }
}

$p1 = Product::fromBasicData(5, 'Widget');
$p2 = Product::fromJson($some_json_string);
$p3 = Product::fromXml($some_xml_string);

Конструктор разрешено делать закрытым или защищённым, чтобы исключить вызов конструктора извне.
Тогда создать объект класса получится только через статический метод. Доступ к закрытым методам
класса есть и у конструктора, и у статического метода, поскольку конструктор, статический и закрытый
 методы определили в одном и том же классе, даже если один экземпляр объекта вызывает закрытый метод другого.
Закрытый конструктор необязателен, и будет ли в закрытом конструкторе смысл, определяет ситуация.


Как и конструкторы, движок PHP не будет неявно вызывать деструкторы,
 которые объявили в родительском классе.
 Необходимо вызвать parent::__destruct()
 в теле деструктора дочернего класса,
чтобы запустить деструктор родительского класса.
 Аналогично конструкторам, дочерний класс,
 в котором не определен деструктор, наследует деструктор из родительского класса.



const нельзя в функции
private функция не наследуется


Оператор разрешения области видимости (::) ¶
Оператор разрешения области видимости (называемый также Paamayim Nekudotayim) или, проще говоря,
«двойное двоеточие» — это лексема, разрешающая обращаться к константе,
статическому свойству или статическому методу класса или одному из его родителей.

К свойствам и методам внутри самого класса обращаются через ключевые слова self, parent и static.
class ffff
{
    static $rtrt23 = '111111111';
    const ONE = 1;

    function rere(){
        $this->var1 = 1;
    }

}
$rtrt =new ffff;
$rtrt->rere();
$rtrt::$rtrt23;



Ключевое слово static
Объявление свойств и методов класса статическими позволяет обращаться к ним без создания экземпляра класса.
 К ним также можно получить доступ статически в созданном экземпляре объекта класса.

static привязан к классу а не объекту
даже от родителя абстрактного
и работает как ОБЩАЯ переменная для всех созданных и не созданных
нельзя в интерфейсе



static - привязанный по классу

интерфейс - набросок без реализации , возможно с константой

abstract - класс который не создать, набросок со статиком и константой и переменными не обязательно к реализации если не abstract

:: обращение к константе или статике


$list = [1,2,3];        //1 !!!
rrrrr($list);

function rrrrr($t){
    $t[0]=111;          //2 !!!
    $list[0]=222;       // 3 !!!
}

НО класс не такой, его хоть и невидно 1-3, но 1,2 это одно и тоже


Итераторы объектов - в классе прописать в fun foreach и можно будет напечатать защищенные поля


Следующие названия методов считаются магическими:
__construct(), __destruct(), __call(), __callStatic(), __get(), __set(), __isset(), __unset(), __sleep(),
__wakeup(), __serialize(), __unserialize(), __toString(), __invoke(), __set_state(), __clone() и __debugInfo()

final  - не дает менять класс (метод  или переменную)

 $this->object1 = clone $this->object1;

$showNumber = function() use($number) - use позволяет в функции использовать внешнюю переменную
use - сохраненение внешнего контекста, позволяет использовать внешние переменные в функции

замыкание стрелочная или анонимная функция
анонимная - в переменную или как аргумент

mvc, паттерны,  - дороги, инфраструктура, унификация

@ It suppresses error messages
транзакции - «всё, или ничего»


SOAP от англ. Simple Object Access Protocol
сообщениями в формате XML,
SOAP может использоваться с любым протоколом прикладного уровня: SMTP, FTP, HTTP, HTTPS и др



первичный ключ и вторичный в юд
вторичный это первичный в другой

индекс это словарь для поиска, ускоряет выборку но уменьшает апдейт


нормальзация  это больше таблиц
денормализауя это меньше таблиц

merge vs rebase  -


trait - это кусок кода встраиваемый, use, при конфликте instedof, все методы полностью доступны,traits в trait -Да


 Сериализация объектов  serialize() unserialize()


Ковариантность и контравариантность ¶ ?


внедрение зависимостей, в примере класс с данными базы и методами закидывается в класс с
 коннекшеном как обьект в конструктор и у него уже используются открытые методы


json_encode в джейсон string
json_decode из джейсона string









Константа __NAMESPACE__ и динамическое конструирование имени

namespace MyProject;

function get($classname)
{
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
}




Пример #1 Пример автоматической загрузки классов
spl_autoload_register(function ($class_name) {
    include "./OOP/".$class_name . '.php';
});

$obj  = new Factory(1,2);



print(__CLASS__) в вызываемом классе выводит имя класса