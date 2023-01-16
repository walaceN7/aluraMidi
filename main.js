function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio).play();

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {        
        tecla.classList.remove('ativa');        
    }
});
