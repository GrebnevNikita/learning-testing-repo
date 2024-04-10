let arr = []

for (let i = 0; i < 10000; i++) {

    let rn = parseInt(Math.random() * 100);


    if (arr[rn] == undefined) {
        arr[rn] = 1;

    } else {
        arr[rn] = arr[rn] + 1;
    }


}



let arr_order = []
console.log(arr)

arr.forEach(function (value1, index1, array1) {
    let max_i = -1
    let max_v = -1
    arr.forEach(function (value2, index2, array2) {
        if (!arr_order.includes(index2)) {
            if (max_v <= value2) {
                max_v = value2
                max_i = index2
            }
        }
    })
    arr_order.push(max_i);
})
console.log(arr_order)

arr_order.forEach(function (value1, index1, array1) {

    console.log(value1 + '--' + arr[value1])
})