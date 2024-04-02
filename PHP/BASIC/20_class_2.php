Доступ к свойствам и методам только что созданного объекта

<?php

echo (new DateTime())->format('Y');

?>

Сравнение доступа к свойству и вызова метода

<?php

class Foo
{
    public $bar = 'свойство';

    public function bar()
    {
        return 'метод';
    }
}

$obj = new Foo();
echo $obj->bar, PHP_EOL, $obj->bar(), PHP_EOL;

?>

Вызов анонимной функции, которую содержит свойство

<?php

class Foo2
{
    public $bar;

    public function __construct()
    {
        $this->bar = function() {
            return 42;
        };
    }
}

$obj = new Foo2();

echo ($obj->bar)(), PHP_EOL;

?>

Фатальная ошибка, когда дочерний метод удаляет параметр

<?php

class Base
{
    public function foo(int $a = 5)
    {
        echo "Допустимо\n";
    }
}

class Extend extends Base
{
    function foo()
    {
        parent::foo(1);
    }
}

?>
Результат выполнения приведённого примера в PHP 8 аналогичен:

Fatal error: Declaration of Extend::foo() must be compatible with Base::foo(int $a = 5) in /in/evtlq on line 13

Фатальная ошибка, когда дочерний метод делает необязательный параметр обязательным

<?php

class Base2
{
    public function foo(int $a = 5)
    {
        echo "Допустимо\n";
    }
}

class Extend2 extends Base2
{
    function foo(int $a)
    {
        parent::foo($a);
    }
}

?>
Результат выполнения приведённого примера в PHP 8 аналогичен:

Fatal error: Declaration of Extend::foo(int $a) must be compatible with Base::foo(int $a = 5) in /in/qJXVC on line 13