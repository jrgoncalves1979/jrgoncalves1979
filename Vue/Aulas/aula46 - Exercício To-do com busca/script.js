let busca = {
	data:function(){
		return {
			txt:'',
			only_stock:false
		}
	},
	methods:{
		buscar:function(){
			this.$emit('buscar', {txt:this.txt, only_stock:this.only_stock});
		}
	},
	template:`
		<div>
			<input type="text" placeholder="Busca..." v-model="txt" v-on:keyup="buscar" /><br/>
			<input type="checkbox" id="only_stock" v-model="only_stock" v-on:change="buscar" />
			<label for="only_stock">Mostrar apenas produtos em estoque</label>
		</div>
	`
}
let lista = {
	props:['itens'],
	template:`
		<div>
			<table border="0" width="200">
				<tr>
					<th>Nome</th>
					<th>Preço</th>
				</tr>

				<template v-for="cat in itens">
					<tr>
						<td colspan="2"><strong>{{ cat.nome }}</strong></td>
					</tr>
					<tr v-for="p in cat.itens">
						<td v-if="p.estoque">{{p.nome}}</td>
						<td v-else style="color:red">{{p.nome}}</td>
						<td>{{'$'+p.preco}}</td>
					</tr>
				</template>
				

			</table>
		</div>
	`
}

let app = new Vue({
	el:'#app',
	data:{
		produtos:[
			{nome:'Sporting Goods', itens:[
				{nome:'Football', preco:'49.99', estoque:true},
				{nome:'Baseball', preco:'9.99', estoque:true},
				{nome:'Basketball', preco:'29.99', estoque:false}
			]},
			{nome:'Electronics', itens:[
				{nome:'iPod Touch', preco:'99.99', estoque:true},
				{nome:'iPhone 5', preco:'399.99', estoque:false},
				{nome:'Nexus 7', preco:'199.99', estoque:true}
			]}
		],
		exibidos:[]
	},
	created:function(){
		this.exibidos = this.produtos;
	},
	methods:{
		buscar:function(p) {
			let novalista = [];

			for(let i in this.produtos) {

				let novositens = [];

				for(let w in this.produtos[i].itens) {
					let vai = true;

					if(p.only_stock && this.produtos[i].itens[w].estoque == false) {
						vai = false;
					}

					if(p.txt != '' && this.produtos[i].itens[w].nome.toLowerCase().indexOf(p.txt.toLowerCase()) == -1) {
						vai = false;
					}

					if(vai) {
						novositens.push(this.produtos[i].itens[w]);
					}

				}

				if(novositens.length > 0) {
					novalista.push({
						nome:this.produtos[i].nome,
						itens:novositens
					});
				}

			}

			this.exibidos = novalista;
		}
	},
	components:{
		busca,
		lista
	}
});













