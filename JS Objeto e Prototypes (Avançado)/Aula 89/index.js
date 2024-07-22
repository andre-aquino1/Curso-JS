const pessoa1 = new Object();
pessoa1.nome = 'André';
pessoa1.sobrenome = 'Aquino';
pessoa1.idade = 29;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome. `);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}