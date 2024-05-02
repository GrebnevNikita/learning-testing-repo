



    let names = ['iliakan', 'remy', 'jeresig'];
    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
    Promise.all(requests)
        .then(responses => {
            // все промисы успешно завершены
            for(let response of responses) {
                alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
            }

            return responses;
        })
        // преобразовать массив ответов response в response.json(),
        // чтобы прочитать содержимое каждого
        .then(responses => Promise.all(responses.map(r => r.json())))
        // все JSON-ответы обработаны, users - массив с результатами
        .then(users => users.forEach(user => alert(user.name)));








    async function f() {

        try {
            let response = await fetch('/no-user-here');
            let user = await response.json();
        } catch(err) {
            // перехватит любую ошибку в блоке try: и в fetch, и в response.json
            alert(err);
        }
    }

    f();
    // Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected).
    //  В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:

    async function f() {
        let response = await fetch('http://no-such-url');
    }

    // f() вернёт промис в состоянии rejected
    f().catch(alert); // TypeError: failed to fetch // (*)







