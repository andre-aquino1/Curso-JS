// Declaração de função (function hoisting)
function falaOi(){
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function excutaFuncao (funcao) {
    console.log('Vou executar sua função aaixo:')
    funcao();
};
excutaFuncao(souUmDado);

// arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();