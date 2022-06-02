//Replace = substitui textos especificos em uma string
//let nome = 'Bonieky Lacerda Leal';

//let resultado = nome.replace('Lacerda', 'Silva');
//console.log(resultado);
/*Neste caso substitui "Lacerda" por "Silva"
A primeira posição acha e a segunda troca.
*/






//toUpperCase = pra deixar em maiusculo
//let nome = 'Bonieky Lacerda Leal';

//let resultado = nome.toUpperCase();
//console.log(resultado);


//toLowerCase = pra deixar em maiusculo
//let nome = 'Bonieky Lacerda Leal';

//let resultado = nome.toLowerCase();
//console.log(resultado);








//Concat = função para concatenar 
//let nome = 'Bonieky';

//let resultado = nome.concat(' Lacerda');
//console.log(resultado);
/*ou nome.concat('', 'Lacerda');
Não é muito usado pois let resultado = nome + ' Lacerda';
faz a mesma coisa.
*/






//trim = função corta/tira os espaços  
//let nome = '    Bonieky       ';

//let resultado = nome.trim();
//console.log(resultado);
//remove espaços vazios tanto do começo como do fim.




//charAt = indica qual é o caracter que está em determinada posição
//let nome = 'Bonieky';

//let resultado = nome.charAt(3);
//console.log(resultado);
//Mas é melhor usar o substr nesse caso nome.charAt(3, 1); vai achar o i do mesmo jeito.






//split = divir
let nome = 'Bonieky Lacerda Leal';

let resultado = nome.split(' ');
console.log(resultado);
/*
Basicamente ele localiza o que foi passado, nesse caso um espaço vazio (' ')
ele corta e transforma em um array

Outro exemplo:
let nome = '1,2,3,4,5,6,7,8,9,10';
let resultado = nome.split(',');
Ele vai cortar pela virgula e transformar em 10 arrays

Outro exemplo 2:
let nome = 'ovo;massa;corante;farinha';
let resultado = nome.split(';');
Ele vai cortar pelo ponto e virgula e transformar em arrays
*/
