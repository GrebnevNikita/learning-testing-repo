PHP, which stands for "PHP: Hypertext Preprocessor" is a widely-used
 Open Source general-purpose scripting language that is especially suited
 for web development and can be embedded into HTML. Its syntax draws upon C, Java, and Perl,
 and is easy to learn. The main goal of the language is to allow web developers
 to write dynamically generated web pages quickly, but you can do much more with PHP.

<?php echo "Some text"; ?>
<?= "But newline now" ?>


<?php
echo 'This is a test'; // This is a one-line c++ style comment
/* This is a multi line comment
   yet another line of comment */
echo 'This is yet another test';
echo 'One Final Test'; # This is a one-line shell-style comment
?>

PHP supports one error control operator: the at sign (@)

<?php
/* Intentional file error */
$my_file = @file ('non_existent_file') or
die ("Failed opening file: error was '" . error_get_last()['message'] . "'");
$cache=[];
// this works for any expression, not just functions:
$value = @$cache[1];
// will not issue a notice if the index $key doesn't exist.

?>

<?php
$output = `ls -al`;
echo "<pre>$output</pre>";

$name  =123;
printf("Hello %s\r\n", $name);
?>
