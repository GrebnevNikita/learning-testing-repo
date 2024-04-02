Трейты ¶
PHP реализует способ переиспользования кода, называемый трейтами (Traits).
Трейт — это механизм переиспользования кода в языках с поддержкой одиночного наследования,
к которым относится PHP. Задача трейта — уменьшить ограничения одиночного наследования,
разрешая разработчику легко переиспользовать наборы методов в нескольких независимых классах,
находящихся в разных иерархиях классов. Семантика комбинации трейтов и классов определена так,
чтобы снизить уровень сложности, а также избежать типичных проблем, свойственных множественному наследованию и примесям (Mixins).
Трейт очень похож на класс, но рассчитан только на группировку функциональности тонко
контролируемым и согласованным образом. Нельзя создать отдельный экземляр трейта.
Трейт — это дополнение к обычному наследованию и инструмент построения горизонтальной
композиции поведения, то есть работы с членами класса (трейта) без требования наследования.

Пример #1 Пример использования трейта

<?php
trait ezcReflectionReturnInfo {
    function getReturnType() { /*1*/ }
    function getReturnDescription() { /*2*/ }
}

class ezcReflectionMethod extends ReflectionMethod {
    use ezcReflectionReturnInfo;
    /* ... */
}

class ezcReflectionFunction extends ReflectionFunction {
    use ezcReflectionReturnInfo;
    /* ... */
}
?>
Приоритет ¶
Член, унаследованный из базового класса, переопределяется членом,
введённым трейтом. Порядок приоритета следующий: члены текущего класса
переопределяют методы трейта, которые, со своей стороны, переопределяют унаследованные методы.

Пример #2 Пример приоритета старшинства

Наследуемый от базового класса метод переопределяется методом, добавленным
в класс MyHelloWorld из трейта SayWorld. Поведение методов трейта повторяет
поведение методов класса MyHelloWorld. Порядок приоритета такой: методы текущего
класса переопределяют методы трейта, которые, со своей стороны, переопределяют методы базового класса.

<?php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}

class MyHelloWorld extends Base {
    use SayWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
?>
Результат выполнения приведённого примера:

Hello World!
Пример #3 Пример альтернативного порядка приоритета

<?php
trait HelloWorld1 {
    public function sayHello() {
        echo 'Hello World!';
    }
}

class TheWorldIsNotEnough2 {
    use HelloWorld1;
    public function sayHello() {
        echo 'Hello Universe!';
    }
}

$o = new TheWorldIsNotEnough2();
$o->sayHello();
?>
Результат выполнения приведённого примера:

Hello Universe!
Несколько трейтов ¶
В класс можно добавить несколько трейтов, перечислив их в директиве use через запятую.

Пример #4 Пример использования нескольких трейтов

<?php
trait Hello {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait World {
    public function sayWorld() {
        echo 'World';
    }
}

class MyHelloWorld {
    use Hello, World;
    public function sayExclamationMark() {
        echo '!';
    }
}

$o = new MyHelloWorld();
$o->sayHello();
$o->sayWorld();
$o->sayExclamationMark();
?>
Результат выполнения приведённого примера:

Hello World!
Разрешение конфликтов ¶
Если два трейта добавляют метод с одним и тем же именем, будет вызвана фатальная ошибка, если конфликт явно не разрешён.

Для разрешения конфликтов именования между трейтами, включёнными в один и тот же класс, вызывают оператор insteadof, чтобы точно выбрать один из конфликтующих методов.

Так как предыдущий оператор только исключает методы, оператор as может включить один из конфликтующих методов под другим именем. Обратите внимание, что оператор as не переименовывает метод, а также не влияет ни на какой другой метод.

Пример #5 Пример разрешения конфликтов

В этом примере в класс Talker включены трейты A и B. Поскольку в трейтах A и B есть конфликтующие методы, класс использует вариант метода smallTalk из трейта B, а вариант метода bigTalk — из трейта A.

Класс Aliased_Talker применяет оператор as, чтобы использовать реализацию метода bigTalk из класса B под дополнительным псевдонимом talk.

<?php
trait A {
    public function smallTalk() {
        echo 'a';
    }
    public function bigTalk() {
        echo 'A';
    }
}

trait B {
    public function smallTalk() {
        echo 'b';
    }
    public function bigTalk() {
        echo 'B';
    }
}

class Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
    }
}

class Aliased_Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
        B::bigTalk as talk;
    }
}
?>
Изменение видимости метода ¶
Применяя оператор as, можно также изменить видимость метода в классе, в который включён трейт.

Пример #6 Пример изменения видимости метода

<?php
trait HelloWorld {
    public function sayHello() {
        echo 'Hello World!';
    }
}

