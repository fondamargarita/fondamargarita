var myVar;

function Loader() {
  myVar = setTimeout(horaMenu, 1000);
}

function horaMenu (){
    document.getElementById("loader").style.display = "none";
    var d  = new Date();
    var h = d.getHours();
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida")
    if (h >= 7 && h < 13){
        comida.style.display = "none";
        desayuno.style.display = "block";
        console.log('hola');
        
    } else {
        desayuno.style.display = "none";
        comida.style.display = "block";
        

    }
    
}

