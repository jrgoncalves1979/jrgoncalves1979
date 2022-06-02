function trocar() {
    if (document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto')
        document.querySelector('button').classList.add('verde')
    } else {
        document.querySelector('button').classList.remove('verde')
        document.querySelector('button').classList.add('preto')
    }
}



//Obs: contains verifica se ja tem a class no elemento preto nesse caso,
//então nesse caso tem.
//A class foi criada no html class='preto'

//Obs2: precisa começar com a cor, por isso foi colocado no html

//Obs3: as tres funcões principais do classList são: contains, remove e add







