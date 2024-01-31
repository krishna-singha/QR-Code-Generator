const input = document.getElementById('input-text');
const button = document.getElementById('generate-button');
const qrImg = document.querySelector('#qr-img img');
const showQR = document.getElementById('show-qr-code');

const qrBaseURL = "https://api.qrserver.com/v1/create-qr-code/?size=";

const closeBtn = document.getElementById('close-icon');

// Generate QR code
button.addEventListener('click', () => {
    const URL = qrBaseURL + "150x150&data=" + input.value;
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

// Change QR code size function
const sizeFunc = () => {
    const size = document.getElementById('size-option').value;

    switch (size) {
        case "50":
            const URL = qrBaseURL + "50x50&data=" + input.value;
            
            return URL;
        
        case "100":
            const URL1 = qrBaseURL + "100x100&data=" + input.value;
            
            return URL1;
        
        case "150":
            const URL2 = qrBaseURL + "150x150&data=" + input.value;
            
            return URL2;

        case "200":
            const URL3 = qrBaseURL + "200x200&data=" + input.value;
            
            return URL3;

        case "250":
            const URL4 = qrBaseURL + "250x250&data=" + input.value;
            
            return URL4;

        case "300":
            const URL5 = qrBaseURL + "300x300&data=" + input.value;
            
            return URL5;

        case "350":
            const URL6 = qrBaseURL + "350x350&data=" + input.value;
            
            return URL6;

        default:
            break;
    }
};

// Download QR code
document.getElementById('downloadLink').addEventListener('click', function () {
    const imageUrl = sizeFunc();

    // Fetch image data
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a Blob and set it as the href attribute of the link
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'qr_code.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
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