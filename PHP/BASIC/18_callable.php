Синтаксис callable-функций как объектов первого класса представили
в PHP 8.1.0 как способ, которым анонимные функции создают из
callable-объектов. Он заменяет существующий синтаксис вызываемых объектов
со строками и массивами. Преимущество синтаксиса состоит в том, что он
доступен для статического анализа и использует область видимости точки, в которой получили callable-объект.

Синтаксис CallableExpr(...) создаёт объект Closure из callable-объекта.
Часть CallableExpr принимает любое выражение, которое можно непосредственно вызвать в грамматике PHP:


Простой пример синтаксиса callable-объекта первого класса

<?php

class Foo
{
   public function method() {}
   public static function staticmethod() {}
   public function __invoke() {}
}

$obj = new Foo();
$classStr = 'Foo';
$methodStr = 'method';
$staticmethodStr = 'staticmethod';
$f1 = strlen(...);
$f2 = $obj(...);  // Вызываемый объект
$f3 = $obj->method(...);
$f4 = $obj->$methodStr(...);
$f5 = Foo::staticmethod(...);
$f6 = $classStr::$staticmethodStr(...);
// Традиционный callable-синтаксис со строками и массивами
//$f7 = 'strlen'(...);
//$f8 = [$obj, 'method'](...);
//$f9 = [Foo::class, 'staticmethod'](...);

?>
