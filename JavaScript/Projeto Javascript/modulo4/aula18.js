
let info = ['Bonieky Lacerda', 'Bonieky', 'Lacerda', '@bonieky'];

let [nomeCompleto, nome, sobrenome, instagram] = info;
//let [a, b , c, d] = info; na ordem pra fazer a chamada.

//let [nomeCompleto,  ,  , instagram] = info; assim pega só o primeiro e o ultimo.
console.log(nomeCompleto, nome, sobrenome, instagram);



//Outro jeito.
let [nome, sobrenome] = ['Bonieky', 'Lacerda'];

console.log(nome, sobrenome);
//Cria o array já descontruindo ele.
let [nome, sobrenome, idade = 90] = ['Bonieky', 'Lacerda'];

console.log(nome, sobrenome);
//colocando a idade como padrão





/*
//Retorno de array com a função.
function criar() {
    return [1, 2, 3];
}
console.log(criar());
*/



/*
//Retorno de array com a função chamado por variaveis.
function criar() {
    let a = [1, 2, 3];
    return a;
}
console.log(criar());
//chamando a função toda.

//console.log(criar()[2]);
//chamandon a um indice especifico.
*/














