
Интерфейс traversable
Интерфейс, определяющий, является ли класс обходимым (traversable) с использованием foreach.
Абстрактный базовый интерфейс, который не может быть реализован сам по себе.
Вместо этого должен реализовываться IteratorAggregate или Iterator.


Интерфейс Iterator ¶
Интерфейс для внешних итераторов или объектов, которые могут повторять себя изнутри.
interface Iterator extends Traversable {
/* Методы */
public current(): mixed
public key(): mixed
public next(): void
public rewind(): void
public valid(): bool
}


Интерфейс IteratorAggregate ¶
Интерфейс для создания внешнего итератора.


Класс InternalIterator ¶
Класс для упрощения реализации интерфейса IteratorAggregate для внутренних классов.

final class InternalIterator implements Iterator {
/* Методы */
private __construct()
public current(): mixed
public key(): mixed
public next(): void
public rewind(): void
public valid(): bool
}
Содержание ¶
InternalIterator::__construct — Закрытый конструктор для запрета прямой инициализации
InternalIterator::current — Возвращает текущий элемент
InternalIterator::key — Возвращает ключ текущего элемента
InternalIterator::next — Переходит к следующему элементу
InternalIterator::rewind — Перематывает итератор к первому элементу
InternalIterator::valid — Проверяет, действительна ли текущая позиция


Throwable является родительским интерфейсом для всех объектов,
выбрасывающихся с помощью выражения throw, включая классы Error и Exception.

ArrayAccess
Интерфейс разрешает обращаться к объектам как к массивам.

Serializable
Интерфейс для индивидуальной сериализации.

Класс Closure
Класс, используемый для создания анонимных функций.


Класс stdClass ¶
Пустой класс общего назначения с динамическими свойствами.

Класс Generator ¶
Создание объектов типа Generator описано в разделе Генераторы.

Класс Fiber ¶
Файберы представляют собой прерываемые функции полного цикла

Класс WeakReference ¶
Класс WeakReference предоставляет способ доступа к объекту, не влияя при этом на количество ссылок на него,
таким образом сборщик мусора сможет освободить этот объект.

Класс WeakMap — карта, или словарь, который принимает объекты как ключи.
Класс WeakMap реализует интерфейсы ArrayAccess, Traversable (через интерфейс IteratorAggregate) и Countable,
поэтому с объектом класса часто работают так же, как с ассоциативным массивом.
