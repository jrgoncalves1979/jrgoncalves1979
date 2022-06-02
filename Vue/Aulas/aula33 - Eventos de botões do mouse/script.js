
let app = new Vue({
	el:'#app',
	data:{
		contagem:0
	},
	methods:{
		teclou:function() {
			this.contagem++;
		}
	}
});





/*
Clicks com botões diferentes do mouse.
<button v-on:click.left="teclou">Clique Aqui!</button>
<button v-on:click.right.prevent="teclou">Clique Aqui!</button>
<button v-on:click.middle="teclou">Clique Aqui!</button>

Obs: O right tem o prevent para anular as opções/propriedades
de qquando clicamos com o botão direito.



Com mais modes:
<button v-on:click.right.shift.prevent="teclou">Clique Aqui!</button>
*/











