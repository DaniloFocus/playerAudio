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
        // Certifique-se de que o áudio está pausado antes de tentar reiniciar
        audio.pause();
        audio.currentTime = 0;  // Reinicia o áudio para o início
        audio.play();
    });
}
// Adicione estas variáveis globais no início do arquivo
var audioElements = [];
var canvasElements = [];
var isPlayingAll = false;

function setup() {
  audioElements.push(document.getElementById('audio1'));
  audioElements.push(document.getElementById('audio2'));
  audioElements.push(document.getElementById('audio3'));
  audioElements.push(document.getElementById('audio4'));

  canvasElements.push(createCanvas(400, 100));
  canvasElements.push(createCanvas(400, 100));
  canvasElements.push(createCanvas(400, 100));
  canvasElements.push(createCanvas(400, 100));

  for (let i = 0; i < audioElements.length; i++) {
    const audio = audioElements[i];
    const canvas = canvasElements[i];
    setupWaveform(canvas, audio);
  }
}

function draw() {
  if (isPlayingAll) {
    for (let i = 0; i < audioElements.length; i++) {
      const audio = audioElements[i];
      const canvas = canvasElements[i];
      updateWaveform(canvas, audio);
    }
  }
}

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
  isPlayingAll = !isPlayingAll;

  for (let i = 0; i < audioElements.length; i++) {
    const audio = audioElements[i];
    if (isPlayingAll) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

function setupWaveform(canvas, audio) {
  let p5Canvas = createCanvas(400, 100);
  p5Canvas.parent(canvas.id);
}

function updateWaveform(canvas, audio) {
  let waveform = fft(audio, 1024);
  canvas.background(255);

  noFill();
  beginShape();
  stroke(0, 0, 255); // waveform color
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}
