/*
O this só existe dentro do objeto, não existe fora
*/

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        //console.log("Ligando o "+ this.modelo); Desabilitei para colocar a condição ligado acima dessa linha.
        console.log("VRUM VRUM!");
    },
    acelerar:function() {
        if(this.ligado == true) {
            console.log("Rãããããããã");
        } else {
            console.log(this.nome+" "+this.modelo+" não está ligado");
        }
    }
};

console.log("Modelo: "+carro.modelo);

carro.ligar();
carro.acelerar();

function gabriel() {
    console.log("sou eu");
}



//Segunda parte do video.


let carros = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}
];
console.log(carros[2]);














































