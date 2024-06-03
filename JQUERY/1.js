
//The purpose of jQuery is to make it much easier to use JavaScript on your website.




$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});


$("button").click(function(){
    $("p").hide(1000);
});

$("button").click(function(){
    $("p").toggle();
});

$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});

$("#flip").click(function(){
    $("#panel").slideDown();
});

$("#flip").click(function(){
    $("#panel").slideUp();
});

$("#flip").click(function(){
    $("#panel").slideToggle();
});


$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});


$("#p1").css("color", "red").slideUp(2000).slideDown(2000);

//text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields

$("button").click(function(){
    alert($("#w3s").attr("href"));
});


$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
});


// append() - Inserts content at the end of the selected elements
// prepend() - Inserts content at the beginning of the selected elements
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements



//addClass() - Adds one or more classes to the selected elements
// removeClass() - Removes one or more classes from the selected elements
// toggleClass() - Toggles between adding/removing classes from the selected elements
// css() - Sets or returns the style attribute



$("p").css("background-color");

$("p").css({"background-color": "yellow", "font-size": "200%"});


// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()



// parent()
// parents()
// parentsUntil()


// children()
// find()


// siblings()
// next()
// nextAll()
// nextUntil()
// prev()
// prevAll()
// prevUntil()



//The first(), last(), eq(), filter() and not() Methods
// The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.
//
// Other filtering methods, like filter() and not() allow you to select elements that match, or do not match, a certain criteria.



$("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

("button").click(function(){
    $.post("demo_test_post.asp",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
});



function ajax_unsync(data) {
    let data_out;
    jQuery.ajax({
        async: true,
        type: "POST",
        url: '/index.php',
        data: data,
        success: function (data) {
            data_out = data;
        }
    });
    return data_out

}

function ajax_wfr(data) {
    let data_out;
    jQuery.ajax({
        async: false,
        type: "POST",
        url: '/index.php',
        data: data,
        success: function (data) {
            data_out = data;
        }
    });
    return data_out
}



// The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.
// You can of course still use jQuery, simply by writing the full name instead of the shortcut:

$.noConflict();
jQuery(document).ready(function(){
    jQuery("button").click(function(){
        jQuery("p").text("jQuery is still working!");
    });
});




// jQuery Filters
// Use jQuery to filter/search for specific elements.
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});














