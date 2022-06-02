//Upload de arquivos com JS


async function enviar() {
    let arquivo = document.getElementById("arquivo").files[0];

    let body = new FormData();
    body.append('title', 'Bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multiple/form-data'
        }
    });
}


/*
Teste de depois da aula:
Assinale a alternativa correta sobre o envio de arquivos com JavaScript:

Resposta:
Precisamos, além do corpo e do verbo utilizado, 
passar o cabeçalho do arquivo, que definirá o tipo dele.

*/























/*
Começo:
async function enviar() {
    let arquivo = document.getElementById("arquivo").files[0];

    console.log(arquivo);
}

*/



/*
Colocar multiple para mais de um arquivo dentro de:
<input type="file" multiple id="arquivo">
no aqrquivo HTML.
*/