const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio ('/audios/luna-rise-part-one.mp3')
musica.loop = true

musicaFocoInput.addEventListener('change', ()=> {
    if(musica.paused) {
        musica.play()
    } else{
        musica.pause()
    }
})