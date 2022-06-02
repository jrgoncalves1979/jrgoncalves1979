/*//Montando o Array

let carros = ['Palio','Uno','Corolla','Ferrari'];

//Mostrando o carro 3, Corolla, no array a contagem começa com 0, 
//então indice 0, 1, 2, 3, 4 e assim por diante.

console.log(carros[2]);







//Dica: antigamente se fazia assim:
let carros = new array('Palio','Uno','Corolla','Ferrari');  
//Não vai colchete nesse caso, é substituido por parenteses.






//É a mesma coisa só pulou de linha.
let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari'
];
*/






/*
//Da pra colocar até funções dentro dos arrays. 
//Ex:
let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari',
    function() {
        console.log('Testando 1, 2, 3...');
    }
];
//Executando a função, pode colocar o console.log(carros[4]()); se quiser tambem.
(carros[4]());
*/





//Array dentro de Array
let ingredientes = [
    ['uva','pera','maça'],
    ['arroz','macarrão']
];
console.log(ingredientes[0][2]);
//primeiro colchete pega o primeiro indice, 
//segundo colchete pega terceiro item, neste caso maça.


























