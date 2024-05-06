// js sort object list

cars = [

    {
        name: "Honda",
        speed: 4
    },

    {
        name: "BMW",
        speed: 3
    },

    {
        name: "Trabi",
        speed: 2
    },

    {
        name: "Ferrari",
        speed: 1
    }
]


cars.sort(function(a, b) {
    return a.speed - b.speed;
})

for(var i in cars)
    document.writeln(cars[i].name) // Trabi Honda BMW Ferrari