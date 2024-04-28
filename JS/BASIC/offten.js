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
    var items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
    decodeURIComponent(tmp[1])
    }

    $(".card").on("click", function (event) {
        $(this).find('a')[0].click();
    });
});


$("#c_o_t_s_pages_input").on("change", function () {
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

$("#personPhone").on("keyup", function (event) {
    refine_phone();
});
