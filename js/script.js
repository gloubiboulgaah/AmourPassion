
var audio = document.getElementById("myAudio");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    document.querySelector('.audio-player').innerText = 'Click to pause';
  } else {
    audio.pause();
    document.querySelector('.audio-player').innerText = 'Click to play';
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('img1');
  
    // Ajoutez un gestionnaire d'événements de clic
    image.addEventListener('click', function() {
      // Ajoutez ou supprime la classe "transparent" pour régler l'opacité
      image.classList.toggle('transparent');
    });
  });
  
