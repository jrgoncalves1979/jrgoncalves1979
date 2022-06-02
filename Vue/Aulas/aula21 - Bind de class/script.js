/*
let app = new Vue({
	el:'#app',
	data:{
		isError:false,
		isWarning:false,
		isDanger:false,
		errorMsg:'Mensagem Qualquer de erro'
	},
	methods:{
		showWarning:function(msg) {
			this.isError = true;
			this.isWarning = true;
			this.isDanger = false;
			this.errorMsg = msg;
		},
		showError:function(msg) {
			this.isError = true;
			this.isWaring = false;
			this.isDanger = true;
			this.errorMsg = msg;
		}
	}
});
*/


//OUTRO JEITO, COMO OBJETO.

let app = new Vue({
	el:'#app',
	data:{
		errorMsg:'',
		erroDivClass:{ 
			ativo:false, 
			warning:false, 
			error:false 
		}
	},
	methods:{
		showWarning:function(msg) {
			this.erroDivClass.ativo = true;
			this.erroDivClass.warning = true;
			this.erroDivClass.error = false;
			this.errorMsg = msg;
		},
		showError:function(msg) {
			this.erroDivClass.ativo = true;
			this.erroDivClass.warning = false;
			this.erroDivClass.error = true;
			this.errorMsg = msg;
		},
		hideError:function(msg) {
			this.erroDivClass.ativo = false;
			this.erroDivClass.warning = false;
			this.erroDivClass.error = false;
			this.errorMsg ='';
		}
	}
});