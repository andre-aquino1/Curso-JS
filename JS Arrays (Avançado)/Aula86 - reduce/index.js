// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorn um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(somaNumeros)