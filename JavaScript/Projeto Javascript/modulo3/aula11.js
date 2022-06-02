


document.querySelector('#titulo').innerHTML = 'Mudando o Titulo';
/*
document.querySelector('.lista');

document.querySelectorAll('.lista')[1];

document.querySelectorAll('h3.subtitulo');

document.querySelectorAll('p');*/

document.querySelectorAll('h3.subtitulo')[1].style.color = '#00FF00';

let lista = document.querySelectorAll('li');

console.log('lista');

for (let i in lista) { 
    lista[i].style.color = '#0000FF';
}

