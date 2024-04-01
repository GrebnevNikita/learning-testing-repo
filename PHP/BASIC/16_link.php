<?php

// & - link allow strait use of variable, not copy


$string = 123;
function add_some_extra(&$string)
{
    $string .= 'and something extra.';
}