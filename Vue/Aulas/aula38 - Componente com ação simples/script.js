Vue.component('contador', {
	data:function(){
		return {
			c:0
		};
	},
	methods:{
		aumentar:function() {
			this.c++;
		}
	},
	template:'<div><span>{{c}}x </span><button v-on:click="aumentar">Aumentar</button></div>'
});


let app = new Vue({
	el:'#app',
	data:{
		
	}
});


/*
Todo componente só pode ter um elemento, no caso desse codigo é a div,
pode ter elementos dentro mas o Vue "enxerga" a div(o bloco), 
no entanto um elemento.

<div><span>{{c}}x</span><button v-on:click="aumentar">Aumentar</button></div>'
*/










