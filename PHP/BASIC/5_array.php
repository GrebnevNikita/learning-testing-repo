An array in PHP is actually an ordered map.
A map is a type that associates values to keys.
This type is optimized for several different uses; it can be treated as an array,
list (vector), hash table (an implementation of a map), dictionary,
collection, stack, queue, and probably more. As array values can be other arrays,
trees and multidimensional arrays are also possible.

<?php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
);

// Using the short array syntax
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
?>