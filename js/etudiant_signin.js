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



/***********************************/

// xmlHTTPRequest :

function fullData() {
    document.getElementById('but').disabled=true; 
    var request = new XMLHttpRequest();
    request.open("POST", "https://itic-pap.rihan.fr/auth/login");
    request.onreadystatechange = function() {
        console.log('state change', this);
        if(this.readyState === 4 && this.status === 200) {
            var user = JSON.parse(this.response);
            document.getElementById('result').innerHTML = user;

            localStorage.setItem('user', user);
            //redirection pour une autre page html :: Bien vienvenue
            window.location.href = "./etudient_bienvenue.html";
            
        }else {
            document.getElementById('result').innerHTML = "Forbidden";
        }
    };
    var myForm = document.getElementById('myForm');
    var formData = new FormData(myForm);
    request.send(formData);
};