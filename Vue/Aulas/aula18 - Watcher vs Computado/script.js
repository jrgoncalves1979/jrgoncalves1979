//COM WATCH 
/*
let app = new Vue({
	el:'#app',
	data:{
		primeiroNome:'',
		segundoNome:'',
		nomeCompleto:''
	},
	watch:{
		primeiroNome:function() {
			this.nomeCompleto = this.primeiroNome+' '+this.segundoNome;
		},
		segundoNome:function() {
			this.nomeCompleto = this.primeiroNome+' '+this.segundoNome;
		}
	}
});
*/

//COM COMPUTED
let app = new Vue({
	el:'#app',
	data:{
		primeiroNome:'',
		segundoNome:''		
	},
	computed:{
		nomeCompleto:function() {
			return this.primeiroNome+' '+this.segundoNome;
		}
	}
});




















