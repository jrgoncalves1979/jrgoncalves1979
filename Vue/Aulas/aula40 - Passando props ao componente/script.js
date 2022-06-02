//Criando componente LOCAL.
let postagem = {
	props:[ 'titulo', 'corpo'],
	data:function(){
		return {
			exemplo:'algum'
		}
	},
	template:'<div><h2>{{titulo}}</h2><p>{{corpo}}</p><span>{{exemplo}}</span><div>'
};


let conteudo = new Vue({
	el:'#conteudo',
	data:{
		
	},
	components:{
		'postagem':postagem //pode ser colocado como só postagem por ser o mesmo nome, sem aspas sem nada. 
	}
});















