//toString = Transforma o array em string
/*
let lista = ['Ovo','Farinha','Corante','Massa'];

let res = lista.toString();

console.log(res);
//o array fica como string já separado por virgulas
*/





/*
//join = Transforma o array em string, separando os itens com o que você colocar de parametro

let lista = ['Ovo','Farinha','Corante','Massa'];

let res = lista.join('--');

console.log(res);
//vai virar uma string Ovo--Farinha--Corante--Massa
*/





/*
//indexOf = retorna o que está dentro do array
let lista = ['Ovo','Farinha','Corante','Massa'];

let res = lista.indexOf('Corante');

console.log(res);
//Procura um item dentro do array e ele retornaa posição onde está esse item,
//se caso ele não achar ele retorna -1
*/





/*
//pop = remove o ultimo item do array
let lista = ['Ovo','Farinha','Corante','Massa'];

lista.pop(); //ULTIMO

let res = lista;

console.log(res);
*/



/*
//shift = remove o primeiro item do array
let lista = ['Ovo','Farinha','Corante','Massa'];

lista.shift(); //PRIMEIRO

let res = lista;

console.log(res);
*/






/*
//push = adiciona um novo item no array
let lista = ['Ovo','Farinha','Corante','Massa'];

lista.push('Prato','Garfo');

let res = lista;

console.log(res);
//foi adicionado 'Prato','Garfo' no array
*/




/*
//[n] = troca o valor no array
let lista = ['Ovo','Farinha','Corante','Massa'];

lista[0] = 'Ovos';

let res = lista;

console.log(res);
//troca de Ovo para Ovos no primeiro item
//Se colocar um item que não existe ele vai criar
*/
/*
//Adicionando itens:
let lista = ['Ovo','Farinha','Corante','Massa'];

lista[4] = 'Liquidificador'; //adicionou em lista no array 4 'Liquidificador'

let res = lista;

console.log(res);
*/
//Outro jeito: para saber tamanho e colocar proximo item.
let lista = ['Ovo','Farinha','Corante','Massa'];

lista[ lista.length ] = 'Liquidificador';

let res = lista;

console.log(res);
// A FORMA RECOMENDADA É USAR O PUSH



















