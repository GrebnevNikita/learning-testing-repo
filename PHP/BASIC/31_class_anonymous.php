Анонимные классы ¶
Анонимные классы полезны, когда нужно создать простые, одноразовые объекты.

<?php

// Использование явного класса
class Logger
{
    public function log($msg)
    {
        echo $msg;
    }
}

$util->setLogger(new Logger());

// Использование анонимного класса
$util->setLogger(new class {
    public function log($msg)
    {
        echo $msg;
    }
});
//Они могут передавать аргументы в конструкторы, расширять другие классы,
// реализовывать интерфейсы и использовать трейты как обычный класс:



class SomeClass {}
interface SomeInterface {}
trait SomeTrait {}

var_dump(new class(10) extends SomeClass implements SomeInterface {
    private $num;

    public function __construct($num)
    {
        $this->num = $num;
    }

    use SomeTrait;
});

//Результат выполнения приведённого примера:
//
//object(class@anonymous)#1 (1) {
//  ["Command line code0x104c5b612":"class@anonymous":private]=>
//  int(10)
//}