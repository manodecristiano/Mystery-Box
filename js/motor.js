
var estadoCaja= "close";
var num;
var pista;
var sonido;
var block=false;

function abrirCaja(){
 if(block==false){
    console.log("intento abrir");

     if (estadoCaja=="close"){
       
        num=Math.floor(Math.random()*6);
        laSorpresa();
      
        caja.classList.add("abierta");//añade a la classe más texto y asi cambia el nombre en css
        console.log("se abrió");
       
      }else{
        
        laSorpresa(); 
        caja.classList.remove("abierta");
        console.log("se cerró");
        
      }
   }else{
    console.log("espera a que acabe la animación");
     }
   }


 function laSorpresa(){
    console.log("entro en sorpresa");
     block=true;
    if (estadoCaja=="close"){
        reproducir(6);
        console.log("haré aleatorioGif");
        aleatorioGif(num); 
        estadoCaja="open";
    }else{
        reproducir(7);
        console.log("Si la voy a cerrar no puedo hacer aleatorioGif");
        estadoCaja="close";
        block=false
    }
}


 function reproducir(pista){

    console.log("empieza a sonar "+pista);
    sonido =document.getElementById("sound."+ pista.toString());
    sonido.play();
    
if(pista<6){
    console.log("la pista no es ni 6 ni 7 es "+pista);
    sonido.addEventListener("ended", function(){
        block=false
        console.log("fin de la canción "+pista);})
    }
    
}

    
function aleatorioGif(num){
    console.log("el random="+num);
  switch(num){
    case 0:
     reproducir(num);

    break;
    case 1:        
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

