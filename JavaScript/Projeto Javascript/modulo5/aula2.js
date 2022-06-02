/*
Json = JavaScript Object Notation

É uma sintax de objeto, um objeto JavaScript usa se para
fazer a comunicação entre requisições, tanto para quardar 
informações quanto enviar e receber informações nessas requisições.
*/




//Cria se uma variavel e se coloca o objeto dentro
/*
let pessoa = {
    nome: "Bonieky",//Sempre colocar nome e valor, nome e valor
    idade: 90
}
console.log(pessoa.nome, pessoa.idade);
*/




//informações dentro de informações/array dentro de objeto
/*
let pessoa = {
    nome: "Bonieky",
    idade: 90,
    caracteristicas: ['sorridente', 'maravilhoso','top'] //array dentro de objeto
};
console.log(pessoa.caracteristicas[1]);//buscando o segundo indice

console.log(pessoa.caracteristicas[2]);//buscando o terceiro indice

console.log(pessoa.caracteristicas[0]);//buscando o primeiro indice

console.log(pessoa.nome);//buscando nome

console.log(pessoa.idade);//buscando idade
*/




//Objeto dentro de objeto

let pessoa = {
    nome: 'Bonieky',
    idade: 90,
    estetica: {
        altura: 900, //aqui está em centimetros.
        peso: 10
    }
};
console.log(pessoa.estetica);//retorna os objetos altura e peso.
console.log(pessoa.estetica.peso);//buscando o valor de peso dentro do objeto.


//o normal é não vim estruturado como acima, ele vem assim:
let pessoa = {nome: 'Bonieky',idade: 90,estetica: {altura: 900,peso: 10}}




//OBS: Aula O que é JSON
/*
Pergunta de uma aluno.

Quando falamos de JSON ou Objeto, estamos falando da mesma coisa ? 
fiquei com essa dúvida, se JSON é algo diferente, ou é a mesma coisa... 

Resposta:
Na verdade não, JSON é um formato de dados, assim como txt, csv, ou xml, 
a confusão se deve pois JSON é uma sigla para JavaScript Object Notation, 
ou seja é um formato de dados que usa a sintaxe de objetos do JS para organizar 
os dados, assim como o xml usa tags, e o csv separa tudo em vírgulas.
Agora objeto é um conceito que tem em linguagens de programação orientadas 
a objeto que define meio que um tipo especial de variável que pode conter 
tanto dados quanto funções ao mesmo tempo, assim possibilitando que nós possamos 
agrupar funcionalidades dos nossos programas em um ponto só e utiliza-lo 
como uma unidade.
*/


























