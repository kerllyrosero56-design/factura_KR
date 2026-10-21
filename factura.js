let subtotalGeneral = 0;

document.getElementById("btnagregar").addEventListener("click", function() {
    let producto = document.getElementById("producto").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    let subtotalItem = cantidad * precio;
    let nuevaFila = `
        <tr>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>$${precio.toFixed(2)}</td>
            <td>$${subtotalItem.toFixed(2)}</td>
        </tr>
    `;
    document.getElementById("detalleFac").innerHTML += nuevaFila;

    subtotalGeneral += subtotalItem;
    let ivaGeneral = subtotalGeneral * 0.15;
    let totalGeneral = subtotalGeneral + ivaGeneral;

    document.getElementById("resSubtotal").textContent = `$${subtotalGeneral.toFixed(2)}`;
    document.getElementById("resIVA").textContent = `$${ivaGeneral.toFixed(2)}`;
    document.getElementById("resTotal").textContent = `$${totalGeneral.toFixed(2)}`;

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
});