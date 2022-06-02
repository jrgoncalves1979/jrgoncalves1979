// querySelector e querySelectorAll
document.querySelector("#exemplo").innerHTML = "Junior<button>Enviar</button>"; //é o mesma coisa de fazer document.getElementById("...")

document.querySelector(".lista")[0].innerHTML = 'Item alterado!'; // é o mesmo de fazer document.getElementsByClassName("...")

//Obs: as camadas são iguais aos do CSS (#) para id e (.) para class 
//para o (.) só chama o primeiro item da lista então fazer com querySelectorAll

document.querySelector("button").innerHTML = 'inscreva-se';//por TAG


//Obs: Conseguindo selecionas por ( id, class, tag )




// document.querySelector e querySelectorAll substitui os abaixo.
document.getElementById("...")
document.getElementsByClassName("...")
document.getElementsByTagName("...")
document.getElementsByName("...")