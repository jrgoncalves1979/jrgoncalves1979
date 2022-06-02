let app = new Vue({
    el:'#app',
    data: {
        nome:'Bonieky'
    },
    destroyed:function(){
        alert(this.nome);
    }
});

/*
beforeCreate
created

beforeMount
mounted

beforeUpdate
updated

beforeDestroy
destroyed
*/
















