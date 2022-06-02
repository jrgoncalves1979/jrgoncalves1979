//VAR
/* 
var acontece um processo chamado Hoisting, 
var é enviada para o escopo geral da sua tela.
Da pra ser usada no geral window, toda janela.
*/ 
/*
//Exemplo:                        
var nome = "Bonieky";
console.log( windo.nome );
/*Nesse caso foi transferida para o oscopo geral do site, 
isso afeta porque que se tem acesso a qualquer area do site do sistema.
*/



//LET
/*
let essa variavel fica disponivel apenas naquele escopo especifico de codigo, 
então naquela area especifica do codigo fica disponivel, não dando pra acessar 
fora desse trecho de codigo, muito menos com um window.

let nome = "Bonieky";
console.log( window.nome );
//vai dar variavel indefinida
*/

/*
//outro exemplo:
var nome = "Bonieky";

if(nome == "Bonieky") {
    let idade = 90;
}

console.log(idade);
//NÃO vai funcionar porque o console log não estã dento do escopo.
*/

/*
//Outro exeplo funcionando.
var nome = "Bonieky";

if(nome == "Bonieky") {
    let idade = 90;
    console.log(idade);
}
//Neste caso o console.log está dentro do escopo.
*/

/*
//Redeclarar variavel let.
let nome = "Bonieky";
nome = "Pedro"; 

console.log(nome);
*/



//CONST
/*
Const é uma variavel de valor constante, 
uma variavel constant não pode receber um novo valor, uma vez definida
não pode ser alterada, com excessão em arrays e objetos.
*/
/*
Ex:
const nome = "Bonieky";

nome = "Pedro";

console.log(nome);
//Vai dar erro porque foi alterada a variavel.
*/



//Mudando a variavel que está dentro do objeto.(Vai ser dado em modulos à frente)
const nome = {nome:'Bonieky', sobrenome:'Lacerda'};

nome.nome = 'Pedro';

console.log(nome);


//Já se for var ele troca normalmente.
//A variavel virou de objeto para uma string comum
var pessoa = {nome:'Bonieky', sobrenome:'Lacerda'};

pessoa = "Pedro";

console.log(pessoa);










