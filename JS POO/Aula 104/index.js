class DispositivosEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} Já esta ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} Já está desligado.`)
            return;
        }
    }
}


class Celular extends DispositivosEletronico {
    constructor(nome, modelo){
    super(nome)
    this.modelo = modelo
    }
}

const cel = new Celular('iPhone', '15 pro')

cel.desligar();
console.log(cel);
