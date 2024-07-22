// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // configurável
        get: function(){
            return estoque;
        },
        set: function(valor) {
            if (typeof valor === 'number'){
                return;
            }
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 'Ovalor que eu quero';
console.log(p1.estoque);