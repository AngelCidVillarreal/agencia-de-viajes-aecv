document.addEventListener('DOMContentLoaded', function() {
    // Referencia al formulario y al div de resultado
    const formularioIndividual = document.getElementById('Cotización');
    const resultadoDiv = document.getElementById('resultado-individual');

    // Costos Base (Según tu HTML)
    const costoAdulto = 865;
    const costoMenor = 437;
    const costoDiaIndividual = 769;

    if (formularioIndividual) {
        formularioIndividual.addEventListener('submit', function(event) {
            event.preventDefault(); // Detiene el envío del formulario

            let costoVuelo = 0;
            let costoHospedaje = 0;
            let costoTotal = 0;
            let detalleHTML = "";

            resultadoDiv.innerHTML = ""; // Limpiar resultado previo

            // --- 1. Obtener y Calcular Costo de Vuelo ---
            const vueloSeleccionado = formularioIndividual.querySelector('input[name="vuelo"]:checked');
            if (!vueloSeleccionado) {
                 resultadoDiv.innerHTML = '<p style="color: red;">⚠️ Por favor, selecciona una **Opción de Vuelo**.</p>';
                 return;
            }
            switch (vueloSeleccionado.value) {
                case 'sin-avion': costoVuelo = 999; detalleHTML += '<li>Vuelo (Sin Avión): **999 MXN**</li>'; break;
                case 'ida': costoVuelo = 2499; detalleHTML += '<li>Vuelo (IDA): **2,499 MXN**</li>'; break;
                case 'ida-vuelta': costoVuelo = 5999; detalleHTML += '<li>Vuelo (IDA y VUELTA): **5,999 MXN**</li>'; break;
            }

            // --- 2. Obtener y Calcular Costo de Hospedaje ---
            const hospedajeSeleccionado = formularioIndividual.querySelector('input[name="hospedaje"]:checked');
            if (!hospedajeSeleccionado) {
                 resultadoDiv.innerHTML = '<p style="color: red;">⚠️ Por favor, selecciona una **Opción de Hospedaje**.</p>';
                 return;
            }
            switch (hospedajeSeleccionado.value) {
                case 'sin-hotel': costoHospedaje = 499; detalleHTML += '<li>Hospedaje (Sin Hotel): **499 MXN**</li>'; break;
                case 'sencilla': costoHospedaje = 799; detalleHTML += '<li>Hospedaje (Sencilla): **799 MXN**</li>'; break;
                case 'doble': costoHospedaje = 999; detalleHTML += '<li>Hospedaje (Doble): **999 MXN**</li>'; break;
            }

            // --- 3. Calcular Costo por Personas ---
            const numAdultos = parseInt(document.getElementById('adultos').value) || 0;
            const numMenores = parseInt(document.getElementById('menores').value) || 0;
            
            const costoPersonas = (numAdultos * costoAdulto) + (numMenores * costoMenor);

            detalleHTML += `<li>Adultos (${numAdultos} x ${costoAdulto} MXN): **${(numAdultos * costoAdulto).toLocaleString('es-MX')} MXN**</li>`;
            detalleHTML += `<li>Menores (${numMenores} x ${costoMenor} MXN): **${(numMenores * costoMenor).toLocaleString('es-MX')} MXN**</li>`;
            
            // --- 4. Calcular Costo por Días ---
            const numDiasIndividual = parseInt(document.getElementById('dias-individual').value) || 0;

            if (numDiasIndividual <= 0) {
                 resultadoDiv.innerHTML = '<p style="color: red;">⚠️ Por favor, ingresa un número de **Días** válido (mínimo 1).</p>';
                 return;
            }

            const costoDias = numDiasIndividual * costoDiaIndividual;
            detalleHTML += `<li>Días (${numDiasIndividual} x ${costoDiaIndividual} MXN): **${costoDias.toLocaleString('es-MX')} MXN**</li>`;

            // --- 5. Calcular Costo Total ---
            costoTotal = costoVuelo + costoHospedaje + costoPersonas + costoDias;

            // --- 6. Mostrar Resultado Final ---
            let htmlResultado = `
                <div style="border: 2px solid #007bff; padding: 15px; margin-top: 15px; background-color: #e9f7ff; border-radius: 5px;">
                    <h3 style="margin-top: 0; color: #007bff;">✅ COTIZACIÓN INDIVIDUAL</h3>
                    <p><strong>Pasajeros:</strong> ${numAdultos} Adultos y ${numMenores} Menores por ${numDiasIndividual} días.</p>
                    <hr>
                    <h4>Desglose:</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        ${detalleHTML}
                    </ul>
                    <h3 style="color: #28a745;">Costo Total Estimado: <span style="font-size: 1.5em;">${costoTotal.toLocaleString('es-MX')} MXN</span></h3>
                </div>
            `;
            resultadoDiv.innerHTML = htmlResultado;
        });
    }
    
    // Aquí es donde comenzarías el código para el segundo formulario (Paquetes)
    // ...
});