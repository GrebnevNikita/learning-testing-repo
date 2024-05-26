


//AJAX
// AJAX is not a programming language.
// AJAX is a technique for accessing web servers from a web page.
// AJAX stands for Asynchronous JavaScript And XML.


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}


xhttp.open("GET", "ajax_test.asp", true);
// By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();

xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");





















