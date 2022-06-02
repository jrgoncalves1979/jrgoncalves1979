//FileReader
//OUTRA ALTERNATIVA DA AULA ANTERIOR



function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}


/*
Teste de depois da aula.
O FileReader, ao ser utilizado no JavaScript, :

Resposta:
Manipula qualquer tipo de arquivo, seja imagem (blob) ou não.
*/





