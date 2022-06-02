
async function inserirPost() { 
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
       method: 'POST',
       body: JSON.stringify({
           title: 'Titulo de Teste',
           body: 'Corpo de teste',
           userId: 4
       }),
       headers: {
           'Content-Type': 'application/json'
       }
    });
    let json = await req.json();//Transforma tudo em json

    console.log(json);//Mostra na tela
}


/*
Se por colocado Method: GET não se pode mais colocar o body, porque o method GET
não tem corpo de requisição, se quiser mandar informações terá que ser pela URL.
Então essa parte é removida:
body: JSON.stringify({
           title: 'Titulo de Teste',
           body: 'Corpo de teste',
           userId: 4
       }),
       headers: {
           'Content-Type': 'application/json'
       } 
*/


/*
COM METHOD GET FICA ASSIM:

 let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
       method: 'GET',
    });
    let json = await req.json();

    console.log(json);

*/



/*
Teste de depois da aula.

Para uma requisição fetch utilizando o método POST em um formulário de cadastros, 
por exemplo, eu preciso passar, além do verbo POST, o:

Resposta:
Os valores que cada campo do formulário terá.

*/




