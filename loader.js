function Loader() {
    var myVar;
    document.getElementById('comida').style.display = "none";
    document.getElementById('desayuno').style.display = "none";
    console.log('Aquí');
    myVar = setTimeout(horaMenu, 2000);
    
}

function horaMenu(){
    document.getElementById("loader").style.display = "none";

    var d  = new Date();
    var h = d.getHours();
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida");
    console.log(nuevoM);
    if (h >= 7 && h < 13){
        comida.style.display = "none";
        desayuno.style.display = "block";
        
    } else if(h >= 13){
        comida.style.display = "block";
        desayuno.style.display = "none";
        
        

    }
    
}


