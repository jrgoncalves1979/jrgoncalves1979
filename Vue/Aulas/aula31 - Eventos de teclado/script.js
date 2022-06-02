
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

Manipulação de teclas:

v-on:keyup.delete="teclou" funcina como backspace tambem
v-on:keyup.esc="teclou"
v-on:keyup.up="teclou"
v-on:keyup.down="teclou"
v-on:keyup.space="teclou"
v-on:keyup.right="teclou"
v-on:keyup.left="teclou"


Para criar :

Ver os codigos das teclas no Google.
Ex:
Fazer na Javascript e colocar no html na parte do input type="text" v-on:keyup.f2="teclou"
Vue,config.keyCodes.f2 = e o codigo da tecla, acho que é tabela asc.
*/





















