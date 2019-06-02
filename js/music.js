pageMusic()

function pageMusic() {
    let isPlay = true

    music.onclick = function() {
        isPlay = !isPlay
        if (isPlay) {
            this.style.background = 'url(img/musicon.gif)'
            audio.play()
        } else {
            this.style.background = 'url(img/musicoff.gif)'
            audio.pause()
        }
    }

}