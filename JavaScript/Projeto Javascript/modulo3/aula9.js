//FOR LOOP´
//FOR LOOP ARRAY
//for (criação da variavel ; condição ; incremento)


//Jeito 1
/*
let texto = '';

for (let i = 0; i <= 50; i++) {
    texto = texto + i + '<br/>'
}
document.getElementById('demo').innerHTML = texto;
*/



//Jeito 2
let carros = ['Ferrari','Fusca','Palio','Corolla'];

let html = '<ul>';

for (let i in carros) {
    html = html + '<li>'+ carros[i]+'</li>';
}
html += '</ul>';
document.getElementById('demo').innerHTML = html;





/* Esses abaixo foram feitos junto com o video do canal
Matheus Battisti - Hora de Codar
 */

/*
for(i = 5; i < 500; i *= 2){
    console.log('Repetindo for: '+i);
}
*/

/*
let arr = ['Junior','Patricia','Gabriel','Alicia'];

for (let s = 0; s < arr.length; s++) {
    console.log(arr[s]);
}
//.length ele puxa o tamanho do array arr
*/




















