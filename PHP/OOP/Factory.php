<?php



class Factory
{
    private $vehicle_make = 777;
    private $vehicle_model;

    public function __construct($make, $model)
    {
        $this->vehicle_make = $make;
        $this->vehicle_model = $model;
    }

    public function getMakeAndModel()
    {
        return $this->vehicle_make . ' ' . $this->vehicle_model;
    }
}

//class AutomobileFactory
//{
//    public static function create($make, $model)
//    {
//        return new Factory($make, $model);
//    }
//}
//
//// фабрика создаёт автомобильные объекты
//$veyron = AutomobileFactory::create('Bugatti', 'Veyron');
//
//print_r($veyron->getMakeAndModel()); // выведет "Bugatti Veyron"
//
//
////Этот код создаст объект “Автомобиль”, используя фабрику. Сделав так вы получите два преимущества: во-первых, если вам в дальнейшем нужно изменить, переименовать или заменить класс Automobile, то вы легко это сделаете, просто изменив код в фабрике AutomobileFactory, вместо того, чтобы менять его во всех местах проекта, которые используют класс Automobile; во-вторых, если вам нужно при создании объекта выполнять какие-то операции с этим объектом, то вы можете описать эти операции в фабрике, вместо того чтобы каждый раз их описывать при создании нового объекта.