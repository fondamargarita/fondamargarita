function Loader() {
    var myVar;
    myVar = setTimeout(horaMenu, 2000);
}

function horaMenu (){
    document.getElementById("loader").style.display = "none";
    document.getElementById('carouselExampleControls').style.display = "block";
    var d  = new Date();
    var h = d.getHours();
    var m = d.getMinutes()
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida")
    var nuevoM = minutos(h,m)
    if (h >= 7 && h < 13 && nuevoM < 795){
        comida.style.display = "none";
        desayuno.style.display = "block";
        
    } else {
        desayuno.style.display = "none";
        comida.style.display = "block";
        

    }
    
}

function minutos(h,m){
    if (h == 13){
        var nuevoM = 795
        return nuevoM
    } else {
        return m
    }
}

