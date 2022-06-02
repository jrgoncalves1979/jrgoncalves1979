/*
let dia = 5;
let diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sabado';
        break;
    case 7:
        diaNome = 'Domingo'; 
        break;                   
}
document.querySelector('#dia').innerHTML = 'O dia da semana é '+diaNome;
*/



//Fins de samana.

let dia = 7;
let diaNome = '';

switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de semana';    
}
document.querySelector('#dia').innerHTML = 'Hoje é '+diaNome;