// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },
        
   
        fala: function(assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        } 
    };
}

const p1 = criarPessoa('André', 'Luis', 1.71, 84);
const p2 = criarPessoa('Maria', 'Joana', 1.50, 51);
const p3 = criarPessoa('Taina', 'Evelin', 1.60, 70);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

p1.nomeCompleto = 'André Luís Aquino';
console.log(p1.nomeCompleto);