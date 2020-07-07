function Loader() {
    var myVar;
    document.getElementById('comida').style.display = "none";
    document.getElementById('desayuno').style.display = "none";
    myVar = setTimeout(horaMenu, 2000);
    
}

function horaMenu(){
    document.getElementById("loader").style.display = "none";

    var d  = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida");
    var nuevoM = minutos(h,m);
    console.log(nuevoM);
    if (h >= 7 && h < 13 && m < 795){
        comida.style.display = "none";
        desayuno.style.display = "block";
        
    } else{
        comida.style.display = "block";
        desayuno.style.display = "none";
        
        

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

