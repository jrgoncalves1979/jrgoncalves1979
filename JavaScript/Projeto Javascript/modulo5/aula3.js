//JSON.parce
/*
JSON basicamente transforma JSON string em JSON real.
JSON precisa ser escrito em maiusculo.
JSON em  formato de String:
'{"nome": "Bonieky", "idade": 90}' é necessario colocar aspas no nome da propriedade e no valor exceto em numeros/valores inteiros.
Obs: o JSON efetivo no JavaScript não tem aspas.



Função JSON.parce
Ela transforma um JSON String em um JSON real
Exemplo:
let pessoa = JSON.parse('{"nome": "Bonieky", "idade": 90}');
console.log(pessoa.nome);
Transformou em um JSON reale chamou o objeto nome.



Forma errada:
JSON.parse('{nome: "bonieky"}'); Vai dar erro, a propriedade nome não contem as aspas ""

Forma certa:
JSON.parse('{"nome":"bonieky"}'); Vai dar certo, a propriedade e valor estão com as aspas ""

Sempre que precisar transformar em obejeto real, jogar a string dentro do JSON.parse para sua transformação.


*/



/*
let pessoa = JSON.parse('{"nome": "Bonieky", "idade": 90}');
console.log(pessoa.nome);
console.log(pessoa);
*/


//teste Meu 
let teste = JSON.parse('{"atributo1": "valor1", "atributo2": 2, "atributo3": true}');
console.log(teste);

//OBSERVAÇÂO: TEM QUE SER TUDO NA MESMA LINHA.




/*
TIPOS DE DADOS DO JSON
Além de objeto e array serem considerados os tipos de dados principais. 
O JSON também tem os tipos de dados primitivos.

Os tipos de dados básicos do JSON são:

string - separados por aspas (duplas ou simples). Ex. "Brasil" ou 'Brasil'
número - sem aspas e pode ser inteiro ou real, quando for do tipo real deve-se usar o caractere . (ponto) para separar a parte inteira das casas decimais . Ex. 1 (inteiro) ou 23.454 (real)
booleano - tipo lógico normal, pode assumir valores true ou false.
nulo - este é o valor nulo mesmo. Ex. { "nome" : null }


Um exemplo de objeto JSON com todos estes tipos de dados.
{
    "texto" : "Brasil",
    "numero" : 23,
    "numeroReal" : 54.87,
    "booleano": true,
    "nulo": null
}

*/






























