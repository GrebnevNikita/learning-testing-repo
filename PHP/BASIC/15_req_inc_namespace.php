<?php



//require ¶


//require is identical to include
//except upon failure it will also produce a fatal E_COMPILE_ERROR level error.
// In other words, it will halt the script whereas include only emits a warning
// (E_WARNING) which allows the script to continue.

//include

//Note that both include and require raise additional E_WARNINGs,
// if the file cannot be accessed, before raising the final E_WARNING or E_ERROR, respectively.


//require_once ¶
//include_once  ¶


