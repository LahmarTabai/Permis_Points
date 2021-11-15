const btn = document.querySelector('#btn');

const img = document.getElementById('img');

btn.addEventListener('click', () => {
    alert(nom + ';' + prenom);
   img.classList.toggle('show');
})





/* pour eliminer l'effet flou */
/*
context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;

*/
