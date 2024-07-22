// function funcao(a, b, c) {
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f, g, h) {
//     console.log(a, b, c, d, e, f, g, h);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b = 3, c = 7) {
//     console.log(a + b + c);
// }
// funcao(2, 20);

// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }
// funcao({nome :'André', sobrenome : 'Aquino' , idade: 28});

// function funcao (valor1, valor2, valor3){
//     console.log(valor1, valor2, valor3);
// }
// funcao('André', 'Luis', 20);

function conta (operador, acumulador, ...numeros){
    for(let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('*', 0 , 20, 30, 40, 50);
