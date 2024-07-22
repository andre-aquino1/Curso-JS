// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Aquino';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('André'));
    }

    falaNome();
    console.log(idade, peso, altura)

}) (28, 84, 1.71);

