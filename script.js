let button = document.querySelector('#bottone') ;

button.addEventListener("click", function() {
    console.log("tasto cliccato");
    document.querySelector('#lamp').src= "./img/yellow_lamp.png" ;
    document.querySelector('#bottone').value= "Spegni";
});

