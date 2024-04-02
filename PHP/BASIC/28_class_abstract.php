Абстрактные классы ¶
PHP поддерживает определение абстрактных классов и методов.
На основе абстрактного класса нельзя создавать объекты, и любой класс,
содержащий хотя бы один абстрактный метод, должен быть определён как абстрактный.
Методы, объявленные абстрактными, несут, по существу, лишь описательный смысл и не могут включать реализацию.

При наследовании от абстрактного класса, все методы, помеченные абстрактными в
родительском классе, должны быть определены в дочернем классе и следовать
обычным правилам наследования и совместимости сигнатуры.

Пример #1 Пример абстрактного класса

<?php

abstract class AbstractClass
{
    public int $somevar = 1;
    private int $somevar2 = 2;
    static int $somevar3 = 3;
    const SOMEVAR4 = 3;

    // Данные методы должны быть определены в дочернем классе
    abstract protected function getValue();

    abstract protected function prefixValue($prefix);

    // Общий метод
    public function printOut()
    {
        print $this->getValue() . "\n";
    }
}

class ConcreteClass1 extends AbstractClass
{
    protected function getValue()
    {
        return "ConcreteClass1";
    }

    public function prefixValue($prefix)
    {
        return "{$prefix}ConcreteClass1";
    }
}

class ConcreteClass2 extends AbstractClass
{
    public function getValue()
    {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix)
    {
        return "{$prefix}ConcreteClass2";
    }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') . "\n";

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') . "\n";
?>
Результат выполнения приведённого примера:

ConcreteClass1
FOO_ConcreteClass1
ConcreteClass2
FOO_ConcreteClass2
Пример #2 Пример абстрактного класса

<?php

abstract class AbstractClass2
{
    // Наш абстрактный метод требует только определить необходимые аргументы
    abstract protected function prefixName($name);

}

class ConcreteClass extends AbstractClass2
{

    // Наш дочерний класс может определить необязательные аргументы, не указанные в объявлении родительского метода
    public function prefixName($name, $separator = ".")
    {
        if ($name == "Pacman") {
            $prefix = "Mr";
        } elseif ($name == "Pacwoman") {
            $prefix = "Mrs";
        } else {
            $prefix = "";
        }
        return "{$prefix}{$separator} {$name}";
    }
}

$class = new ConcreteClass;
echo $class->prefixName("Pacman"), "\n";
echo $class->prefixName("Pacwoman"), "\n";
?>
Результат выполнения приведённого примера:

Mr. Pacman
Mrs. Pacwoman