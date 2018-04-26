(function (){

    var player = document.getElementById('video-player'); // element video

    // przyciski i formularze
    var syncPlayer = document.getElementById('sync-player');
    var playButton = document.getElementById('play-button');
    var fullscreenButton = document.getElementById('fullscreen-button');
    var muteButton = document.getElementById('mute-button');
    var inputForm = document.getElementById('input-form');

    // Inicjujemy pustą tablice na wiadomości
    var messages = [];

    // Obsługa przycisku play
    // Nasłuchujemy zarzenia click i wywołujemy funkcję
    playButton.addEventListener('click', function() {
        if(player.paused){
            player.play();
        } else {
            player.pause();
        }
    });

    // Obsługa wyciszania
    muteButton.addEventListener('click', function() {
        player.muted = !player.muted;
    });

    // Obsługa fullscreena
    fullscreenButton.addEventListener('click', function(){
        syncPlayer.requestFullscreen = syncPlayer.requestFullscreen || syncPlayer.webkitRequestFullscreen || syncPlayer.mozRequestFullScreen;
        document.fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        document.exitFullscreen = document.exitFullscreen || document.webkitCancelFullScreen || syncPlayer.mozRequestExitFullScreen;

        if(document.fullscreenElement) {
            document.exitFullscreen();
            document.fullscreenElement = null;
        } else {
            syncPlayer.requestFullscreen(); 
        }
    })

    // Formularz z wiadomościami
    inputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var form = event.target;
        var myMessage = form.elements.wiadomosc.value;

        var messageObject = {
            text: myMessage,
            time: Date.now()
        }

        messages.push(messageObject);

        console.log(messages);
    });


})();


