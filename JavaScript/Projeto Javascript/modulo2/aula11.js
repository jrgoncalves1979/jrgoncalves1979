function trocarImagem(filename, animalname, color) {
    document.querySelector('.imagem').setAttribute('src', './images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
    document.querySelector('.imagem').setAttribute('cor', color);
}
function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    let coranimal = document.querySelector('.imagem').getAttribute('cor');
    alert("O animal é: "+animal +" "+ coranimal);
    console.log("O animal é: "+animal +" "+ coranimal);
}







































