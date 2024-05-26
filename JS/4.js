// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name
// document.getElementById("myImage").src = "landscape.jpg";
// document.getElementById("p2").style.color = "blue";
// <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
// document.getElementById("myBtn").onclick = displayDate;
// <input type="text" id="fname" oninput="upperCase()">
// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);
// element.removeEventListener("mousemove", myFunction);


//<div id="div1">
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>
//
// <script>
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
//
// const element = document.getElementById("div1");
// const child = document.getElementById("p1");
// element.insertBefore(para, child);
// </script>


let w = window.innerWidth;
let h = window.innerHeight;

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window

// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser
// <input type="button" value="Back" onclick="goBack()">


//Create a Cookie with JavaScript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// With JavaScript, you can change a cookie the same way as you create it:

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

//Delete a Cookie with JavaScript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";



//A Function to Set,get,check a Cookie


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}









//A web worker is a JavaScript that runs in the background,
// independently of other scripts, without affecting the performance of the page.
// You can continue to do whatever you want: clicking, selecting things, etc.,
// while the web worker runs in the background.

// <p>Count numbers: <output id="result"></output></p>
// <button onclick="startWorker()">Start Worker</button>
// <button onclick="stopWorker()">Stop Worker</button>
//
// <script>
    let w;

    function startWorker() {
    if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
}
    w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
};
}

    function stopWorker() {
    w.terminate();
    w = undefined;
}
// </script>




// JavaScript Fetch API
// The Fetch API interface allows web browser to make HTTP requests to web servers.
fetch(file)
    .then(x => x.text())
    .then(y => myDisplay(y));

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
}

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
}


