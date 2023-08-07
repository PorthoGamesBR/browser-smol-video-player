function changePlayPause(change, button) {
    let toRemove = change ? "fa-pause" : "fa-play";
    let toAdd = !change ? "fa-pause" : "fa-play";
    button.children[0].classList.remove(toRemove);
    button.children[0].classList.add(toAdd);
}

function playPauseVideo(vp) {
    if (vp.paused){
        vp.play();
    }else{
        vp.pause();
    }

}

window.onload = () => {
    let videoPlayer = document.getElementById("videoPlayer")
    let ppButton = document.getElementById("ppButton")
    let volSlider = document.getElementById("volume")

    ppButton.addEventListener("click", event => {playPauseVideo(videoPlayer)})
    videoPlayer.addEventListener("play", () => {changePlayPause(false,ppButton)})
    videoPlayer.addEventListener("pause", () => {changePlayPause(true,ppButton)})
    volSlider.addEventListener("input", event => {videoPlayer.volume = event.target.value/100})
}
