/*
&& -> false && true -> false 'O valor mesmo'
|| ->  true && false -> vai retornar 'O valor verdadeiro'

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// console.log(' André Luis' && NaN && 'Taina');
// function falaOi (){
//     return 'Oi';
// }
// let vaiExecutar = 'Joao';
// console.log(vaiExecutar && falaOi());

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto';


const a = 0;
const b = null;
const c = NaN;
const d = false;
const e = false;

console.log(a || b || c || d || e);

