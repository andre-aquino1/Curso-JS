// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('André Luís', 'Aquino de Lemos'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora


console.dir(pessoa1);
console.dir(data);

