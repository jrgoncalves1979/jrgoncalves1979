//Abrir console para ver os resultados.
// Condicionais mostrar bom dia, boa tarde e boa noite.
/*
var hora = 19;

if (hora <12) {
    console.log("Bom dia");
} else if (hora <18) {
    console.log("Boa Tarde");
} else if (hora <=23) {
    console.log("Boa noite");
}
//Tem que colocar os 3 if senão ele respode os 3 ao mesmo tempo,
//o else if faz uma de cada vez até chegar na certa.
*/





/*
//Dar Boa tarde, com duas condições em um if.
var hora = 13;

if ( hora >=12 && hora <18) {
    console.log("Boa tarde");
}
*/






//Hora do rush, hora é igual a 12 ou hora é igual a 18, é hora do rush.
var hora = 18; // Só pode escolher 12 ou 18 para estar na hora do rush.

if (hora == 12 || hora == 18) {
    console.log("Você está na hora do rush"+" "+hora+"h");//Coloquei a variavel hora pra aparecer na resposta.
} else if (hora) { //assim ficou mais limpo.
    console.log("Você NÂO está na hora do rush"+" "+hora+"h");//Coloquei a variavel hora pra aparecer na resposta.
}
//else if (hora<12 || hora >=13); Primeiro jeito que eu fiz o else if.
















