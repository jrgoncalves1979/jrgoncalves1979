let app = new Vue({
	el:'#app',
	data:{
		aviso:true,
		divid:'qualquer',
		link:'https://google.com.br',

		n:14
	},
	methods:{
		clicou:()=>{
			alert("Evento funcionou! CLICOU!");
		},
		enviou:()=>{
			alert("Enviou");
		}
	}
});