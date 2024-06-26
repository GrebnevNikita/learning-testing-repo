Наследование

<?php

class Foo
{
    public function printItem($string)
    {
        echo 'Foo: ' . $string . PHP_EOL;
    }

    public function printPHP()
    {
        echo 'PHP просто супер.' . PHP_EOL;
    }
}

class Bar extends Foo
{
    public function printItem($string)
    {
        echo 'Bar: ' . $string . PHP_EOL;
    }
}

$foo = new Foo();
$bar = new Bar();
$foo->printItem('baz'); // Выведет: 'Foo: baz'
$foo->printPHP();       // Выведет: 'PHP просто супер'
$bar->printItem('baz'); // Выведет: 'Bar: baz'
$bar->printPHP();       // Выведет: 'PHP просто супер'

?>