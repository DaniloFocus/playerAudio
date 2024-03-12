function togglePlayPause(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleMute(audioId) {
    var audio = document.getElementById(audioId);
    audio.muted = !audio.muted;
}

function playAll() {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.play();
    });
}
