<?php

$search = escape(trim($_GET['search_req']));
//$search = 'СЛЕСАРНЫЙ ';


$date = new DateTime();
$date->sub(new DateInterval('P30D'));
$date_format = $date->format('Y-m-d H:i:s');


usort($offers, function ($a, $b) {
    if ($a['count_main_similar'] > $b['count_main_similar']) {
        return 1;
    } elseif ($a['count_main_similar'] < $b['count_main_similar']) {
        return -1;
    }
    return 0;
});


if (strlen($search) < 6) { // x2
    print_r('<br>');
    print_r('Запрос должен быть длиннее 2х символов');
    print_r('<br>');
    return;
}

$search_ = explode(' ', $search);
$search_sql = '';
foreach ($search_ as $k => $v) {
    if ($v != '') {
        $search_sql.= " pagetitle like '%" . $v . "%' and";
    }
}


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




$result_score_max=0;
// pager start
$page_current = 1;
if (isset($_GET['page_n'])) {
    $page_current = $_GET['page_n'];
}

$page_step = 16;
$page_max = intval($result_score_max / $page_step);
if ($result_score_max % $page_step != 0) {
    $page_max = $page_max + 1;
}
if ($page_current > $page_max) {
    $page_current = $page_max;
}
// pager end


//$sku_main = limit " . $page_step . " offset " . $page_step * ($page_current - 1), "0");


form_pages("https://gresson.ru/search2/?search_req=".trim($_GET['search_req']),"page_n",$page_current,$page_max);
function form_pages($base_link, $get_param, $current_page, $max_mage)
{
    if ($max_mage <= 1) {
        return;
    }
    ?>
    <div class="pages">
        Страница:
        <?php
        for ($i = 1; $i <= $max_mage; $i++) {
// 1000    1 2 3  ...498 499 _ input 500 (enter) _ 501 502 ... 998 999 1000
            if ($i == $current_page) {
                ?>
                <div class="pages_item active">
                    <input type="text" value="<?php echo $i ?>" id="pages_input">
                </div>
                <?php
            } else {
                if ($max_mage > 20) {
                    if ($i <= 3 || $i >= $max_mage - 3 || ($i > $current_page - 3 && $i < $current_page + 3)) {
                        ?>
                        <div class="pages_item">
                            <a href="<?php echo $base_link . '&' . $get_param . '=' . $i ?>"> <?php echo $i ?></a>
                        </div>
                        <?php
                    } else {
                        if ($i == 4) {
                            ?>
                            <div class="pages_item">
                                ...
                            </div>
                            <?php
                        }
                        if ($i == $max_mage - 4) {
                            ?>
                            <div class="pages_item">
                                ...
                            </div>
                            <?php
                        }
                    }
                } else {
                    ?>
                    <div class="pages_item">
                        <a href="<?php echo $base_link . '&' . $get_param . '=' . $i ?>"> <?php echo $i ?></a>
                    </div>
                    <?php
                }
            }


        }
        ?>
    </div>
    <script>
        let input = document.getElementById("pages_input")
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                window.location.replace(' <?php echo $base_link . '&' . $get_param . '='  ?>' + $('#pages_input').val())
            }
        });
    </script>
    <style>
        #pages_input {
            width: 50px;
        }

        .pages_item {
            padding: 5px;
        }

        .pages {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
    </style>
    <?php
}
