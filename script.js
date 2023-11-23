document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const videoPlayer = document.getElementById('video-player');
    const lampuElement = document.getElementById('lampu-element');
    const pesanElement = document.getElementById('pesan-element');
    const buttonLampu = document.getElementById('lampu');
    const buttonPesan = document.getElementById('pesan');

    
    function showOverlay() {
        overlay.style.display = 'block';
    }

    
    function toggleLampu() {
        lampuElement.classList.toggle('lampu-nyala');
    }

    
    function showPesan() {
        pesanElement.style.display = 'block';
        videoPlayer.style.display = 'block';
        videoPlayer.play();
    }

    
    buttonLampu.addEventListener('click', toggleLampu);

    
    buttonPesan.addEventListener('click', showPesan);

   
    showOverlay();
});
