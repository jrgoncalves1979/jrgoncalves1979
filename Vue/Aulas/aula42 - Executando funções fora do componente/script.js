//Criando componente LOCAL.
let postagem = {
	props:['add'],
	methods:{
		responder:function(){
			this.$emit('responder', this.titulo);
		}
	},
	template:`
		<div>	
			<h2>{{ titulo }}</h2>
			<p><slot></slot></p>
			<button v-on:click="responder">Responder</button>
		</div>		
	`
};


let conteudo = new Vue({
	el:'#conteudo',
	data:{
		responderAberto:false,
		respostaTitulo:''
	},
	methods:{
		abrirResposta:function(titulo){
			this.responderAberto = true;
			this.respostaTitulo = titulo;
		}
	},
	components:{
		'postagem':postagem //pode ser colocado como só postagem por ser o mesmo nome, sem aspas sem nada. 
	}
});


/*
$emit('') = Faz executar um determinado evento.
São dois paramentros, o primeiro parametro é o nome do
evento que quer emitir, o segundo é o paramentro que vai
enviar.
*/











