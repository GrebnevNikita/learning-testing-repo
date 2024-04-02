Readonly-свойства ¶
Начиная с PHP 8.1.0 разрешается объявлять свойство
с модификатором readonly, который защищает свойство от изменения после инициализации.


<?php

class Test
{
//    public readonly string $prop;

    public function __construct(string $prop)
    {
        // Правильная инициализация.
        $this->prop = $prop;
    }
}

$test = new Test("foobar");

// Правильное чтение
var_dump($test->prop); // string(6) "foobar"

// Неправильное переопределение. Не имеет значения, что присвоенное значение такое же
$test->prop = "foobar";
// Error: Cannot modify readonly property Test::$prop

?>

Неправильная инициализация readonly-свойств

<?php

class Test1
{
//    public readonly string $prop;
}

$test1 = new Test1();

// Неправильная инициализация за пределами закрытой области
$test1->prop = "foobar";
// Error: Cannot initialize readonly property Test1::$prop from global scope

?>
Замечание:

Нельзя явным образом указывать значение по умолчанию для readonly-свойств,
потому что readonly-свойство со значением по умолчанию по существу совпадает с константой, и поэтому бесполезно.

<?php

class Test2
{
    // Error: Readonly property Test::$prop cannot have default value
//    public readonly int $prop = 42;
}

?>
