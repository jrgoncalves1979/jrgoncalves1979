let app = new Vue({
	el:'#app',
	data:{
		nome:'Bonieky'
	},
	computed:{
		nomeInvertido:function() {
			return this.nome.split('').reverse('').join('');
		}
	}
});
























