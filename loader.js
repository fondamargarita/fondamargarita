function Loader() {
    var myVar;
    document.getElementById('carousel-control-next').style.display = "none";
    document.getElementById('carousel-control-prev').style.display = "none";
    myVar = setTimeout(horaMenu, 2000);
    
}

function horaMenu(){
    document.getElementById("loader").style.display = "none";
    document.getElementById('carousel-control-next').style.display = "block";
    document.getElementById('carousel-control-prev').style.display = "block";
    var d  = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida");
    var nuevoM = minutos(h,m);
    console.log(nuevoM);
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
        var nuevoM = 795;
        return nuevoM;
    } else {
        return m;
    }
}

