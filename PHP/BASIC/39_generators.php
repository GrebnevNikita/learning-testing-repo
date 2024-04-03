Генераторы предоставляют лёгкий способ реализации простых итераторов
без использования дополнительных ресурсов или сложностей,
связанных с реализацией класса, реализующего интерфейс Iterator.

<?php
function xrange($start, $limit, $step = 1) {
    if ($start <= $limit) {
        if ($step <= 0) {
            throw new LogicException('Шаг должен быть положительным');
        }

        for ($i = $start; $i <= $limit; $i += $step) {
            yield $i;
        }
    } else {
        if ($step >= 0) {
            throw new LogicException('Шаг должен быть отрицательным');
        }

        for ($i = $start; $i >= $limit; $i += $step) {
            yield $i;
        }
    }
}

/* Обратите внимание, что и range() и xrange() дадут один и тот же вывод */

echo 'Нечётные однозначные числа с помощью range():  ';
foreach (range(1, 9, 2) as $number) {
    echo "$number ";
}
echo "\n";

echo 'Нечётные однозначные числа с помощью xrange(): ';
foreach (xrange(1, 9, 2) as $number) {
    echo "$number ";
}
?>
Результат выполнения приведённого примера:

Нечётные однозначные числа с помощью range():  1 3 5 7 9
Нечётные однозначные числа с помощью xrange(): 1 3 5 7 9