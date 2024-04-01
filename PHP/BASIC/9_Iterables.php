


Iterables ¶
Iterable is a built-in compile time type alias for array|Traversable.
From its introduction in PHP 7.1.0 and prior to PHP 8.2.0, iterable was a
built-in pseudo-type that acted as the aforementioned type alias and can
be used as a type declaration. An iterable type can be used in foreach and with yield from within a generator.

Note:

Functions declaring iterable as a return type may also be generators.

Example #1 Iterable generator return type example

<?php

function gen(): iterable {
    yield 1;
    yield 2;
    yield 3;
}

?>
