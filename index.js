const messageElement = document.getElementById('eid-message-text');
const message = `
    Assalamu'alaikum Wr. Wb.

    Kami, keluarga besar RT [RT 030] mengucapkan Selamat Hari Raya Idul Fitri 1445 H.

    Taqabbalallahu Minna Wa Minkum. Semoga Allah menerima amal ibadah kita semua.

    Mohon Maaf Lahir dan Batin. Semoga silaturahmi kita semakin erat dan kita semua diberkahi kesehatan dan kebahagiaan.

    Wassalamu'alaikum Wr. Wb.
`;

let charIndex = 0;
const bgm = document.getElementById('bgm');

function typeWriter() {
    if (charIndex < message.length) {
        messageElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

function playAudio() {
    const playPromise = bgm.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay started!
                bgm.muted = false; // Unmute jika awalnya muted
            })
            .catch(error => {
                // Autoplay was prevented.
                console.log("Autoplay dicegah:", error);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    playAudio(); // Putar musik segera setelah halaman dimuat
    typeWriter(); // Mulai animasi typing
});
