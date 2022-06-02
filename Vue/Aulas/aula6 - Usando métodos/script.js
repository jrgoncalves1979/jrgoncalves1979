let app = new Vue({
    el:'#app',
    data: {
        nome:'Bonieky',
        idade:90
    },
    methods:{
        mostrar:(nome, idade)=>{
            let txt = 'Olá, '+nome+' - '+idade+' anos';
            return txt;
        },
        testar:()=>{
            return 'Testando 1,2,3...';
        },
    }
});









