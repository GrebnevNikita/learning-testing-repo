

The null type is PHP's unit type, i.e. it has only one value: null.
Undefined, and unset() variables will resolve to the value null.


The bool type only has two values, and is used to express a truth value. It can be either true or false.

An int is a number of the set ℤ = {..., -2, -1, 0, 1, 2, ...}.

<?php
$a = 1234; // decimal number
$a = 0123; // octal number (equivalent to 83 decimal)
//$a = 0o123; // octal number (as of PHP 8.1.0)
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
$a = 0b11111111; // binary number (equivalent to 255 decimal)
$a = 1_234_567; // decimal number (as of PHP 7.4.0)

//32-bit system
$large_number = 2147483647;
var_dump($large_number);                     // int(2147483647)
$large_number = 2147483648;
var_dump($large_number);                     // float(2147483648)

//64-bit system
$large_number = 9223372036854775807;
var_dump($large_number);                     // int(9223372036854775807)
$large_number = 9223372036854775808;
var_dump($large_number);                     // float(9.2233720368548E+18)

var_dump(25/7);         // float(3.5714285714286)
var_dump((int) (25/7)); // int(3)
var_dump(round(25/7));  // float(4)




?>





