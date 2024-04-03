Сериализация объектов ¶
Сериализация объектов - сохранение объектов между сессиями ¶

<?php
// A.php:

class A {
    public $one = 1;

    public function show_one() {
        echo $this->one;
    }
}

// page1.php:

include "A.php";

$a = new A;
$s = serialize($a);
// сохраняем $s где-нибудь, откуда page2.php сможет его получить.
file_put_contents('store', $s);

// page2.php:

// это нужно для того, чтобы функция unserialize работала правильно.
include "A.php";

$s = file_get_contents('store');
$a = unserialize($s);

// теперь можно использовать метод show_one() объекта $a.
$a->show_one();
?>