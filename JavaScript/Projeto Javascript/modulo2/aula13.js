/*
Scroll

Se for dentro usar o document
document.querySelector(".texto").scrollTop   Para vertical. 
document.querySelector(".texto").scrollLeft  Para horizontal.

Quando for pela janela usa se:
window.scrollY    Para vertical.
window.scrollX    Para horizontal.

window.scrollTo(0, 0) Para regular onde quer, 
primeiro zero é horizontal e o segundo vertical

*/
/*
function subirTela() {
    window.scrollTo(0, 0)
}
*/

//Scroll Suave
function subirTela() {
    window.scrollTo({
        top: 0, //Vertical
        left: 0, //Horizontal
        behavior:"smooth"
    });
} 
//Scroll Suave, para rolar lentamente.



