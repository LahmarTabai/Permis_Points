// message de welcome :

document.getElementById("ret").innerHTML = localStorage.getItem('user'); // .username


/********************** */


// envoyer les données au qr code : 


var qr_data =  JSON.stringify(window.localStorage.getItem('user'));

var qr_code = new QRCode(document.getElementById("qrcode"));

function generateQR() {

    var data = qr_data;

    qr_code.makeCode(data);

};

/*********************** */

// button pour afficher le QR Code :

const btn = document.querySelector('#btn');

const img = document.getElementById('qrcode');

btn.addEventListener('click', () => {
    generateQR();
    img.classList.toggle('show');
   
})






































/*
// message de welcome :

let rou = JSON.stringify(window.localStorage.getItem('user'));

document.getElementById("ret").innerHTML = rou.username;


/********************** */


// envoyer les données au qr code : 

/*
var qr_data = document.getElementById("qr_data");

var qr_code = new QRCode(document.getElementById("qrcode"));

function generateQR() {

    var data = qr_data.value;

    qr_code.makeCode(data);

}; */