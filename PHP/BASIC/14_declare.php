<?php
//declare ¶

//The declare construct is used to set execution directives
//for a block of code. The syntax of declare is similar to the syntax of other flow control constructs:
//declare (directive)
//The directive section allows the behavior of the declare block to be set. Currently only three directives are recognized:
//the ticks directive (See below for more information on the ticks directive),
//the encoding directive (See below for more information on the encoding directive) and
//the strict_types directive (See for more information the strict typing section on the type declarations page)
//
//As directives are handled as the file is being compiled, only literals may be given as directive values. Variables and constants cannot be used. To illustrate:


declare(ticks=1) {
// entire script here
}

//Ticks ¶
//A tick is an event that occurs for every N low-level tickable
//statements executed by the parser within the declare block.
// The value for N is specified using ticks=N within the declare block's directive section.
//
//Not all statements are tickable. Typically, condition expressions and argument expressions are not tickable.

//It's amazing how many people didn't grasp the concept here.
// Note the wording in the documentation.
// It states that the tick handler is called every n native execution cycles.
// That means native instructions, not including system calls (i'm guessing).
// This can give you a very good idea if you need to optimize a particular part of
// your script, since you can measure quite effectively how many native instructions are in your actual code.
//
//A good profiler would take that into account, and force you, the developer,
// to include calls to the profiler as you're entering and leaving every function.
// That way you'd be able to keep an eye on how many cycles it took each function to complete. Independent of time.
//
//That is extremely powerful, and not to be underestimated.
// A good solution would allow aggregate stats, so the total time in a
// function would be counted, including inside called functions.