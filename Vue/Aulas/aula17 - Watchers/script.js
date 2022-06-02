let app = new Vue({
	el:'#app',
	data:{
		conta:'',
		aviso:'',
		resultado:'',
		timer:null
	},
	methods:{
		fazerConta:function() {
			this.aviso = '';

			this.resultado = eval(this.conta);
		}
	},
	watch:{
		conta:function() {
			this.aviso = 'Digitando...';

			if(this.timer != null) {
				clearTimeout(this.timer);
			}

			this.timer = setTimeout(this.fazerConta, 1000);
		}
	}
});



/*

Watchers: É um olheiro que olha uma propriedade especifica 
e vai executar algo baseado em alguma coisa.

clearTimeout: Zera o timer
setTimeout: coloca 1 segundo e some.


eval: Roda a string como se fosse codigo pra ter o resulatado
*/




















