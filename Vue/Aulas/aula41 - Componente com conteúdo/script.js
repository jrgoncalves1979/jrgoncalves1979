//Criando componente GLOBAL.
Vue.component('aviso',{
	template:'<div class="aviso"><slot></slot></div>'
});



//Criando componente LOCAL.
let postagem = {
	template:`
		<div>	
			<h2><slot name="titulo"></slot></h2>
			<p><slot name="corpo"></p>
		</div>		
	`
};


let conteudo = new Vue({
	el:'#conteudo',
	data:{
		
	},
	components:{
		'postagem':postagem //pode ser colocado como só postagem por ser o mesmo nome, sem aspas sem nada. 
	}
});




/*
slot = Basicamente pega o conteudo de dentro do componente.
*/










