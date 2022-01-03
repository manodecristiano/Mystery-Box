
var estadoCaja= "close";
var cajaRoja =document.getElementById("caja");
var sonidoAleatorio ="none";
var sonidoAbrir =document.getElementById("abrirCajaSound");
var sonidoCerrar =document.getElementById("cerrarCajaSound");

function abrirCaja(){
    if (estadoCaja=="close"){
        estadoCaja="open";
        caja.classList.add("abierta");//añade a la classe más texto y asi cambia el nombre en css
        console.log("se abrió");
        laSorpresa();
    }else{
        estadoCaja="close";
        caja.classList.remove("abierta");
        console.log("se cerró");
        laSorpresa();
    }

 function laSorpresa(){
    if (estadoCaja=="close"){
        
        sonidoAbrir.play();
    }else{
       
        sonidoCerrar.play();
    }


 }   
}