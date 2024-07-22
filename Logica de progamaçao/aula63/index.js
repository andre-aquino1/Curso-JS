function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw(' x e y precisam ser números.');
    }

    return x + y;;
}

try {
    console.log(soma(5, 20));
    console.log(soma('20', 8));
} catch (erro) {
    console.log(erro);
}
