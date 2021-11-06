const btn = document.querySelector('#btn');

const img = document.getElementById('img');

btn.addEventListener('click', () => {
    alert(nom + ';' + prenom);
   img.classList.toggle('show');
})



/*
/* 2éme button */

/* déclaration des variables  */
/*
let canvas  = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let video = document.querySelector('#video');
*/


/* pour prendre la photo */
/*
document.getElementById('snap').addEventListener('click', () => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
            video.srcObject = stream;
            video.play();
        })
    }
    context.drawImage(video, 50, 50, 200, 100);
  
})
*/

/* pour eliminer l'effet flou */
/*
context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;

*/
