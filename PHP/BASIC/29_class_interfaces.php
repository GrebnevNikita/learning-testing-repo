Интерфейсы объектов ¶
Интерфейсы объектов позволяют создавать код, который указывает,
какие методы должен реализовать класс, без необходимости определять,
как именно они должны быть реализованы. Интерфейсы разделяют пространство
имён с классами и трейтами, поэтому они не могут называться одинаково.

Интерфейсы могут быть унаследованы друг от друга, так же, как и классы, с помощью оператора extends.

Константы ¶
Интерфейсы могут содержать константы. Константы интерфейсов работают точно так же,
как и константы классов. До PHP 8.1.0 они не могли быть переопределены классом или интерфейсом, который их наследует.

Пример интерфейса

<?php

// Объявим интерфейс 'Template'
interface Template
{
    public function setVariable($name, $var);
    public function getHtml($template);
}

// Реализация интерфейса
// Это будет работать
class WorkingTemplate implements Template
{
    private $vars = [];

    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }

    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }

        return $template;
    }
}

// Это не будет работать
// Fatal error: Class BadTemplate contains 1 abstract methods
// and must therefore be declared abstract (Template::getHtml)
// (Фатальная ошибка: Класс BadTemplate содержит 1 абстрактный метод
// и поэтому должен быть объявлен абстрактным (Template::getHtml))
class BadTemplate implements Template
{
    private $vars = [];

    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
}
?>
Пример #2 Наследование интерфейсов

<?php
interface A
{
    public function foo();
}

interface B extends A
{
    public function baz(Baz $baz);
}

// Это сработает
class C implements B
{
    public function foo()
    {
    }

    public function baz(Baz $baz)
    {
    }
}

// Это не сработает и выдаст фатальную ошибку
class D implements B
{
    public function foo()
    {
    }

    public function baz(Foo $foo)
    {
    }
}
?>
Пример #3 Совместимость с несколькими интерфейсами

<?php
class Foo {}
class Bar extends Foo {}

interface A {
    public function myfunc(Foo $arg): Foo;
}

interface B {
    public function myfunc(Bar $arg): Bar;
}

class MyClass implements A, B
{
    public function myfunc(Foo $arg): Bar
    {
        return new Bar();
    }
}
?>
Пример #4 Множественное наследование интерфейсов

<?php
interface A
{
    public function foo();
}

interface B
{
    public function bar();
}

interface C extends A, B
{
    public function baz();
}

class D implements C
{
    public function foo()
    {
    }

    public function bar()
    {
    }

    public function baz()
    {
    }
}
?>
Пример #5 Интерфейсы с константами

<?php
interface A
{
    const B = 'Константа интерфейса';
}

// Выведет: Константа интерфейса
echo A::B;


class B implements A
{
    const B = 'Константа класса';
}

// Выведет: Константа класса
// До PHP 8.1.0 этот код не будет работать,
// потому что было нельзя переопределять константы.
echo B::B;
?>
Пример #6 Интерфейсы с абстрактными классами

<?php
interface A
{
    public function foo(string $s): string;

    public function bar(int $i): int;
}

// Абстрактный класс может реализовывать только часть интерфейса.
// Классы, расширяющие абстрактный класс, должны реализовать все остальные.
abstract class B implements A
{
    public function foo(string $s): string
    {
        return $s . PHP_EOL;
    }
}

class C extends B
{
    public function bar(int $i): int
    {
        return $i * 2;
    }
}
?>
Пример #7 Одновременное расширение и внедрение

<?php

class One
{
    /* ... */
}

interface Usable
{
    /* ... */
}

interface Updatable
{
    /* ... */
}

// Порядок ключевых слов здесь важен. "extends" должно быть первым.
class Two extends One implements Usable, Updatable
{
    /* ... */
}
?>