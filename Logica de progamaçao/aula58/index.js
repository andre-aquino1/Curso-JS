// let i = 0;


// while (i <= 10) {
//     console.log(i);
//     i++;
// }


function radom (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min= 1;
const max= 50;
let rand = radom (min, max);

while (rand !==10) {
    rand =radom(min, max);
    console.log(rand);
}