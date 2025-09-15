let figur2 = {
    form : "rektangel",
    lengde: 4,
    bredde: 6,
    areal: 24,
    omkrets: 20
};

let figur3 = {
    form : "rektangel",
    lengde: 9,
    bredde: 1,
    omkrets: 20
};

let figur4 = {
    form : "kvadrat",
    lengde: 4,
    bredde: 4,
    areal: 16
};

let figur5 = {
    form : "kvadrat",
    lengde: 6,
    bredde: 6
};

let shapes = { figur2, figur3, figur4, figur5 };

function compareObjects(object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (object1[key] !== object2[key]) return false;
    }

    return true;
}

let uSure = prompt("Skriv 1 hvis du vil lage et nytt objekt istedenfor", 1)

if (uSure == 1) {
let figur6 = {

};
} else {
let request1 = prompt("Skriv et objekt mellom figur2 - figur5");
let request2 = prompt("Skriv et annet objekt mellom figur2 - figur5");

let shape1 = shapes[request1];
let shape2 = shapes[request2];

if (!shape1 || !shape2) {
    console.log("Ugyldig input. Prøv igjen med figur2, figur3, figur4 eller figur5.");
} else {
    console.log(compareObjects(shape1, shape2));
}}