class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método instância
    aumentarVolume() {
        this.volume += 1;
    }

    diminuirVolume() {
        this.volume -= 1;
    }

    // Método estático
    static soma(x , y) {
        return x + y;
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

console.log(ControleRemoto.soma(5, 9));