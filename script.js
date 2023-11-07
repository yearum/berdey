document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const videoPlayer = document.getElementById('video-player');
    const lampuElement = document.getElementById('lampu-element');
    const pesanElement = document.getElementById('pesan-element');
    const buttonLampu = document.getElementById('lampu');
    const buttonPesan = document.getElementById('pesan');

    // Fungsi untuk menampilkan layar gelap
    function showOverlay() {
        overlay.style.display = 'block';
    }

    // Fungsi untuk menyalakan lampu
    function toggleLampu() {
        lampuElement.classList.toggle('lampu-nyala');
    }

    // Fungsi untuk menampilkan pesan
    function showPesan() {
        pesanElement.style.display = 'block';
        videoPlayer.style.display = 'block';
        videoPlayer.play();
    }

    // Tombol untuk menyalakan lampu
    buttonLampu.addEventListener('click', toggleLampu);

    // Tombol untuk menampilkan pesan
    buttonPesan.addEventListener('click', showPesan);

    // Menampilkan layar gelap saat halaman dimuat
    showOverlay();
});
