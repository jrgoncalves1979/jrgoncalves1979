//Slice = "fatiar"  /*
//let nome = 'Bonieky Lacerda Leal';

//let resultado = nome.slice(0, 10);

//console.log(resultado);
/*resuktado vai ser: Bonieky La
Se colocar só a primera posição po ex:
nome.slice(10); ela vai pegar do décimo caracter pra frente
Slice aceita numero negativo nome.slice(-4); nisso vai pegar o Leal
outro exemplo: nome.slice(-17, -10); vai pegar ieky La
*/






//Substring = igual ao Slice mas não trabalha com numeros negativos
//let nome = 'Bonieky Lacerda Leal';

//let resultado = nome.substring(5, 10);

//console.log(resultado);
//Só funciona no método padrão, nome.substring(5, 10); aqui vai do caracter 5 até 10







//Substr = igual ao substring mas com o diferencial da segunda posição.
let nome = 'Bonieky Lacerda Leal';

let resultado = nome.substr(5, 9);

console.log(resultado);
/*
A primeira posição continua sendo pegar a posição inicial, 
mas a segunda posição é quantidade de caracteres que irá pegar.
Esse tambem pega numeros negativos ex: nome.substr(-4, 2);

É o mais usado e mais facil de usar.
*/


















