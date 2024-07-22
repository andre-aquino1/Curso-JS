// const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeiroNumero = numero[0]
// console.log(primeiroNumero,numero[0, 5]);


const numeros = [1500, 8521, 6532, 14258, 466548, 66998, 41555];
const[primeiroNumero, segundoNumero, terceiroNumero, ...resto ] = numeros;
const [um, , ,quatro, , seis] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
console.log(um,quatro,seis);