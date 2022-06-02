/*
JSON.stringify

É o oposto do JSON.parse


*/


//escrecer no console.
JSON.stringify({nome: 'Bonieky', idade: 90});
/*
Vai retornar: '{"nome":"Bonieky","idade":90}'
transformou em string com aspas.
*/




//Montando (tambem escrever no console)
let pessoa = {nome:'Bonieky', idade: 90, algo: null};
//em seguida fazer o codigo abaixo
let pessoaString = JSON.stringify(pessoa);
//escrever em seguida para chamar a resposta
pessoaString
//Resposta:
'{"nome":"Bonieky","idade":90,"algo":null}'//formato JSON






//No console
let busca = {input: 'bon'};
//Depois
buscaString = JSON.stringify(busca)
//Resposta:
'{"input":"bon"}'
//retorno do resultado
let resultado = {
    lista: [
        'bonieky',
        'bonieky lacerda',
        'bonito'
    ]
};
//em seguida digitar 
JSON.stringify(resultado)
//Retorna:
'{"lista":["bonieky","bonieky lacerda","bonito"]}'
//Em seguida:
let res = '{"lista":["bonieky","bonieky lacerda","bonito"]}'
//agora para ler o resultado
let resJson = JSON.parse(res);
//em seguida dar o comando 
resJson
//resultado final
{lista: Array(3)}
lista: (3) ['bonieky', 'bonieky lacerda', 'bonito']
//com isso se exibe na tela.





/*
Recapitulando...

JSON.parse = Pega uma string e transforma em JSON

JSON.stringify = Pega um JSON e transforma em string

*/



































