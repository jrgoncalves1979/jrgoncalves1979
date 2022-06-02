let d = new Date();

let novoValor = d.getFullYear();

console.log(novoValor);

/*
Pegar só o ano.
d.getFullYear();
resposta do console.log()
2021



Pegar só o mês.
d.getMonth();
resposta do console.log()
8
Obs: Neste caso é o mês de setembro 9 mas como no JavaScript
o mês começa no 0 ele retorna 8



Pegar o dia da semana.
d,getDay();
Retorna o dia da semnana que vai do 0 ao 6 
o 0 é o domingo, no JavaScript
a semana começa no 0 tambem



Pega o dia que estamos no mês.
d.getDate();
Na aula no caso retornou dia 11



Pega a hora.
d.getHours();
Na aula no caso retornou 8



Pegar os minutos.
getMinuttes();
Na aula no caso retornou  17



Pegar os segundos.
d.getSeconds();
Na aula no caso retornou 25




Pegar os milisegundos.
d.getMilliseconds();
Na aula retornou 631



TimeStamp
d.getTime();
É a quantidade de milisegundos de 1970 até o atual





Data Atual.
let novoValor = Date.now();
console.log(novoValor);

Ele pega a data atual sem precisar definiar uma variável,
lembrando que ele retorna o timeStamp.


*/