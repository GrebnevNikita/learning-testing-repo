Атрибуты — это структурированные машиночитаемые метаданные, объявленные в коде.
Целью атрибутов могу быть: классы (включая анонимные), методы, функции, параметры,
свойства и константы класса. Затем описанные атрибутами метаданные можно
проанализировать во время исполнения средствами Reflection API.
Поэтому атрибуты можно рассматривать как встроенный в код язык конфигурации.

<?php
interface ActionHandler
{
    public function execute();
}

#[Attribute]
class SetUp {}

class CopyFile implements ActionHandler
{
    public string $fileName;
    public string $targetDirectory;

    #[SetUp]
    public function fileExists()
    {
        if (!file_exists($this->fileName)) {
            throw new RuntimeException("File does not exist");
        }
    }

    #[SetUp]
    public function targetDirectoryExists()
    {
        if (!file_exists($this->targetDirectory)) {
            mkdir($this->targetDirectory);
        } elseif (!is_dir($this->targetDirectory)) {
            throw new RuntimeException("Target directory $this->targetDirectory is not a directory");
        }
    }

    public function execute()
    {
        copy($this->fileName, $this->targetDirectory . '/' . basename($this->fileName));
    }
}

function executeAction(ActionHandler $actionHandler)
{
    $reflection = new ReflectionObject($actionHandler);

    foreach ($reflection->getMethods() as $method) {
        $attributes = $method->getAttributes(SetUp::class);

        if (count($attributes) > 0) {
            $methodName = $method->getName();

            $actionHandler->$methodName();
        }
    }

    $actionHandler->execute();
}

$copyAction = new CopyFile();
$copyAction->fileName = "/tmp/foo.jpg";
$copyAction->targetDirectory = "/home/user";

executeAction($copyAction);

?>
Синтаксис атрибутов ¶
Синтаксис атрибутов состоит из нескольких частей. Во-первых, декларация атрибута начинается с символа #[ и заканчивается символом ]. Во-вторых, внутри перечисляют один или несколько разделённых запятой атрибутов. Имена атрибутов могут быть неполными, полными и абсолютными, как описано в разделе Использование пространства имён: основы. Аргументы атрибутов необязательны, но если они есть, то их заключают в круглые скобки (). Аргументы атрибутов могут быть либо конкретными значениями (литералами), либо константными выражениями. Аргументы можно записывать как позиционным, так и именованным синтаксисом.

Когда Reflection API запрашивает экземпляр класса атрибута, имя атрибута трактуется как имя запрашиваемого класса, а аргументы атрибута передаются в конструктор этого класса. Поэтому для каждого атрибута необходимо создавать класс.

Пример #1 Синтаксис атрибутов

<?php
// a.php
namespace MyExample;

use Attribute;

#[Attribute]
class MyAttribute
{
    const VALUE = 'value';

    private $value;

    public function __construct($value = null)
    {
        $this->value = $value;
    }
}

// b.php

namespace Another;

use MyExample\MyAttribute;

#[MyAttribute]
#[\MyExample\MyAttribute]
#[MyAttribute(1234)]
#[MyAttribute(value: 1234)]
#[MyAttribute(MyAttribute::VALUE)]
#[MyAttribute(array("key" => "value"))]
#[MyAttribute(100 + 200)]
class Thing
{
}

#[MyAttribute(1234), MyAttribute(5678)]
class AnotherThing
{
}