//Scroll Suave
function subirTela() {
    window.scrollTo({
        top: 0, //Vertical
        //left: 0, //Horizontal
        behavior:"smooth"
    });
}

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}
window.addEventListener('scroll', decidirBotaoScroll);
//Adicionado evento que "ouve" função decidirBotaoScroll no scroll da janela.








/*
Se você deseja ser um desenvolver Web completo não pode ignorar a linguagem JavaScript que é onipresente na web e vem ganhando cada vez mais popularidade na forma de Frameworks como o Angular, jQuery, React, etc.

E outra coisa, aprender não ocupa espaço.

Indo direto ao ponto vamos apresentar os operadores :

= (operador de atribuição) -  é usado para atribuir valores a uma variável em JavaScript.
 
x = 10
y = 20
z = x + y
 

== (Igual a ou Equal to) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.
 
Para x= 10 temos que :
x ==     8  -> retorna false
x ==   10   -> retorna true
x ==  "10" -> retorna true

 

=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
Para x= 10 temos que :
x ===    8  -> retorna false
x ===   10   -> retorna true
x ===  "10" -> retorna false

Assim o operador == compara por 'resultado'; Ele converte o que você quer comparar e verifica.

Ja o operador ===  compara o valor e o tipo, (quando você usa o operador === você força a comparar o tipo também) então só vai ser true se for exatamente igual (valor e tipo).

Assim temos:

if (true == 'true')  	// Retorna true
if (true == '1')       	// Retorna  true
if (true == true)    	// Retorna  true
if (true === 'true') 	// Retorna  false
if (true === '1')    	// Retorna  false
if (true === true)   	// Retorna  true (igualdade estrita, mesmo tipo e mesmo valor)
Existe também o operador !== que significa estritamente não igual que retorna true caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

Assim   '1' !== 1   retorna true pois os tipos não são os mesmos. 
Comparando com o operador != temos :
4 !== '4'    //retorna true   e   4 === '4'   //retorna false
4 != '4'      //retorna false  e   4 == '4'     //retorna true
Ficamos por aqui.
*/











































