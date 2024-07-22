/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referências (mutável) - array, object, function - valores passados por referência
*/

let a = [1, 2, 3];
let b = a;
console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);