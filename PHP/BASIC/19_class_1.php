Простое определение класса

<?php

class SimpleClass
{
    // Объявление свойства
    public $var = 'значение по умолчанию';

    // Объявление метода
    public function displayVar() {
        echo $this->var;
    }
}

?>

Создание экземпляра класса

<?php

$instance = new SimpleClass();

// Или создаём экземпляр класса через переменную:
$className = 'SimpleClass';
$instance = new $className(); // new SimpleClass()

?>
