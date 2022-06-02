// Operador Rest
/*
function adicionar(...numeros) { //Diferente do Spred, esse se coloca dentro do parametro

    console.log(numeros);

}
adicionar(5, 6, 7, 8, 9, 10, 11, 12, 13, 14,);
*/




// Com nomes.
/*
function adicionar(...nomes) {

    console.log(nomes);

}
adicionar('Bonieky','Paulo','Antonio','Marcia','Jozéfa');
*/





//Com nomes, com Rest e Spred

function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;

}
let nomes = ["Bonieky", "Paulo"];

let outros = adicionar(nomes, "Antonio","Maria","José");

console.log(outros);


























































