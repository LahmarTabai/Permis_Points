let state = false;

function toggle() {
    if(state) {
        document.getElementById("password-field").setAttribute("type", "password");
        document.getElementById("eye").style.color='#7a797e';
        state = false;
    }else {
        document.getElementById("password-field").setAttribute("type", "text");
        document.getElementById("eye").style.color='#5887ef'
        state = true;
    }
};