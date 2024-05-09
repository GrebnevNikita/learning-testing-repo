// <script src="/path/to/script.js"></script>

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
$('#EditDesc #descSave').attr("data-id")
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


let url = new URL(window.location.href);
if (url.searchParams.get("search_company_name") != undefined) {
    $('#search_company_name').val(url.searchParams.get("search_company_name"))
}


function search_in_orders_list() {
    let location = window.location.href.split('?');
    if (location[1] != undefined) {
        location[1] = location[1] + "&search_order_id=";
        location[1] = location[1] + "&search_company_name=";
        let new_link = location[0] + "?";
        let params = location[1].split('&')
        if (params[0] != undefined) {
            for (let i = 0; i < params.length; i++) {
                let params_k_v = params[i].split('=')
                if (params_k_v[0] != undefined && params_k_v[1] != undefined) {

                    if (params_k_v[0] == 'search_order_id') {
                        if ($('#search_order_id').val().trim() != '')
                            new_link = new_link + "&search_order_id=" + $('#search_order_id').val().trim();
                    } else if (params_k_v[0] == 'search_company_name') {
                        if ($('#search_company_name').val().trim() != '')
                            new_link = new_link + "&search_company_name=" + $('#search_company_name').val().trim();
                    } else {
                        new_link = new_link + "&" + params_k_v[0] + "=" + params_k_v[1];
                    }

                }
            }
        }
        window.location.replace(new_link);
    }
}
