
let pessoa = {
    nome:'Junior',
    sobrenome:'Gonçalves',
    idade:41,
    peso:'83',
    profissao:function(){
        console.log('Desenvolvedor de Sistemas');
        //document.getElementById('titulo').innerHTML='Objetos Apresentados';
    },
    estadocivil: 'Casado'
}
//Jeitos para mostrar no console log.
console.log(pessoa.nome,pessoa.sobrenome,pessoa.idade+' '+'anos');

console.log(pessoa.idade);
console.log(pessoa.peso);
pessoa.profissao();
console.log('Estado Civil:'+' '+ pessoa.estadocivil);










//Habilitar para funcionar o botão Mostrar Estado.
/*
function mostrarestado(elemento) {
    elemento.style.display='none';
    document.getElementById('estado').style.display="block";
}
*/






