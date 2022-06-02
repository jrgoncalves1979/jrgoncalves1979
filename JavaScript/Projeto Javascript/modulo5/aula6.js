/*Callbeck é uma função Javascript que se cria, e manda essa função para
uma outra execução, geralmente uma execução assincrona.
Basicamente se entende como eu te ligo de volta.
Uma função programada para disparar algum evento ao usuário.
*/


/*
//Ex1:
function alertar() {
    alert("Opa, tudo bem?");
}


setTimeout(alertar, 2000);
//nesse caso ele espera 2 segundos e manda a mensagem "Opa, tudo bem?"
*/



//Ex2: Assincrono
function alertar() {
    console.log("Opa, tudo bem?");
}

let nome = 'Bonieky';
setTimeout(alertar, 2000);//vai ser executado em segundo
let sobrenome = 'Lacerda';
console.log("NOME COMPLETO = "+nome+' '+sobrenome);// vai ser executado primeiro































