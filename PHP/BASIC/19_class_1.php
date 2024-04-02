Простое определение класса

<?php

class SimpleClass
{
    // Объявление свойства
    public $var = 'значение по умолчанию';

    // Объявление метода
    public function displayVar() {
        echo $this->var;
    }
}

?>

Создание экземпляра класса

<?php

$instance = new SimpleClass();

// Или создаём экземпляр класса через переменную:
$className = 'SimpleClass';
$instance = new $className(); // new SimpleClass()

?>

Новые объекты

<?php

class Test
{
    static public function getNew()
    {
        return new static;
    }
}

class Child extends Test {}

$obj1 = new Test(); // По имени класса
$obj2 = new $obj1; // Через переменную
var_dump($obj1 !== $obj2);

$obj3 = Test::getNew(); // Через метод класса
var_dump($obj3 instanceof Test);

$obj4 = Child::getNew(); // Через метод класса-наследника
var_dump($obj4 instanceof Child);

?>
