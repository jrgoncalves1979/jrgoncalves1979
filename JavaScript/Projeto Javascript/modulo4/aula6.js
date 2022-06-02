//Delete
/*let lista = ['Ovo','Farinha','Corante','Massa'];

delete lista[1];

let res = lista;
console.log(res);
*/
/*
Dessa forma ele deleta o item mas não o espaço,
ficando o espaço do item em vazio,
['Ovo', empty, 'Corante', 'Massa']
empty=vazio
*/




//splice = remove/deleta itens
/*
let lista = ['Ovo','Farinha','Corante','Massa'];

lista.splice(1, 1);

let res = lista;
console.log(res);
*/
/*
splice(1, 1) o primeiro parametro é qual será removido,
o segundo parametro é quantos da sequencia será removido,
nesse caso item 1 'farinha' somente.
supondo que sejá splice(1, 2) será removido 'Farinha', 'Corante'
e supondo que sejá splice(1, 3) será removido'Farinha','Corante','Massa'

Obs: se atribuir só a primeira posição splice(1) depois da posição
1 pra frente será tudo removido.
*/





/*
//Concat = junta/Concatena os dois arrays
let lista = ['Ovo','Farinha','Corante','Massa'];
let lista2 = ['Prato','Liquidificador','Forno',];

let res = lista.concat(lista2);

console.log(res);
*/





//sort = ordena em ordem alfabetica
let lista = ['Ovo','Farinha','Corante','Massa'];

lista.sort();
lista.reverse();

let res = lista;
console.log(res);
//reverse coloca de traz pra frente













