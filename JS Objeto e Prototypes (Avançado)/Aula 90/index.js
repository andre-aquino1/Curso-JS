// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor
        writable: false, // pode alterar o valor se for true
        configurable: false // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // mostra o valor
            writable: true, // pode alterar o valor se for true
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // mostra o valor
            writable: true, // pode alterar o valor se for true
            configurable: true // configurável
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
p1.preco = 10;
console.log(p1);