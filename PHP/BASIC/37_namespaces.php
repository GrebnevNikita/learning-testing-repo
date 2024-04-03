Обзор пространств имён ¶

Пример синтаксиса с пространством имён

<?php
//__NAMESPACE__


namespace Foo\Bar\subnamespace;

const FOO = 1;
function foo() {}
class foo
{
    static function staticmethod() {}
}
?>
    file2.php

<?php

namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo() {}
class foo
{
    static function staticmethod() {}
}

/* Неполные имена */
foo(); // Разрешается в функцию Foo\Bar\foo
foo::staticmethod(); // Разрешается в метод staticmethod класса Foo\Bar\foo
echo FOO; // Разрешается в константу Foo\Bar\FOO

/* Полные имена */
subnamespace\foo(); // Разрешается в функцию Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // Разрешается в метод staticmethod класса Foo\Bar\subnamespace\foo
echo subnamespace\FOO; // Разрешается в константу Foo\Bar\subnamespace\FOO

/* Абсолютные имена */
\Foo\Bar\foo(); // Разрешается в функцию Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // Разрешается в метод staticmethod класса Foo\Bar\foo
echo \Foo\Bar\FOO; // Разрешается в константу Foo\Bar\FOO

?>
Обратите внимание, что для доступа к глобальным классам,
функциям или константам разрешается указывать абсолютное имя, например, \strlen(), \Exception или \INI_ALL.


Thought this might help other newbies like me...
Name collisions means:
you create a function named db_connect, and somebody elses code that you use in your file
(i.e. an include) has the same function with the same name.
To get around that problem, you rename your function SteveWa_db_connect  which makes your code longer and harder to read.
Now you can use namespaces to keep your function name separate from anyone else's function name,
and you won't have to make extra_long_named functions to get around the name collision problem.
So a namespace is like a pointer to a file path where you can find the source of the function you are working with

Описание нескольких пространств имён, простой синтаксис

<?php

namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>

    Описание нескольких пространств имён, синтаксис со скобками

<?php

namespace MyProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}

namespace AnotherProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}

?>

Ключевое слово namespace и магическая константа __NAMESPACE__ ¶
<?php

namespace MyProject;

use blah\blah as mine; // Смотрите «Пространства имён: псевдонимирование и импорт»

blah\mine(); // Вызывает функцию MyProject\blah\mine()
namespace\blah\mine(); // Вызывает функцию MyProject\blah\mine()

namespace\func(); // Вызывает функцию MyProject\func()
namespace\sub\func(); // Вызывает функцию MyProject\sub\func()
namespace\cname::method(); // Вызывает статический метод method класса MyProject\cname
$a = new namespace\sub\cname(); // Создаёт экземпляр класса MyProject\sub\cname
$b = namespace\CONSTANT; // Присваивает значение константы MyProject\CONSTANT переменной $b

?>

Пространства имён: псевдонимирование и импорт ¶

Импорт или псевдонимирование через ключевое слово use

<?php

namespace foo;

use My\Full\Classname as Another;

// Это то же, что и My\Full\NSname as NSname
use My\Full\NSname;

// Импортирование глобального класса
use ArrayObject;

// Импортирование функции
use function My\Full\functionName;

// Создание псевдонима функции
use function My\Full\functionName as func;

// Импортирование константы
use const My\Full\CONSTANT;

$obj = new namespace\Another; // Создаёт экземпляр класса foo\Another
$obj = new Another; // Создаёт объект класса My\Full\Classname
NSname\subns\func(); // Вызывает функцию My\Full\NSname\subns\func

$a = new ArrayObject(array(1)); // Создаёт объект класса ArrayObject
// без выражения use ArrayObject был бы создан объект класса foo\ArrayObject

func(); // вызывает функцию My\Full\functionName
echo CONSTANT; // выводит содержимое константы My\Full\CONSTANT

?>


Глобальное пространство ¶

\
