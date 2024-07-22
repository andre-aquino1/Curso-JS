const alunos = ['Luis', 'Maria', 'João', 'Jorge'];
//alunos[4] = 'André';
alunos.push('Andre'); //adiciona no final
alunos.push('Lucas'); //adiciona no final
alunos.unshift('Douglas'); //adiciona no começo
const removerFinal = alunos.pop();
const removerInicio = alunos.shift();
console.log(removerFinal);
console.log(removerInicio);
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[3]);
