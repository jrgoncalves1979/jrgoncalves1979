/*Fetch 1 - Ela retorna uma promesa/promise, pega uma requisição neste caso
pegou a url, ela tambem possui 2 paramentros, o segundo é opcional.
ex: fetch('https://jsonplaceholder.typicode.com/posts', "metodo GET ou post")
se não colocar nada que é como está abaixo na primeira parte ele por padrão
é GET.
*/

/*
//Primeira parte.
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')//busou as informações
        .then(function(resultado){
            console.log(resultado);//Retornou as informações
        })
        .catch(function(error){
            console.log("Deu Problema!");
        });
}

/*
Resposta disso foi:
Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
Essa resposta é um objeto do tipo response.
*/








//Segunda parte - transforma em JSON
function loadPosts() { 
    fetch('https://jsonplaceholder.typicode.com/posts')//faz a requisição
        .then(function(resultado){ //pegou resultado
            return resultado.json();//resultado transforma em Json
        })
        .then(function(json){//recebe o resultado do Json transformado
            console.log(json);//Mostra o resultado
            //document.getElementById("posts").innerHTML = json.length+' posts';     //mostra a quantidade de posts.
        })
        .catch(function(error){
            console.log("Deu Problema!");
        });
}






/*
Teste de depois dessa aula:

Ao utilizarmos o catch em uma requisição fetch, estamos tratando possíveis:

Resposta:
erros
*/










