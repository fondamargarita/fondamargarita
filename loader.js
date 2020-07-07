function Loader() {
    var myVar;
    document.getElementById('boton1').style.visibility = "hidden";
    document.getElementById('boton2').style.visibility = "hidden";
    console.log('Aquí');
    myVar = setTimeout(horaMenu, 1000);
    
}

function horaMenu(){
    document.getElementById("loader").style.display = "none";
    document.getElementById('boton1').style.visibility = "visible";
    document.getElementById('boton2').style.visibility = "visible";
    var d  = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida");
    var nuevoM = minutos(h,m);
    console.log(nuevoM);
    if (h >= 7 && h < 13 && nuevoM < 795){
        comida.style.visibility = "hidden";
        desayuno.style.visibility = "visible";
        
    } else {
        desayuno.style.visibility = "hidden";
        comida.style.visibility = "visible";
        

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

