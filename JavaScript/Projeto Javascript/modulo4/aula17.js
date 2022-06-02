
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'B7web',
        instagram: {
            url:'@bonieky',
            seguidores:1000
        }
    },
};

/*
//Tipo 1 - Concatenando.
function pegarNomeCompleto(obj) {
    return obj.nome+' '+obj.sobrenome;
}
console.log(pegarNomeCompleto(pessoa));
*/

/*
//Tipo 2 - Modo Template por variaveis.
function pegarNomeCompleto(obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;

    return `${nome} ${sobrenome}`;
}
console.log(pegarNomeCompleto(pessoa));
*/


//Tipo 3 - Pelo próprio parametro.
function pegarNomeCompleto({nome, sobrenome, social:{facebook},social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} ${facebook} (Siga em ${instagram})`;
}
console.log(pegarNomeCompleto(pessoa));


















