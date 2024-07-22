class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} Está falando.`);
    }
}

const p1 = new Pessoa('André', 'Aquino');
console.log(p1);
