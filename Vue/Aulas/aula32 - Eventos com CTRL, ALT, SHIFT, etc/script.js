
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
Para ser exato o que se pede tem que colocar o exact
v-on:click.shift.exact="teclou"
*/












