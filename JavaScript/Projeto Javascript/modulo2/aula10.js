function alterar (titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

/*alterar("Já deu certo, obrigado!!!"); 
Precisa passar a função para aparecer o resultado no navegador.*/





/*
function soma(x, y) {
    let total = x + y;

    document.getElementById("campo").value = total;
}
soma(total);
*/





function soma(x, y) {
    let total = x + y;

    return total; //Para retornar o resultado.
}
var resultado = soma(10, 15);

console.log(resultado);
alert(resultado);
































