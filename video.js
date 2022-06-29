const videoPlayer = document.querySelector('.video')
const video = videoPlayer.querySelector('.vidos')
const playButton = videoPlayer.querySelector('.active')

playButton.addEventListener('click', (e) => {
    if(video.paused){
        video.play()
        e.target.textContent = '▮ ▮'
    }else{
        video.pause()
        e.target.textContent = '▶'
    }
}
)