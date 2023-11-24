
document.getElementById("Inicio1").style="display:none";
document.getElementById("Acercade2").style="display:none";
document.getElementById("Portafolio3").style="display:none";
document.getElementById("Contacto4").style="display:none";   


function btniraInicio () {

    document.getElementById("Inicio1").style="display:normal"
    document.getElementById("Acercade2").style="display:none";
    document.getElementById("Portafolio3").style="display:none";
    document.getElementById("Contacto4").style="display:none";
} 

function btniraAcercade () {

    document.getElementById("Inicio1").style="display:none"
    document.getElementById("Acercade2").style="display:normal";
    document.getElementById("Portafolio3").style="display:none";
    document.getElementById("Contacto4").style="display:none";
}  
function btniraPortafolio () {

    document.getElementById("Inicio1").style="display:none"
    document.getElementById("Acercade2").style="display:none";
    document.getElementById("Portafolio3").style="display:normal";
    document.getElementById("Contacto4").style="display:none";
}  

function btniraContacto () {

    document.getElementById("Inicio1").style="display:none"
    document.getElementById("Acercade2").style="display:none";
    document.getElementById("Portafolio3").style="display:none";
    document.getElementById("Contacto4").style="display:normal";
}  


function btnPrincipal(){
    alert("Tu información ha sido enviada de manera satisfactoria");

    document.getElementById("Inicio1").style="display:normal";
    document.getElementById("Acercade2").style="display:none";
    document.getElementById("Portafolio3").style="display:none";
    document.getElementById("Contacto4").style="display:none";

}

document.getElementById("ConciertoGrupales").style="display:normal";
document.getElementById("Quinteto").style="display:normal";


