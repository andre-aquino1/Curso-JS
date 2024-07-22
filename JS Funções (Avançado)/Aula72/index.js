function retornaFuncao (nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('André');
console.dir(funcao());
