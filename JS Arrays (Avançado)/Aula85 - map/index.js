// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeros2 = numeros.map (valor => valor * 2);
console.log(numeros2);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'André', idade: 28},
    {nome: 'João', idade: 18},
    {nome: 'Lucas', idade: 27},
    {nome: 'Luís', idade: 35},
    {nome: 'Douglas', idade: 26},
    {nome: 'Taina', idade: 25},
];

const nome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({idade: obj.idade}));
const id = pessoas.map((obj, index) => ({...obj, id: index + 0}));

console.log(nome);
console.log(idade);
console.log(id);

