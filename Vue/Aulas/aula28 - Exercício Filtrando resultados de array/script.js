let app = new Vue({
	el:'#app',
	data:{
		busca:'',
		nomes:[ 'Bonieky', 'Paulo', 'Antonio','Fulano', 'Ciclano']
	},
	computed:{
		nomesFiltrados:function(){
			return this.nomes.filter(function(nome){
				if(this.busca != '') {

					if(nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1) {
						return true;
					} else {
						return false;
					}
				
				} else {
					return true;
				}
			}, this);	
		}
	}
});






/*
A função filter do JS basicamente gera um novo array.
Dentro da função filter() tem que ter dois parametros, um é uma
função e o outro qual é o objeto.




indexof = Nesta documentação de JavaScript veremos 
como o método indexOf() do objeto String pode ser 
utilizado para recuperar a posição inicial de um elemento, 
dentro de uma sequência de caracteres. Caso esse elemento 
não exista, é retornado o valor -1.
*/





















