Пример автоматической загрузки

<?php

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$obj  = new MyClass1();
$obj2 = new MyClass2();

?>
You should not have to use require_once inside the autoloader,
as if the class is not found it wouldn't be trying to look for it by using the autoloader.
Just use require(), which will be better on performance as well as it does not have to check if it is unique.

Пример использования деструктора
<?php

class MyDestructableClass
{
    function __construct()
    {
        print "Конструктор\n";
    }

    function __destruct()
    {
        print "Уничтожается " . __CLASS__  . "\n";
    }
}

$obj = new MyDestructableClass();

?>

Область видимости свойства, метода или константы (начиная c PHP 7.1.0)
определяют, добавляя перед объявлением ключевое слово: public, protected или private.

Оператор разрешения области видимости (::) ¶
Оператор разрешения области видимости (называемый также Paamayim Nekudotayim) или,
проще говоря, «двойное двоеточие» — это лексема,
разрешающая обращаться к константе, статическому свойству или статическому методу класса или одному из его родителей.
К свойствам и методам внутри самого класса обращаются через ключевые слова self, parent и static.

Использование :: вне объявления класса

<?php
class MyClass {
    const CONST_VALUE = 'Значение константы';
}

$classname = 'MyClass';
echo $classname::CONST_VALUE;

echo MyClass::CONST_VALUE;
?>


Использование :: внутри объявления класса

<?php
class OtherClass extends MyClass
{
    public static $my_static = 'статическая переменная';

    public static function doubleColon() {
        echo parent::CONST_VALUE . "\n";
        echo self::$my_static . "\n";
    }
}

$classname = 'OtherClass';
$classname::doubleColon();

OtherClass::doubleColon();
?>
