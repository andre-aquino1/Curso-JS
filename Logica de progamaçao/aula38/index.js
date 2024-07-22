/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÂO
*/

// const expressaoAND = true && true && true;
// console.log(expressaoAND);

// const expressaoOR = true || false;
// console.log(expressaoOR);

// const expressaoNOT = !false;
// console.log(expressaoNOT);

const usuario = 'Andre';
const senha = '123456';

const vailogar = usuario === 'Andre' && senha === '123456';
console.log(vailogar);

const vailogar1 = usuario === 'Andre' || senha === '12345';
console.log(vailogar1);