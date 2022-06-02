let app = new Vue({
	el:'#app',
	data:{
		nome:'Bonieky',
		numero:5
	},
	computed:{
		aleatorio:function() {
			let al = Math.floor(Math.random()*100);
			return this.numero+" + "+al+" = "+(this.numero+al);
		}
	},
	methods:{
		nomeInvertido:function() {
			return this.nome.split('').reverse().join('');
		},
		aleatorioFuncao:function() {
			let al = Math.floor(Math.random()*100);
			return this.numero+" + "+al+" = "+(this.numero+al);
		}
	}
});



/*
computed: Computada é diferente do methods(método),
methods roda como função e roda todas as vezes, a computed guarda
em cache e é reaproveitada, sendo assim não consome processamento.

OBS: lá no html em methods se usa: () nomeInvertido() e aleatorioFuncao()
como função mesmo, já o computed não se usao () então fica só o nome da
propriedade nesse caso: nome e aleatorio.
*/




















