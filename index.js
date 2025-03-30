const messageElement = document.getElementById('eid-message-text');
const message = `
    Assalamu'alaikum Wr. Wb.

    Segenap keluarga besar RT [RT 030] mengucapkan Selamat Hari Raya Idul Fitri 1445 H.

    Mohon Maaf Lahir dan Batin. Semoga kita semua kembali fitri.
    
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