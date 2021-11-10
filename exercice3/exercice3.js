/* Modifier le code ci dessous pour réaliser l'exercice */

let x = 10;
let y = 10;


if (x === y) {
    document.getElementById('monDiv').innerHTML = "X est strictement égal à Y"
}

else {
    document.getElementById('monDiv').innerHTML = "X n'est pas égal à Y"
}

if (x === 10) {
    x = x + 3
}

else {
    x = 10;
}

console.log(x)
