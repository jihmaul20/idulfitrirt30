const messageElement = document.getElementById('eid-message-text');
const message = `
    Assalamu'alaikum Wr. Wb.

    Kami, keluarga besar RT [RT 030] mengucapkan Selamat Hari Raya Idul Fitri 1445 H.

    Taqabbalallahu Minna Wa Minkum. Semoga Allah menerima amal ibadah kita semua.

    Mohon Maaf Lahir dan Batin. Semoga silaturahmi kita semakin erat dan kita semua diberkahi kesehatan dan kebahagiaan.

    Wassalamu'alaikum Wr. Wb.
`;
let charIndex = 0;

function typeWriter() {
    if (charIndex < message.length) {
        messageElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30); // Kecepatan mengetik (milidetik)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});
