

Floating point numbers (also known as "floats", "doubles", or "real numbers")
 can be specified using any of the following syntaxes:

<?php
$a = 1.234;
$b = 1.2e3;
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0


$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if (abs($a - $b) < $epsilon) {
    echo "true";
}
?>
A string is a series of characters, where a character is the same as a byte. This means that PHP only supports a 256-character set, and hence does not offer native Unicode support. See details of the string type.

Note: On 32-bit builds, a string can be as large as up to 2GB (2147483647 bytes maximum)