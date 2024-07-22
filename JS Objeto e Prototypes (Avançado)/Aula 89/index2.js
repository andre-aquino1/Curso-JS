// Factory functions / Constructor Functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('André', 'Aquino');
console.log(p1.nomeCompleto());