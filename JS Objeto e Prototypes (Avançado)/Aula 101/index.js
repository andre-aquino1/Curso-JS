const pessoas = [
    {id: 3, nome: 'André'},
    {id: 2, nome: 'Luís'},
    {id: 1, nome: 'André Luís'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
