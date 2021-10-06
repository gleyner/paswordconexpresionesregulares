

var AlertSucces = document.getElementById("AlertaSucces");
var AlertError = document.getElementById("AlertaError");
AlertSucces.style.display = "none";
AlertError.style.display = "none";

//

function ValidarContraseña(){
    var vig=document.getElementById("captura").value;
    if(vig!="")
    {
        var patt = new RegExp(document.getElementById("captura").value);
        var Entrada = document.getElementById("inputControl").value;

        if(patt.test(Entrada)){
            AlertError.style.display = "none";
            AlertSucces.style.display = "block";
        }else{
            AlertSucces.style.display = "none";
            AlertError.style.display = "block";
        }
    }else{
        alert("Ingrese la expresion regular");
    }
    //var patt = new RegExp(document.getElementById("captura").value);
    //var expReg = document.getElementById("captura");
    //var expReg = /^([A-B]{2}[0-9]{3}[a-z]{3}[~!@#$%^&*()_+=?>/]{3})$/;
    
    
    
}

