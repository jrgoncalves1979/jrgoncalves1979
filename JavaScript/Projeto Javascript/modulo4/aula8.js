//find = encontrar
/*
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find(function(item){
    return (item == 16)? true : false;
});
let res = lista2;
console.log(res);
/*
retorna o primeiro item que satisfaça a condição que você quer.
Obs: retorna o numero nesse caso 16 de dentro do array, mas
tambem retorna tudo, o array inteiro.
*/


/*
//findIndex = encontra posição do array
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.findIndex(function(item){
    return (item == 16)? true : false;
});

let res = lista2;
console.log(res);
/*
retornando a posição do numero 16
Obs: retorna o numero nesse caso 3 que é a posição dentro do array.
Só retorna a posição mesmo
*/




/*
//find e findIndex com objeto
let lista = [
    {id:1, nome: 'Bonieky', sobrenome: 'Lacerda'},
    {id:2, nome: 'Junior', sobrenome: 'Gonçalves'},
    {id:3, nome: 'Patricia',sobrenome: 'Gonçalves'} 
];
let pessoa = lista.findIndex(function(item){
    //return (item.nome == 'Junior')? true : false;//find/pelo elemento
    return (item.id == 3)? true : false;//findIndex/por posição
})
let res = pessoa;
console.log(res);
*/






//feito por mim
let lista = [
    {id:1, marca: 'Ford', modelo:'Fusion', placa: 'AAA-0000'},
    {id:2, marca: 'GM', modelo: 'Cruze', placa: 'BBB-1111'},
    {id:3, marca: 'Volkswagen', modelo: 'Jetta', placa: 'CCC-2222'},
    {id:4, marca: 'Fiat', modelo: 'Linea', placa: 'DDD-3333'}
]
//let carros = lista.find(function(item){// avha o array {id: 2, marca: 'GM', modelo: 'Cruze', placa: 'BBB-1111'}
    let carros = lista.findIndex(function(item){// acha a posição, neste caso posição 1
    return (item.marca == 'GM')? true : false;
});
let resposta = carros;
console.log(resposta);



















