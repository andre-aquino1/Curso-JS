const frutas = ['Banana', 'Uva', 'Morango', 'Laranja'];

for ( let index in frutas) {
    console.log(frutas [index]);
}

const pessoa = {
    nome: 'André',
    sobrenome: 'Aquino',
    idade: 28
}

for ( let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}