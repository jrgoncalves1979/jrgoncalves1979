//Criando componente GLOBAL.
Vue.component('contador', {
	template:'<button>Clicou x vezes</button>'
});


//Criando componente LOCAL.
let menuSuperior = {
	template:'<span>MENU</span>'
};


let header = new Vue({
	el:'#header',
	data:{
		title:'Titulo do site'
	},
	components:{
		'menuSuperior':menuSuperior   //Aqui vai o nome e a variavel('nome':variavél) pra pode usar o componente local.
	}
});


let sidebar = new Vue({
	el:'#sidebar',
	data:{
		item:'Alguma coisa'
	}
});

/*
Obs: Prestar atenção nos ids, a criação do bloco Vue é "puxado"
pela id.

Prestar ateção que na criação de componente LOCAL e preciso
colocar um componente:{
	'menuSuperior':menuSuperior
}
que nem nesse caso.

O Clicou x vezes é GLOBAL então basta colocar <contador></contador>
no html onde quer usar, como nesse caso.
*/






