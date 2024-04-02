Ключевое слово static ¶

Так как статические методы вызываются без создания экземпляра класса,
то псевдопеременная $this недоступна внутри статических методов.

Пример статического метода

<?php
class Foo1 {
    public static function aStaticMethod() {
        // ...
    }
}

Foo1::aStaticMethod();
$classname = 'Foo1';
$classname::aStaticMethod();
?>

Пример статического свойства

<?php
class Foo
{
    public static $my_static = 'foo';

    public function staticValue() {
        return self::$my_static;
    }
}

class Bar extends Foo
{
    public function fooStatic() {
        return parent::$my_static;
    }
}


print Foo::$my_static . "\n";

$foo = new Foo();
print $foo->staticValue() . "\n";
print $foo->my_static . "\n";      // Не определено свойство my_static

print $foo::$my_static . "\n";
$classname = 'Foo';
print $classname::$my_static . "\n";

print Bar::$my_static . "\n";
$bar = new Bar();
print $bar->fooStatic() . "\n";
?>
