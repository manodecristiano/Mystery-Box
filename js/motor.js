
var estadoCaja= "close";
var num;
var pista;
var sonido;


function abrirCaja(){
    if (estadoCaja=="close"){
        num=Math.floor(Math.random()*6);
        laSorpresa();
        estadoCaja="open";
        caja.classList.add("abierta");//añade a la classe más texto y asi cambia el nombre en css
        console.log("se abrió");
       
    }else{
        laSorpresa();
        estadoCaja="close";
        caja.classList.remove("abierta");
        console.log("se cerró");
        
    }
}

 function laSorpresa(){
    if (estadoCaja=="close"){
        reproducir(6);
        aleatorioGif(num); 
    }else{
        reproducir(7);
    }
}


 function reproducir(pista){

    sonido =document.getElementById("sound."+ pista.toString());
    sonido.play();
}

    
function aleatorioGif(num){
    console.log("el random="+num);
  switch(num){
    case 0:
     reproducir(num);

    break;
    case 1:
        console.log("entro en Switch");
        reproducir(num);

    break;
    case 2:
        reproducir(num);

    break;
    case 3:
        reproducir(num);

    break;
    case 4:
        reproducir(num);

    break;
    case 5:
        reproducir(num);

    break;

    }
}

