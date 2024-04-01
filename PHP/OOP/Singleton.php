<?php
class Singleton
{
    /**
     * @var Singleton The reference to *Singleton* instance of this class
     */
    protected static $instance;

    /**
     * Returns the *Singleton* instance of this class.
     *
     * @return Singleton The *Singleton* instance.
     */
    public static function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    protected function __construct()
    {
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * *Singleton* instance.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing of the *Singleton*
     * instance.
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

class SingletonChild extends Singleton
{
}

$obj = Singleton::getInstance();
\var_dump($obj === Singleton::getInstance());             // bool(true)

$anotherObj = SingletonChild::getInstance();
\var_dump($anotherObj === Singleton::getInstance());      // bool(false)

\var_dump($anotherObj === SingletonChild::getInstance()); // bool(true)
//Этот код реализует данный шаблон, используя статические переменные и статический метод getInstance(). Обратите внимание на следующее:
//
//Конструктор __construct сделан защищённым (protected), чтобы запретить создание нового объекта с помощью оператора new.
//Магический метод __clone определён как частный (private), чтобы предотвратить клонирование экземпляра класса с помощью clone.
//Магический метод __wakeup определён как частный (private), чтобы предотвратить десериализации экземпляра класса через глобальную функцию \unserialize().
//Новый экземпляр создаётся с помощью позднего статического связывания в статическом методе getInstance() с ключевым словом static. This allows the subclassing of the class Singleton in the example.
//Шаблон Одиночка полезен тогда, когда нужно быть уверенным, что экземпляр класса только один во жизненном цикле запроса для веб приложения. Обычно это происходит, когда имеется глобальный объект (например Configuration класс) или общий ресурс (например очередь событий).
//
//Вы должны быть осторожными, используя этот шаблон, поскольку по своей природе он вводит глобальное утверждение экземпляра в приложении, понижая тем самым тестируемость. В большинстве случаев внедрение зависимостей могут (должны) использоваться вместо Singleton класса. Используя внедрение зависимости, означает, что мы не вводим ненужных соединений в дизайн наших приложения, а объект, используя общий или глобальный ресурс, не требует знания конкретного класса.





/**
 * Одиночка
 */
final class Product
{
    /**
     * @var self
     */
    private static $instance;

    /**
     * @var mixed
     */
    public $a;


    /**
     * Возвращает экземпляр себя
     *
     * @return self
     */
    public static function getInstance()
    {
        if (!(self::$instance instanceof self)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Конструктор закрыт
     */
    private function __construct()
    {
    }

    /**
     * Клонирование запрещено
     */
    private function __clone()
    {
    }

    /**
     * Сериализация запрещена
     */
    private function __sleep()
    {
    }

    /**
     * Десериализация запрещена
     */
    private function __wakeup()
    {
    }
}

/*
 * =====================================
 *           USING OF SINGLETON
 * =====================================
 */

$firstProduct = Product::getInstance();
$secondProduct = Product::getInstance();

$firstProduct->a = 1;
$secondProduct->a = 2;

print_r($firstProduct->a);
// 2
print_r($secondProduct->a);
// 2

//Принцип синглтона прост, как пять копеек. Для того, чтобы обеспечить существование только одного экземпляра класса Product, мы закрыли все магические методы для создания экземпляра класса, клонирования и сериализации. Единственный возможный способ получить объект – воспользоваться статическим методом Product::getInstance(). При первом обращении класс сам создаст экземпляр себя и положит его в статическое свойство Product::$instance. При последующих обращениях, в рамках выполнения скрипта, метод будет нам возвращать тот же, ранее созданный, экземпляр класса.
//
//Я добавил в класс открытое свойство $a, чтобы продемонстрировать работу одиночки. В данном примере можно увидеть, что и $firstProduct, и $secondProduct – есть ни что иное, как ссылка на один и тот же объект.
//
//
//
//
