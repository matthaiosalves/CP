// Abrir script //
function click_script() {
    let element = document.getElementById("mostrar");
    let treinamentos = document.getElementById("treinamentos");
    let acitve = document.getElementById("active_script");
    let element2 = document.getElementById("mostrar2");
    let treinamentos2 = document.getElementById("treinamentos");
    let acitve2 = document.getElementById("active_script2");
    let element3 = document.getElementById("mostrar3");
    let treinamentos3 = document.getElementById("treinamentos");
    let acitve3 = document.getElementById("active_script3");
    let element4 = document.getElementById("mostrar4");
    let treinamentos4 = document.getElementById("treinamentos");
    let acitve4 = document.getElementById("active_script4");
    

    if (element.style.maxHeight == "1430px"){
        element.style.maxHeight = "0";
        treinamentos.style.minHeight = "550px";
        acitve.style.backgroundColor = "#FFF";
        acitve.style.color = "#416923";
        
    } else {
        element.style.maxHeight = "1430px";
        treinamentos.style.minHeight = "1880px";
        acitve.style.backgroundColor = "#416923";
        acitve.style.color = "#FFF";
        element2.style.maxHeight = "0";
        acitve2.style.backgroundColor = "#FFF";
        acitve2.style.color = "#416923";
        element3.style.maxHeight = "0";
        acitve3.style.backgroundColor = "#FFF";
        acitve3.style.color = "#416923";
        element4.style.maxHeight = "0";
        acitve4.style.backgroundColor = "#FFF";
        acitve4.style.color = "#416923";
    }
  
}

function click_script2(){
    let element1 = document.getElementById("mostrar2");
    let treinamentos = document.getElementById("treinamentos");
    let acitve1 = document.getElementById("active_script2");
    let element2 = document.getElementById("mostrar");
    let treinamentos2 = document.getElementById("treinamentos");
    let acitve2 = document.getElementById("active_script");
    let element = document.getElementById("mostrar3");
    let acitve = document.getElementById("active_script3");
    let element4 = document.getElementById("mostrar4");
    let treinamentos4 = document.getElementById("treinamentos");
    let acitve4 = document.getElementById("active_script4");

    if (element1.style.maxHeight == "1430px"){
        element1.style.maxHeight = "0";
        treinamentos.style.minHeight = "550px";
        acitve1.style.backgroundColor = "#FFF";
        acitve1.style.color = "#416923";
        
        
    } else {
        element1.style.maxHeight = "1430px";
        treinamentos.style.minHeight = "1880px";
        acitve1.style.backgroundColor = "#416923";
        acitve1.style.color = "#FFF";
        element2.style.maxHeight = "0";
        acitve2.style.backgroundColor = "#FFF";
        acitve2.style.color = "#416923";
        element.style.maxHeight = "0";
        acitve.style.backgroundColor = "#FFF";
        acitve.style.color = "#416923";
        element4.style.maxHeight = "0";
        acitve4.style.backgroundColor = "#FFF";
        acitve4.style.color = "#416923";
        
    }

}

function click_script3(){
    let element = document.getElementById("mostrar3");
    let treinamentos = document.getElementById("treinamentos");
    let acitve = document.getElementById("active_script3");
    let element2 = document.getElementById("mostrar2");
    let acitve2 = document.getElementById("active_script2");
    let element3 = document.getElementById("mostrar");
    let acitve3 = document.getElementById("active_script");
    let element4 = document.getElementById("mostrar4");
    let acitve4 = document.getElementById("active_script4");

    if (element.style.maxHeight == "1430px"){
        element.style.maxHeight = "0";
        treinamentos.style.minHeight = "550px";
        acitve.style.backgroundColor = "#FFF";
        acitve.style.color = "#416923";
        
    } else {
        element.style.maxHeight = "1430px";
        treinamentos.style.minHeight = "1880px";
        acitve.style.backgroundColor = "#416923";
        acitve.style.color = "#FFF";
        element2.style.maxHeight = "0";
        acitve2.style.backgroundColor = "#FFF";
        acitve2.style.color = "#416923";
        element4.style.maxHeight = "0";
        acitve4.style.backgroundColor = "#FFF";
        acitve4.style.color = "#416923";
        element3.style.maxHeight = "0";
        acitve3.style.backgroundColor = "#FFF";
        acitve3.style.color = "#416923";
    }
}

function click_script4(){
    let element = document.getElementById("mostrar3");
    let treinamentos = document.getElementById("treinamentos");
    let acitve = document.getElementById("active_script3");
    let element2 = document.getElementById("mostrar2");
    let treinamentos2 = document.getElementById("treinamentos");
    let acitve2 = document.getElementById("active_script2");
    let element3 = document.getElementById("mostrar");
    let treinamentos3 = document.getElementById("treinamentos");
    let acitve3 = document.getElementById("active_script");
    let element4 = document.getElementById("mostrar4");
    let treinamentos4 = document.getElementById("treinamentos");
    let acitve4 = document.getElementById("active_script4");

    if (element4.style.maxHeight == "1430px"){
        element4.style.maxHeight = "0";
        treinamentos.style.minHeight = "550px";
        acitve4.style.backgroundColor = "#FFF";
        acitve4.style.color = "#416923";
        
    } else {
        element4.style.maxHeight = "1430px";
        treinamentos.style.minHeight = "1880px";
        acitve4.style.backgroundColor = "#416923";
        acitve4.style.color = "#FFF";
        element2.style.maxHeight = "0";
        acitve2.style.backgroundColor = "#FFF";
        acitve2.style.color = "#416923";
        element.style.maxHeight = "0";
        acitve.style.backgroundColor = "#FFF";
        acitve.style.color = "#416923";
        element3.style.maxHeight = "0";
        acitve3.style.backgroundColor = "#FFF";
        acitve3.style.color = "#416923";
    }
}

// Abrir guia

function guia_click(){
    let element = document.getElementById("guia_aberto");
    let element2 = document.getElementById("guia_aberto2");

    if (element.style.maxHeight == "2350px"){
        element.style.maxHeight = "0px";
    }else {
        element.style.maxHeight = "2350px"; 
        element2.style.maxHeight = "0px";             
    }
}

function guia_click2(){
    let element = document.getElementById("guia_aberto2");
    let element2 = document.getElementById("guia_aberto");

    if (element.style.maxHeight == "2350px"){
        element.style.maxHeight = "0px";

    }else {
        element.style.maxHeight = "2350px";
        element.style.marginLeft = "0px";
        element2.style.maxHeight = "0px";         
    }

}
//teste
/* function alterarImagem(){
    document.getElementById('test--img').style.backgroundImage="url('../images/close.png')";
    document.getElementById('test--img').style.backgroundPosition="center";
   
}

/*Perguntas Frequentes*/

var acc = document.getElementsByClassName("FAQ_card_active");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("FAQ_active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "1px";
    
    } 
  });
}
/* Data */
function showTime(){
    let d = new Date();
    let da = d.getDate();
    let m = d.getMonth();
    let y = d.getFullYear();
    let txt = da+'/'+m+'/'+y;

    document.querySelector(".date_day").innerHTML = txt;
}

showTime();
