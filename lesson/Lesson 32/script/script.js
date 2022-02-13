let x = 2,
    y = 3,
    z = 4;

x = (y < z)
console.log(x);

let g = 2,
    f = 3,
    h = 4;

g = (f === h)
console.log(g);

let prot = prompt('Сколько вам лет?', '');
if (prot > 18) {
    let prs = prompt('Вы уверены, что хотите зайти(да/нет)?');
    if (prs == 'да') {
        alert('Ну проходите');
    } else if (prs == 'нет') {
        alert('Ну так идите от сюда!');
    }
} else {
    alert('А вам сюда нельзя, сударь.');
}

let accessAllowed;
let age = prompt('Укажите год рождения', '')

if (age < 2004) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
