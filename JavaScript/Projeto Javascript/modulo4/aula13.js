let timer;

function comecar() {
    timer = setInterval(showTime, 1000);//seta intervalos de tempo.
}
function parar() {
    clearInterval(timer);//limpa intervalos de tempo.
}

function showTime() {
    let d = new Date();            
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
    //Colocar no console showTime() para pode visualizar
}

//setInterval ele roda continuamente.




















































