const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

const comendo = {
    comendo() {
        console.log(`${this.nome} está comendo`);
    }
}

const pessoaPrototype = Object.assign({}, falar, beber, comendo);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('André', 'Aquino');
console.log(p1);