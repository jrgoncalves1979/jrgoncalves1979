let app = new Vue({
	el:'#app',
	data:{
		aviso:'Alguma mensagem de aviso',
		avisoBase:{
			border:'1px solid #000',
			fontSize:'20px',
			padding:'10px'
		},
		avisoError:{
			backgroundColor:'#FF0000',
			color:'#FFF',
			fontSize:'30px'
		}
	}
});