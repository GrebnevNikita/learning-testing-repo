
// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// Store
localStorage.lastname = "Smith";
// Retrieve
document.getElementById("result").innerHTML = localStorage.lastname;

localStorage.removeItem("lastname");

if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "You have clicked the button " +
    localStorage.clickcount + " time(s).";



//HTTP Methods
// GET
// POST
// PUT
// HEAD
// DELETE
// PATCH
// OPTIONS
// CONNECT
// TRACE




