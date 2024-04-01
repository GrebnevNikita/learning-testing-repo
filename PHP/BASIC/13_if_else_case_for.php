<?php
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}


for ($i = 1; $i <= 10; $i++) {
    echo $i;
}


$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}


switch ($i) {
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
}


//match usage
$food = 'cake';

$return_value = match ($food) {
    'apple' => 'This food is an apple',
    'bar' => 'This food is a bar',
    'cake' => 'This food is a cake',
};

//string(19) "This food is a cake"



?>

