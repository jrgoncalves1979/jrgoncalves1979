/*
function aparecerMenu(){
    let menu = document.querySelector('#menu-area');
    if (menu.style.width =='200px'){
    menu.style.width = '0px'
    }else{
    menu.style.width = '200px'
    }
    }

*/

//Segunda forma.

function aparecerMenu(){
    let menuArea = document.querySelector('#menu-area');

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}



/*
Trabalhando com JS é possível observar que a manipulação de classes CSS deve ser corretamente feita de forma?
R: Manipulação de classes CSS de forma discreta com os métodos do método classList.

É o classList que vai buscar no css as informações para o Javascript.
*/


























