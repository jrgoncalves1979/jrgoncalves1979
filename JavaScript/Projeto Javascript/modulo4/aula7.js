//map = mapeia o array.
/*
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function(item){
    return item * 2;
});


//outro jeito com for.
//for(let i in lista){
//    lista2.push(lista[i] * 2);
//}


let res = lista2;

console.log(res);
*/




/*
//filter = filtra 
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.filter(function(item){
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});
let res = lista2;

console.log(res);
*/





/*
//Meu teste
let lista = [100, 75, 50, 25, 1, 500, 250, 150];
let lista2 = [];

lista2 = lista.filter(function(item){
    if (item > 100 || item == 25) {
        return true;
    } else {
        return false;
    }    
});
let res = lista2;
console.log(res);
*/




/*
//every = todos
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.filter(function(item){
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});
let res = lista2;

console.log(res);

//Se TODOS forem maior do que 20 ele retorna true, se não for TODO mundo ele retorna false.
*/






//some = alguns
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.filter(function(item){
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});
let res = lista2;

console.log(res);
//Se pelo MENOS UM for maior do que 20 ele retorna true, tem que ter pelo menos um.

//OUTRO JEITO DE FAZER O IF
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.filter(function(item){
   return (item < 20)? true : false;
});
let res = lista2;

console.log(res);












