/*
Três grupos para se pegar informações dos tamanhos.


OFFSET

offsetHeith
document.querySelector(".texto").offsetHeith
Traz o tamanho bruto declarado no CSS

offsetWidth
document.querySelector(".texto").offsetWidth
Traz o tamanho bruto declarado no CSS

Obs:Foi declarado no css width e height de 200px
foi colocado mais 20px de padding ele passa pra tamanho de 240px nos dois.

Esses englobam o scrollbar, padding, borda e etc... conta tudo e soma.






CLIENT

document.querySelector(".texto").clientWidth
Traz os tamanhos excluindo o scrollbar, não pega a barra de rolagem.
Deu 223px descontou os 17px da barra de rolagem.

document.querySelector(".texto").clientHeith
Deu 240px (200px declarado mais 20px de padding cima e baixo total de 240px)
Borda, Margin ele não vai considerar



SCROLL

document.querySelector(".texto").scrollheight
Deu 463px altura total do texto


document.querySelector(".texto").scrollWidth
Deu 223px lagura total do TEXTO, somento texto sem a barra de rolagem

Scroll da o tamanho real do conteudo, deu o tamanho real do texto



*/