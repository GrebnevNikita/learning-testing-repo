<?php
// Valid constant names
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// Simple scalar value
const CONSTANT = 'Hello World';

echo CONSTANT;

// Scalar expression
const ANOTHER_CONST = CONSTANT.'; Goodbye World';
echo ANOTHER_CONST;

const animals = array('dog', 'cat', 'bird');
const ANIMALS = array('dog', 'cat', 'bird');
echo ANIMALS[1]; // outputs "cat"

// Constant arrays
define('ANIMALS', array(
'dog',
'cat',
'bird'
));
echo ANIMALS[1]; // outputs "cat"
?>

Magic constants ¶
There are nine magical constants that change depending on where they are used.
For example, the value of __LINE__ depends on the line that it's used on in your script.
All these "magical" constants are resolved at compile time, unlike regular constants,
which are resolved at runtime. These special constants are case-insensitive and are as follows:

PHP's magic constants
Name	Description
__LINE__	The current line number of the file.
__FILE__	The full path and filename of the file with symlinks resolved. If used inside an include, the name of the included file is returned.
__DIR__	The directory of the file. If used inside an include, the directory of the included file is returned. This is equivalent to dirname(__FILE__). This directory name does not have a trailing slash unless it is the root directory.
__FUNCTION__	The function name, or {closure} for anonymous functions.
__CLASS__	The class name. The class name includes the namespace it was declared in (e.g. Foo\Bar). When used in a trait method, __CLASS__ is the name of the class the trait is used in.
__TRAIT__	The trait name. The trait name includes the namespace it was declared in (e.g. Foo\Bar).
__METHOD__	The class method name.
__NAMESPACE__	The name of the current namespace.



Core Predefined Constants ¶
These constants are defined by the PHP core. This includes PHP, the Zend engine, and SAPI modules.

PHP_VERSION (string)
The current PHP version as a string in "major.minor.release[extra]" notation.
PHP_MAJOR_VERSION (int)
The current PHP "major" version as an integer (e.g., int(5) from version "5.2.7-extra").
PHP_MINOR_VERSION (int)
The current PHP "minor" version as an integer (e.g., int(2) from version "5.2.7-extra").
PHP_RELEASE_VERSION (int)
The current PHP "release" version as an integer (e.g., int(7) from version "5.2.7-extra").
PHP_VERSION_ID (int)
The current PHP version as an integer, useful for version comparisons (e.g., int(50207) from version "5.2.7-extra").
PHP_EXTRA_VERSION (string)
The current PHP "extra" version as a string (e.g., '-extra' from version "5.2.7-extra"). Often used by distribution vendors to indicate a package version.
ZEND_THREAD_SAFE (bool)
Indicates whether the current build of PHP is thread safe.
ZEND_DEBUG_BUILD (bool)
Indicates whether the current build of PHP is a debug build.
PHP_ZTS (int)
Indicates whether the current build of PHP is thread safe.
PHP_DEBUG (int)
Indicates whether the current build of PHP is a debug build.
PHP_MAXPATHLEN (int)
The maximum length of filenames (including path) supported by this build of PHP.
PHP_OS (string)
The operating system PHP was built for.
PHP_OS_FAMILY (string)
The operating system family PHP was built for. One of 'Windows', 'BSD', 'Darwin', 'Solaris', 'Linux' or 'Unknown'. Available as of PHP 7.2.0.
PHP_SAPI (string)
The Server API for this build of PHP. See also php_sapi_name().
PHP_EOL (string)
The correct 'End Of Line' symbol for this platform.
PHP_INT_MAX (int)
The largest integer supported in this build of PHP. Usually int(2147483647) in 32 bit systems and int(9223372036854775807) in 64 bit systems.
PHP_INT_MIN (int)
The smallest integer supported in this build of PHP. Usually int(-2147483648) in 32 bit systems and int(-9223372036854775808) in 64 bit systems. Usually, PHP_INT_MIN === ~PHP_INT_MAX.
PHP_INT_SIZE (int)
The size of an integer in bytes in this build of PHP.
PHP_FLOAT_DIG (int)
Number of decimal digits that can be rounded into a float and back without precision loss. Available as of PHP 7.2.0.
PHP_FLOAT_EPSILON (float)
Smallest representable positive number x, so that x + 1.0 != 1.0. Available as of PHP 7.2.0.
PHP_FLOAT_MIN (float)
Smallest representable positive floating point number. If you need the smallest representable negative floating point number, use - PHP_FLOAT_MAX. Available as of PHP 7.2.0.
PHP_FLOAT_MAX (float)
Largest representable floating point number. Available as of PHP 7.2.0.
DEFAULT_INCLUDE_PATH (string)
PEAR_INSTALL_DIR (string)
PEAR_EXTENSION_DIR (string)
PHP_EXTENSION_DIR (string)
The default directory where to look for dynamically loadable extensions (unless overridden by extension_dir). Defaults to PHP_PREFIX (or PHP_PREFIX . "\\ext" on Windows).
PHP_PREFIX (string)
The value --prefix was set to at configure. On Windows, it is the value --with-prefix was set to at configure.
PHP_BINDIR (string)
The value --bindir was set to at configure. On Windows, it is the value --with-prefix was set to at configure.
PHP_BINARY (string)
Specifies the PHP binary path during script execution.
PHP_MANDIR (string)
Specifies where the manpages were installed into.
PHP_LIBDIR (string)
PHP_DATADIR (string)
PHP_SYSCONFDIR (string)
PHP_LOCALSTATEDIR (string)
PHP_CONFIG_FILE_PATH (string)
PHP_CONFIG_FILE_SCAN_DIR (string)
PHP_SHLIB_SUFFIX (string)
The build-platform's shared library suffix, such as "so" (most Unixes) or "dll" (Windows).
PHP_FD_SETSIZE (int)
The maximum number of file descriptors for select system calls. Available as of PHP 7.1.0.
E_ERROR (int)
Error reporting constant
E_WARNING (int)
Error reporting constant
E_PARSE (int)
Error reporting constant
E_NOTICE (int)
Error reporting constant
E_CORE_ERROR (int)
Error reporting constant
E_CORE_WARNING (int)
Error reporting constant
E_COMPILE_ERROR (int)
Error reporting constant
E_COMPILE_WARNING (int)
Error reporting constant
E_USER_ERROR (int)
Error reporting constant
E_USER_WARNING (int)
Error reporting constant
E_USER_NOTICE (int)
Error reporting constant
E_RECOVERABLE_ERROR (int)
Error reporting constant.
E_DEPRECATED (int)
Error reporting constant.
E_USER_DEPRECATED (int)
Error reporting constant.
E_ALL (int)
Error reporting constant
E_STRICT (int)
Error reporting constant
__COMPILER_HALT_OFFSET__ (int)
true (bool)
See Booleans.
false (bool)
See Booleans.
null (null)
See Null.
PHP_WINDOWS_EVENT_CTRL_C (int)
A Windows CTRL+C event. Available as of PHP 7.4.0 (Windows only).
PHP_WINDOWS_EVENT_CTRL_BREAK (int)
A Windows CTRL+BREAK event. Available as of PHP 7.4.0 (Windows only).
PHP_CLI_PROCESS_TITLE (bool)
Indicates whether the setting and getting of the process title is available. Available only under the CLI SAPI.
STDERR (resource)
An already opened stream to stderr. Available only under the CLI SAPI.
STDIN (resource)
An already opened stream to stdin. Available only under the CLI SAPI.
STDOUT (resource)
An already opened stream to stdout. Available only under the CLI SAPI.