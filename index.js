const input = document.getElementById('input-text');
const button = document.getElementById('generate-button');
const qrImg = document.querySelector('.qr-img img');
const showQR = document.getElementById('show-qr-code');
const qrBaseURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const closeBtn = document.getElementById('close-icon');

// Generate QR code
button.addEventListener('click', () => {
    const URL = qrBaseURL + input.value;
    qrImg.src = URL;

    if (input.value != "") {
        if (showQR.style.display == "none") {
            showQR.style.display = "flex";
        }
        else {
            showQR.style.display = "flex";
        }
    }
});

// Close QR code
closeBtn.addEventListener('click', () => {
    if (showQR.style.display == "flex") {
        showQR.style.display = "none";
    }
    else {
        showQR.style.display = "flex";
    }
});

// Disable right click and inspect element
document.oncontextmenu = () => {
    return false;
}

// Disable F12 key and ctrl+u
document.onkeydown = (e) => {
    if (e.key === 'F12' || e.key === 'f12') {
        return false;
    }
    if (e.ctrlKey && e.key === 'u') {
        return false;
    }
}