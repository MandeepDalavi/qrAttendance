function generateQRCode() {
    const d = new Date().toJSON();
    let currentDate = d.slice(0, 10);
    let currentTime = d.slice(11,19);
    let dateTime = currentDate+' '+currentTime;
    
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer,  {
      text: dateTime,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "transparent",
      correctLevel: QRCode.CorrectLevel.H
    });
    
    document.getElementById("qrcode-container").style.display = "flex";
}
generateQRCode();
setInterval(generateQRCode, 10000);

function generateDateTime() {
  var currdate = new Date().toDateString();
  var currtime = new Date().toLocaleTimeString();
  document.getElementById("curDate").textContent = currdate;
  document.getElementById("curTime").textContent = currtime;
}
setInterval(generateDateTime, 999);