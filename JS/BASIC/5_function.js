


function sayHi() {   // (1) создаём
    alert("Привет");
}

let func = sayHi;    // (2) копируем
func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    // эта тоже все ещё работает (почему бы и нет)
let sayHi = function () {
};













