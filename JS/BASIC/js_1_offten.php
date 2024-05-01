<script src="/path/to/script.js"></script>
<script>

    let user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    for (let key in user) {
        // ключи
        alert(key);  // name, age, isAdmin
        // значения ключей
        alert(user[key]); // John, 30, true
    }

    for (let i = 0; i <= 11; i++) {

    }

    $(document).ready(function () {

    });
    if (str.indexOf("Widget") != -1) {
        alert("Совпадение есть"); // теперь работает
    }
    alert(str.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
    alert(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
    alert(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (widget with id)

    alert("Midget".includes("id")); // true
    alert("Midget".includes("id", 3)); // false, поиск начат с позиции 3

    let names = ['iliakan', 'remy', 'jeresig'];
    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
    arr.forEach(function (item, index, array) {

    });
    // JSON.stringify для преобразования объектов в JSON.
    // JSON.parse для преобразования JSON обратно в объект.

    for (let vegetable of recipeMap.keys()) {
        alert(vegetable); // огурец, помидор, лук
    }

    let items = location.search.substr(1).split("&");

    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        decodeURIComponent(tmp[1])
    }

    // keyup,keypress,change,click
    $(".card").on("click", function (event) {
        $(this).find('a')[0].click();
    });


    $(".c_o_t_s_wrapper").on("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
    $(".c_o_t_s_row_phone").each(function () {
        let phone = $(this).html()
        phone = phone.replace(/\D/g, '');
        let phone_array = phone.split('');
        if (phone_array[0] == 8 || phone_array[0] == 7) {
            if (phone_array.length == 11) {
                phone =
                    '+7 ('
                    + phone_array[1]
                    + phone_array[2]
                    + phone_array[3]
                    + ') '
                    + phone_array[4]
                    + phone_array[5]
                    + phone_array[6]
                    + '-'
                    + phone_array[7]
                    + phone_array[8]
                    + '-'
                    + phone_array[9]
                    + phone_array[10]
                $(this).html(phone)
            }
        }

    })


    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://api.github.com/users/jeresig'
    ];

    // Преобразуем каждый URL в промис, возвращённый fetch
    let requests = urls.map(url => fetch(url));

    // Promise.all будет ожидать выполнения всех промисов
    Promise.all(requests)
        .then(responses => responses.forEach(
            response => alert(`${response.url}: ${response.status}`)
        ));


</script>