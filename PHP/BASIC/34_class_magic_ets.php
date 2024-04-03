Следующие названия методов считаются магическими:
__construct(), __destruct(), __call(), __callStatic(), __get(), __set(), __isset(), __unset(),
__sleep(), __wakeup(), __serialize(), __unserialize(), __toString(), __invoke(),
__set_state(), __clone() и __debugInfo()



Сериализация и десериализация

<?php
class Connection
{
    protected $link;
    private $dsn, $username, $password;

    public function __construct($dsn, $username, $password)
    {
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connect();
    }

    private function connect()
    {
        $this->link = new PDO($this->dsn, $this->username, $this->password);
    }

    public function __serialize(): array
    {
        return [
            'dsn' => $this->dsn,
            'user' => $this->username,
            'pass' => $this->password,
        ];
    }

    public function __unserialize(array $data): void
    {
        $this->dsn = $data['dsn'];
        $this->username = $data['user'];
        $this->password = $data['pass'];

        $this->connect();
    }
}?>

Простой пример

<?php

// Объявление простого класса
class TestClass
{
    public $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    public function __toString()
    {
        return $this->foo;
    }
}

$class = new TestClass('Привет');
echo $class;

?>
Результат выполнения приведённого примера:

Привет



Метод __invoke() вызывается, когда скрипт пытается выполнить объект как функцию.
<?php

class CallableClass
{
    public function __invoke($x)
    {
        var_dump($x);
    }
}

$obj = new CallableClass();

$obj(5);
var_dump(is_callable($obj));

?>

Этот статический метод вызывается для тех классов, которые экспортируются функцией var_export().

Единственным параметром этого метода является массив, содержащий экспортируемые свойства в виде ['property' => value, ...].

<?php

class A
{
    public $var1;
    public $var2;

    public static function __set_state($an_array)
    {
        $obj = new A;
        $obj->var1 = $an_array['var1'];
        $obj->var2 = $an_array['var2'];
        return $obj;
    }
}

$a = new A();
$a->var1 = 5;
$a->var2 = 'foo';

$b = var_export($a, true);
var_dump($b);
eval('$c = ' . $b . ';');
var_dump($c);

?>
Результат выполнения приведённого примера:

string(60) "A::__set_state(array(
'var1' => 5,
'var2' => 'foo',
))"
object(A)#2 (2) {
["var1"]=>
int(5)
["var2"]=>
string(3) "foo"
}

Этот метод вызывается функцией var_dump(), когда необходимо вывести список свойств объекта. Если этот метод не определён, тогда будут выведены все свойства объекта c модификаторами public, protected и private.

Пример #7 Использование __debugInfo()

<?php

class C
{
    private $prop;

    public function __construct($val)
    {
        $this->prop = $val;
    }

    public function __debugInfo()
    {
        return [
            'propSquared' => $this->prop ** 2,
        ];
    }
}

var_dump(new C(42));

?>
Результат выполнения приведённого примера:

object(C)#1 (1) {
["propSquared"]=>
int(1764)
}


