                        // Formas de funções.
/*
//Método 1:
function somar(x, y) {
    return x + y;
}
console.log(somar(10, 5));




//Método 2:
let somar = function(x, y) {
    return x + y;
}
console.log(somar(10, 5));
*/



/*
//Método 3:
let somar = (x, y) => {
    return x + y;
}
console.log(somar(10, 5));
// O simbolo => é a Arrow Function, que é o mesmo de function(x, y) {
//Outro jeito:
let somar = (x, y) => x + y;
console.log(somar(10, 5)); 
*/






let letraNoNome = (nome) => {
    return nome.length;
}
console.log(letraNoNome('Bonieky'));

//Reduzido
let letraNoNome = nome => nome.length;
/*
Neste caso como é só um parametro, nesse caso nome, pode tirar os parenteses,
quando não tem paramentro usar os () parenteses, quando tiver mais que um,
colocar os parenteses() e os parametros separados por virgolas.
*/



























