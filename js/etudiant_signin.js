// cacher et afficher mot de passe:
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
        if(this.readyState === 4) {

            if(this.status === 200) {
           
        
            localStorage.setItem('user', this.response);
            //redirection pour une autre page html :: Bien vienvenue
            window.location.href = "./etudient_bienvenue.html";
            
        }else {
            alert("You are not allowed !");
            document.location.reload();
        }
    }
}
    var myForm = document.getElementById('myForm');
    var formData = new FormData(myForm);
    request.send(formData);
    
};




































