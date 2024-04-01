


Operator Precedence
Associativity	Operators	Additional Information
(n/a)	clone new	clone and new
right	**	arithmetic
(n/a)	+ - ++ -- ~ (int) (float) (string) (array) (object) (bool) @	arithmetic (unary + and -), increment/decrement, bitwise, type casting and error control
left	instanceof	type
(n/a)	!	logical
left	* / %	arithmetic
left	+ - .	arithmetic (binary + and -), array and string (. prior to PHP 8.0.0)
left	<< >>	bitwise
left	.	string (as of PHP 8.0.0)
non-associative	< <= > >=	comparison
non-associative	== != === !== <> <=>	comparison
left	&	bitwise and references
left	^	bitwise
left	|	bitwise
left	&&	logical
left	||	logical
right	??	null coalescing
non-associative	? :	ternary (left-associative prior to PHP 8.0.0)
right	= += -= *= **= /= .= %= &= |= ^= <<= >>= ??=	assignment
(n/a)	yield from	yield from
(n/a)	yield	yield
(n/a)	print	print
left	and	logical
left	xor	logical
left	or	logical


Arithmetic Operators
Example	Name	Result
+$a	Identity	Conversion of $a to int or float as appropriate.
-$a	Negation	Opposite of $a.
$a + $b	Addition	Sum of $a and $b.
$a - $b	Subtraction	Difference of $a and $b.
$a * $b	Multiplication	Product of $a and $b.
$a / $b	Division	Quotient of $a and $b.
$a % $b	Modulo	Remainder of $a divided by $b.
$a ** $b	Exponentiation	Result of raising $a to the $b'th power.


Increment/decrement Operators
Example	Name	Effect
++$a	Pre-increment	Increments $a by one, then returns $a.
$a++	Post-increment	Returns $a, then increments $a by one.
--$a	Pre-decrement	Decrements $a by one, then returns $a.
$a--	Post-decrement	Returns $a, then decrements $a by one.

Bitwise Operators
Example	Name	Result
$a & $b	And	Bits that are set in both $a and $b are set.
$a | $b	Or (inclusive or)	Bits that are set in either $a or $b are set.
$a ^ $b	Xor (exclusive or)	Bits that are set in $a or $b but not both are set.
~ $a	Not	Bits that are set in $a are not set, and vice versa.
$a << $b	Shift left	Shift the bits of $a $b steps to the left (each step means "multiply by two")
$a >> $b	Shift right	Shift the bits of $a $b steps to the right (each step means "divide by two")