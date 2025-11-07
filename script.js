var formIndividual = document.getElementById("individual");
var formPaquetes = document.getElementById("paquetes");

function calcularIndividual(e) {
    var total = 0;
    var total = .16 * total;

    if (formIndividual.vuelo.value == "sin-avion")
    {
        total += 999;
    }
    else if (formIndividual.vuelo.value == "ida")
    {
        total += 2499;
    }
    else if (formIndividual.vuelo.value == "ida-vuelta")
    {
        total += 5999;
    }

    if (formIndividual.hospedaje.value == "sin-hotel")
    {
        total += 499;
    }
    else if (formIndividual.hospedaje.value == "sencilla")
    {
        total += 799;
    }
    else if (formIndividual.hospedaje.value == "doble")
    {
        total += 999;
    }

    total += formIndividual.adultos.value * 865;

    total += parseInt(formIndividual.menores.value) * 437;
    
    if (!formIndividual.diasIndividual.value) 
    {
        alert("indique los dias que estara de viaje");
    }

    total += parseInt(formIndividual.diasIndividual.value) * 769;


    formIndividual.totalIndividual.value = total.toLocaleString('es-MX');
    
    
}

function calcularPaquetes(e) {
    var total = 0;

    if (formPaquetes.destino.value == "suramerica")
    {
        total += 7999;
    }
    else if (formPaquetes.destino.value == "europa")
    {
        total += 21999;
    }
    else if (formPaquetes.destino.value == "africa")
    {
        total += 17999;
    }
    else if (formPaquetes.destino.value == "asia")
    {
        total += 25999;
    }
    else if (formPaquetes.destino.value == "norteamerica")
    {
        total += 12999;
    }

    if (!formPaquetes.diasPaquete.value) 
    {
        alert("Escriba el Número de Días en la seccón de Paquetes");
        return;
    }
    total += parseInt(formPaquetes.diasPaquete.value) * 899;

    if (formPaquetes.especial.checked)
    {
        total += 19999;
    }

    if (formPaquetes.bebidas.checked)
    {
        total += 699;
    }
    
    if (formPaquetes.buceo.checked)
    {
        total += 699;
    }
    
    if (formPaquetes.expedicion.checked)
    {
        total += 699;
    }
    
    if (formPaquetes.fotografias.checked)
    {
        total += 699;
    }
    
    if (formPaquetes.pesca.checked)
    {
        total += 699;
    }
    formPaquetes.totalPaquetes.value = total.toLocaleString('es-MX');}