<?php


$stol_rules["sub_colors"]["PW"]["Premium White"]["Белый Премиум"] = "https://4you.ru/image/cache/catalog/options/option_white-24x24.png";
$stol_rules["sub_colors"]["CB"]["Cream Beige"]["Крем Бежевый"] = 1;
$stol_rules["sub_colors"]["FW"]["Fleetwood White"]["Флитвуд Белый"] = 1;
$stol_rules["sub_colors"]["KC"]["Kentucky Chestnut"]["Каштан Кентукки"] = 1;
$stol_rules["sub_colors"]["CON"]["Corbridge Oak Natural"]["Дуб Корбридж Натуральный"] = 1;
$stol_rules["sub_colors"]["SO"]["Sorano Oak"]["Дуб Сорано"] = 1;
$stol_rules["sub_colors"]["HNO"]["Halifax Natural Oak"]["Дуб Галифакс Натуральный"] = "https://4you.ru/image/cache/catalog/options/image%20187%20(3)-24x24.png";
$stol_rules["sub_colors"]["KBO"]["Kansas Brown Oak"]["Дуб Канзас Коричневый"] = "https://4you.ru/image/cache/catalog/options/image%20187-24x24.png";
$stol_rules["sub_colors"]["HOT"]["Halifax Oak Tobacco"]["Дуб Галифакс Табак"] = "https://4you.ru/image/cache/catalog/options/image%20187%20(1)-24x24.png";
$stol_rules["sub_colors"]["OGT"]["Oak Gladstone Tobacco"]["Дуб Гладстоун Табак"] = "https://4you.ru/image/cache/catalog/options/image%20187%20(2)-24x24.png";
$stol_rules["sub_colors"]["BF"]["Black Forest"]["Лес Чёрный"] = "https://4you.ru/image/cache/catalog/options/option_black-24x24.png";


foreach ($stol_rules["sub_colors"] as $k => $v) {


    foreach ($v as $k2 => $v2) {
        echo '$stol_rules["sub_colors"]["' . $k . '"]["eng"] = "' . $k2 . '";';print_r('<br>');
        foreach ($v2 as $k3 => $v3) {
            echo '$stol_rules["sub_colors"]["' . $k . '"]["rus"] = "' . $k3 . '";'; print_r('<br>');

            echo '$stol_rules["sub_colors"]["' . $k . '"]["img"] = "' . $v3 . '";';print_r('<br>');
            print_r('<br>');
        }
    }


}