/*
function digitou() {
    console.log('Você Digitou!');
}
*/





/*
onkeyup = Aperta a tecla e sugara, digita varias vezes mas só conta uma vez.

onkeydown = Aperta a tecla ela digita repetidas vezes sem parar.
*/




/*
O event trata do próprio evento.
onkeyup="digitou(event)" esse trecho está no HTML
*/

function digitou(e) {
   console.log(e);
}
//Obs: vai aparecer o Keybordevent lá olhar o keycode: que é o codigo da tecla digitada




/*
function digitou(e) {
    if(e.keyCode == 13) { //Quando apertar enter, keyCode com o C maiusculo.
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}
//Só vai enviar os dados do campo quando precionar enter
*/