// Изменение видимости метода sayHello
class MyClass1 {
    use HelloWorld { sayHello as protected; }
}

// Создание псевдонима метода с изменённой видимостью
// видимость sayHello не изменилась
class MyClass2 {
    use HelloWorld { sayHello as private myPrivateHello; }
}
?>
Трейты, состоящие из трейтов ¶
Трейты можно включать и в классы, и в другие трейты. Трейт может быть полностью или частично составлен из членов, описанных в других трейтах, один или несколько из которых включены в определении трейта.

Пример #7 Пример трейтов, составленных из трейтов

<?php
trait Hello {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait World {
    public function sayWorld() {
        echo 'World!';
    }
}

trait HelloWorld {
    use Hello, World;
}

class MyHelloWorld {
    use HelloWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
$o->sayWorld();
?>
Результат выполнения приведённого примера:

Hello World!
Абстрактные члены трейтов ¶
Трейты поддерживают абстрактные методы, чтобы установить требования к классу, в который будет включён трейт. Поддерживаются общедоступные, защищённые и закрытые методы. До PHP 8.0.0 поддерживались только общедоступные и защищённые абстрактные методы.

Предостережение
Начиная с PHP 8.0.0 сигнатура конкретного метода должна следовать правилам совместимости сигнатур. Ранее сигнатура метода могла несовпадать.

Пример #8 Требования трейта при помощи абстрактных методов

<?php
trait Hello {
    public function sayHelloWorld() {
        echo 'Hello'.$this->getWorld();
    }
    abstract public function getWorld();
}

class MyHelloWorld {
    private $world;
    use Hello;
    public function getWorld() {
        return $this->world;
    }
    public function setWorld($val) {
        $this->world = $val;
    }
}
?>
Статические члены трейта ¶
В трейтах можно определять статические переменные, статические методы и статические свойства.

Замечание:

Начиная с PHP 8.1.0 прямой вызов статического метода или прямой доступ к статическому свойству в трейте устарел. К статическим методам и свойствам нужно обращаться только в классе, в который включён трейт.

Пример #9 Статические переменные

<?php
trait Counter {
    public function inc() {
        static $c = 0;
        $c = $c + 1;
        echo "$c\n";
    }
}

class C1 {
    use Counter;
}

class C2 {
    use Counter;
}

$o = new C1(); $o->inc(); // echo 1
$p = new C2(); $p->inc(); // echo 1
?>
Пример #10 Статические методы

<?php
trait StaticExample {
    public static function doSomething() {
        echo 'Что-либо делаем';
    }
}

class Example {
    use StaticExample;
}

Example::doSomething();
?>
Пример #11 Статические свойства

<?php
trait StaticExample {
    public static $static = 'foo';
}
class Example {
    use StaticExample;
}
echo Example::$static;
?>
Свойства ¶
Трейты также могут определять свойства.

Пример #12 Определение свойств

<?php
trait PropertiesTrait {
    public $x = 1;
}

class PropertiesExample {
    use PropertiesTrait;
}

$example = new PropertiesExample;
$example->x;
?>
Если трейт определяет свойство, то класс не может определить свойство c таким же именем, кроме случаев полного совпадения (та же область видимости и тип, модификатор readonly и начальное значение), иначе будет выброшена фатальная ошибка.

Пример #13 Разрешение конфликтов

<?php
trait PropertiesTrait {
    public $same = true;
    public $different1 = false;
    public bool $different2;
    public bool $different3;
}

class PropertiesExample {
    use PropertiesTrait;
    public $same = true;
    public $different1 = true; // Фатальная ошибка
    public string $different2; // Фатальная ошибка
readonly protected bool $different3; // Фатальная ошибка
}
?>
Константы ¶
Начиная с версии PHP 8.2.0 трейты могут также определять константы.

Пример #14 Определение констант

<?php
trait ConstantsTrait {
    public const FLAG_MUTABLE = 1;
final public const FLAG_IMMUTABLE = 5;
}

class ConstantsExample {
    use ConstantsTrait;
}

$example = new ConstantsExample;
echo $example::FLAG_MUTABLE; // 1
?>
Если трейт определяет константу, то класс не может определить константу с таким же именем, если только они не совместимы (одинаковая область видимости, начальное значение и модификатор final), иначе выбрасывается фатальная ошибка.

Пример #15 Разрешение конфликтов

<?php
trait ConstantsTrait {
    public const FLAG_MUTABLE = 1;
final public const FLAG_IMMUTABLE = 5;
}

class ConstantsExample {
    use ConstantsTrait;
    public const FLAG_IMMUTABLE = 5; // Фатальная ошибка
}
?>