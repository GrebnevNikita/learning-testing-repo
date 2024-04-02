Итераторы объектов ¶
PHP предоставляет такой способ объявления объектов, который даёт возможность пройти по списку элементов данного объекта, например, с помощью оператора foreach. По умолчанию, в этом обходе (итерации) будут участвовать все видимые свойства объекта.

Пример #1 Итерация простого объекта

<?php
class MyClass
{
    public $var1 = 'значение 1';
    public $var2 = 'значение 2';
    public $var3 = 'значение 3';

    protected $protected = 'защищённая переменная';
    private   $private   = 'закрытая переменная';

    function iterateVisible() {
        echo "MyClass::iterateVisible:\n";
        foreach ($this as $key => $value) {
            print "$key => $value\n";
        }
    }
}

$class = new MyClass();

foreach($class as $key => $value) {
    print "$key => $value\n";
}
echo "\n";


$class->iterateVisible();

?>
Результат выполнения приведённого примера:

var1 => значение 1
var2 => значение 2
var3 => значение 3

MyClass::iterateVisible:
var1 => значение 1
var2 => значение 2
var3 => значение 3
protected => защищённая переменная
private => закрытая переменная