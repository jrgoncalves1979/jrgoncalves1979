//padEnd
/*
let telefone = '54';

console.log(telefone.padEnd(9, '*'));
/*
padEnd é colocado os * a diretia do numero, preenche as nove posições, 
nesse caso é obrigatório ter 9 posições,
pode se colocar o que quiser neste caso foi colocado * asteristicos
*/




//padStart
/*
let telefone = '54';

console.log(telefone.padStart(9, '*'));
/*
padStart é colocado os * a esquerda do numero, preenche as nove posições, 
nesse caso é obrigatório ter 9 posições,
pode se colocar o que quiser neste caso foi colocado * asteristicos
*/








//Exemplo do cartão
//Ex:1
/*
let cartao = '1234123412341234';
console.log('Esta é o seu cartão: '+cartao);
*/



//Ex:2
//Pegando os quatro ultimos digitos e com asteristicos na frente
/*
let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);//pega os 4 ultimos numeros

let cartaoMascarado = lastDigits.padStart(16, '*');//colocar 16 * se não tiver numeros preenchendo

console.log('Esta é o seu cartão: '+ cartaoMascarado);//retorna a variavel com cartaoMarcarado mais os 4 ultimos digitos do lastDigits
*/




//Ex3:
//Pegando os 3 primeiros numeros e com asteristicos atraz
/*
let cartao = '1234123412341234';

let lastDigits = cartao.slice(0, 3);//pega os 3 primeiros numeros

let cartaoMascarado = lastDigits.padEnd(16, '*');//colocar 16 * se não tiver numeros preenchendo

console.log('Esta é o seu cartão: '+ cartaoMascarado);
*/






//Exercicio depois da aula

let str = "9";
str = str.padEnd(4, 0);

console.log(str);



















