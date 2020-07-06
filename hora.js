function horaMenu (){
    var d  = new Date();
    var h = d.getHours();
    var x = document.getElementById("demo");
    var desayuno = document.getElementById("desayuno");
    var comida = document.getElementById("comida")
    if (h >= 7 && h < 13){
        comida.style.display = "none";
        desayuno.style.display = "block";
        x.innerHTML = "desayuno";
        console.log('hola');
        
    } else {
        desayuno.style.display = "none";
        comida.style.display = "block";
        x.innerHTML = "comida";

    }
    
}
    