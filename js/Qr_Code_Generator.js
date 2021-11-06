var qr_data = document.getElementById("qr_data");

var qr_code = new QRCode(document.getElementById("qrcode"));

function generateQR() {

    var data = qr_data.value;

    qr_code.makeCode(data);

};