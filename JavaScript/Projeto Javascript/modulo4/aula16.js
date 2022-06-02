
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'B7web',
        instagram: 'Bonieky'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};
/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;
*/

//let {nome, sobrenome, idade = 0} = pessoa;
//idade 0 quando não é informado no objeto.
//Desconstruindo o objeto e os tornando variaveis.
//console.log(nome,sobrenome,idade);



//console.log(pessoa.nomeCompleto());

//console.log(pessoa.social.facebook);



//feito por mim.
let carros = {
    marca: 'Toyota',
    modelo: 'Corolla',
    combustivel: 'Gasolina',
    placa: 'DYF-9351',
    ano: {
        anoModelo: 2007,
        anoFabricacao: 2007
    },
    anoCompleto: function() {
        return `${this.carros.anoModelo} ${this.carros.anoFabricacao}`
    }
};
let {marca, modelo, combustivel, placa} = carros;

console.log(marca, modelo, combustivel, placa);






