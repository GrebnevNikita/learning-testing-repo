<?php
namespace Aaaa;

interface iiiiiii
{
    const ssss1 = 1;

}

abstract class abbb
{

    public $tttt = 1;
    protected $pppp = 1;
    private $prrrr = 1;
    const asd21 = 1;
    static $ssss1 = 1;

    static function ffff1()
    {
    }

    private function ffff2()
    {
    }

    protected function ffff3()
    {
    }

    public function ffff4()
    {
    }

//    abstract public function ffff35()
//    {
//    }


}

class ccccc extends abbb
{
    static $sssss2 = 2;

    function ffff()
    {

    }
}


$ccccc = new ccccc;

$ccccc->tttt = 2;
dasdsfd($ccccc);
function dasdsfd($rrrr)
{
    $rrrr->tttt = 3;
    print_r('<br>');
    print_r($rrrr->tttt);
    print_r('<br>');
}

print_r('<br>');
print_r($ccccc->tttt);
print_r('<br>');