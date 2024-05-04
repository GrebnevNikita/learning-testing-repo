
let age = 16; // возьмём для примера 16
if (age < 18) {
    welcome();               // \   (выполнится)
    function welcome() {     // |
        alert("Привет!");      // |  Function Declaration доступно
    }                        // |  во всём блоке кода, в котором объявлено
    welcome();               // /   (выполнится)
} else {
    function welcome() {
        alert("Здравствуйте!");
    }
}
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
welcome(); // Ошибка: welcome is not defined
