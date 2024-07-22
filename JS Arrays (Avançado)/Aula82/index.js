const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop 
const removidos = nomes.splice(4, 0, 'André', 'Luis');
console.log(nomes, removidos);

