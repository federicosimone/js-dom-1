//preparazione dati
let button = document.querySelector('#bottone') ;



//gestione evento

button.addEventListener("click", function() {
    let img = document.querySelector('#lamp') ;
    let button = document.querySelector('#bottone') ;
    let paragrafo = document.querySelector('#buio') ;
    //img.src= "./img/yellow_lamp.png" ;
    //button.innerHTML= "Spegni";
    //console.log(img.src);

    console.log(img.src) 

    if ( img.src.includes("white_lamp.png")) {
        img.src= "./img/yellow_lamp.png" ;
        button.innerHTML= "Spegni";
        button.classList.toggle("btn-danger") ;
        paragrafo.innerHTML="E luce fu";
    } else {
        img.src= "./img/white_lamp.png" ;
        button.innerHTML= "Accendi";
        button.classList.toggle("btn-danger") ;
        paragrafo.innerHTML="E' tutto buio";
        
    }
    
}) ;



