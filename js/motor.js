
var estadoCaja= "close";
var num;
var pista;
var sonido;
var nameGif;
var block=false;
var imagen=document.getElementById("imagen");
var caja=document.getElementById("caja");
var fondo=document.getElementById("container");
var border=document.getElementById("bb");

function abrirCaja(){
 if(block==false){
    console.log("intento abrir");

     if (estadoCaja=="close"){
       
        num=Math.floor(Math.random()*6);
        laSorpresa();
      
        caja.classList.add("abierta");//añade a la clase más texto y asi cambia el nombre en css
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
        border.classList.add("none")
        aleatorioGif(num); 
        estadoCaja="open";
    }else{
        reproducir(7);
        console.log("Si la voy a cerrar no puedo hacer aleatorioGif");
        estadoCaja="close";
        block=false
    }
}


 function reproducir(pista, nameGif,color){
    console.log("nameGif= "+nameGif);
    console.log("empieza a sonar "+pista);
    sonido= document.getElementById("sound."+ pista.toString());
    sonido.play();
    imagen.classList.add(nameGif);
    fondo.classList.add(color);
    ;
if(pista<6){
    console.log("la pista no es ni 6 ni 7 es "+pista);
    sonido.addEventListener("ended", function(){
        block=false
        imagen.classList.remove(nameGif);
        fondo.classList.remove(color);
        border.classList.remove("none");
        console.log("fin de la canción "+pista);})
    }
    
}


    
function aleatorioGif(num){
    
  switch(num){
    case 0:
    
    reproducir(num,"calavera","black");

    break;
    case 1:     
      
    reproducir(num,"payaso","red");

    break;
    case 2:
        
    reproducir(num,"aleluya","blanco");

    break;
    case 3:
       
     reproducir(num,"leon","blue");


    break;
    case 4:
        
    reproducir(num,"mariachi","blanco");
        

    break;
    case 5:
       
     reproducir(num,"mario","blanco");


    break;

    }
}

