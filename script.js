function generateQRCode() {
    const d = new Date().toJSON();
    let currentDate = d.slice(0, 10);
    let currentTime = d.slice(11,19);
    let dateTime = currentDate+' '+currentTime;
    
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, dateTime);
    document.getElementById("qrcode-container").style.display = "flex";
}
generateQRCode();
