// Função construtora -> objetos
// Função fabrica - objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' ' + ': Sou um método');
    }
}

const p1 = new Pessoa('André', 'Luis');
const p2 = new Pessoa('Luís', 'Aquino');

console.log(p1.nome, p1.sobrenome);
p1.metodo();