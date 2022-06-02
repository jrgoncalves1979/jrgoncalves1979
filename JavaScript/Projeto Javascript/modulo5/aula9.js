//fetch 2

function loadPosts() { 
    document.getElementById("posts").innerHTML = "Carregando...";

    fetch('https://jsonplaceholder.typicode.com/posts')//faz a requisição
        .then(function(resultado) { //pegou resultado
            return resultado.json();//resultado transforma em Json
        })
        .then(function(json) {//recebe o resultado do Json transformado
            montarBlog(json);//Passado por paremetro como montarBlog(lista) logo abaixo na função. 
        })
        .catch(function(error) {
            console.log("Deu Problema!");
        });
}

function montarBlog(lista) {//recebe a lista de posts do montarBlog(json); 
    let html = '';//monta o html

    //for (let i=0; i < lista.length ; i++) {}  //vai de item a item na lista
    //OUTRO JEITO:
    for (let i in lista) {
        html += '<h3>'+lista[i].title+'<h3/>'; //vai ter um h3 com o titulo, monta o html, puxa a lista de title. Obs += é concatena.
        html += lista[i].body+'<br/>'; //O .body é acessado pois lista é um array de objetos, e esses objetos possuem a propriedade body.
        html += '<hr/>'; //adiciona as linhas horizontais.
    }
    
    document.getElementById("posts").innerHTML = html;//Pra jogar na tela.
}




/*Teste depois da aula:
Para exibirmos os resultados de uma requisição de API utilizando o fetch, devemos: 
Rersposta:
transformar o resultado em um JSON, por meio do then.
*/










