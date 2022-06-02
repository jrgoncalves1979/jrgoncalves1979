//Ex 1: Juntando os numeros.
/*
let numeros = [0, 1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8, 9];

console.log(outros);
*/



//Ex 2: Juntando os objetos.
/*
let info = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 99
};
let novaInfo = {
    ...info,
    cidade: "Campina Grande",
    estado: "Paraiba",
    pais:"Brasil"
};
console.log(novaInfo);
*/




//Ex 3: Juntando dentro de função.

function adicionarInfo(info) {
    let novaInfo = {
        ...info,
        status: 0,
        token: 'alksjrklajsrl',
        data_cadastro:'....'
    };
    return novaInfo;
}

console.log(adicionarInfo({nome:'Bonieky', sobrenome:'Lacerda'}));






























