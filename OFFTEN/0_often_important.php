<?php


// associative arrays
$user_list = [
    'dave' => 'apassword',
    'steve' => 'secr3t'
];
$foo = array('car', 'truck');

$count = count($user_list);

foreach ($user_list as $user => $pass) {echo "{$user}'s pass is: {$pass}\n";}
// "dave's pass is: apassword"
// "steve's pass is: secr3t"

foreach ($foo as $i => $type) {echo "{$i}: {$type}\n";}
// 0: car
// 1: truck


if (isset($var)) {} // не определена'; // Определяет, была ли установлена переменная значением, отличным от null
if (empty($var)) {} // '$var или 0, или пусто, или вообще не определена';
is_null();
unset($foo);

is_bool(); // Проверяет, является ли переменная булевой
is_numeric(); // Проверяет, является ли переменная числом или строкой, содержащей число
is_float(); // Проверяет, является ли переменная числом с плавающей точкой
is_int(); // Проверяет, является ли переменная целым числом
is_string(); // Проверяет, является ли переменная строкой
is_object(); // Проверяет, является ли переменная объектом
is_array(); // Определяет, является ли переменная массивом

function getName()
{
    return 123;
}

class people
{
    private $pirate = 'pirate'; //доступ внутри класса
    protected $proq = 'proqtor'; // доступ внутри класса и от наследников
    const softdrink = 'ale';
    const CONST_VALUE = 'Значение константы';
    public static $ale = 'john';
    public $john = "John Smith";
    public $name = "John Smith";
    public $age = "John Smith";
    public $list = array();

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function setList(): void
    {
        $this->list = range(1,10,1);
    }
}

$people = new people();
//Array
//(   [peoplepirate] => pirate
//    [*proq] => proqtor
//    [john] => John Smith
//    [list] => Array() )

$people->setList();
echo "$people->john drank some juice." ;

$string = 'string';
echo "Символ с индексом -2 равен $string[-2]";
$string[-3] = 'o'; // chaner on index 3 = strong
$last = $string[strlen($string)-1]; // get last char

echo "{$people->name} drank some juice." ;
echo "{$people::$ale} drank some juice." ;
$great = 'здорово';
echo "Это {$great}";
echo "Этот квадрат шириной {$people->john}00 сантиметров.";
echo "Это работает: {$user_list['foo'][3]}";




//Два элемента считаются равными тогда и только тогда, когда (string) $elem1 === (string) $elem2. То есть, когда строковое представление одинаково.
$array1 = array("a" => "green!!!", "red", "blue", "red");
$array2 = array("b" => "green!!!", "yellow", "red");
$result = array_diff($array1, $array2);

//Array([1] => blue)

sort($files);

call_user_func('my_callback_function');


class Student extends Person {
    public $university;

    public function study() {
        echo $this->name . " учится в " . $this->university;
    }
}

trait Animal {
    public $name;
    public function makeSound() {
        echo "The animal makes a sound.";
    }
}

trait CanFly {
    public function fly() {
        echo "The animal can fly.";
    }
}

class Bat {
    use Animal, CanFly;

    public function makeSound() {
        echo "Screech!";
    }
}

$a = array("a" => "яблоко", "b" => "банан");
$b = array("a" => "груша", "b" => "клубника", "c" => "вишня");

$c = $a + $b; // Объединение $a и $b

class MyClass {}

class NotMyClass {}

$a = new MyClass();

var_dump($a instanceof MyClass);
var_dump($a instanceof NotMyClass);


$ids ="1,2,3,";
substr($ids, 0, -1);