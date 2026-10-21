document.getElementById("CalcularTotal").addEventListener("click", function() {
    let precio = Number(document.getElementById("precio").value);
    let total = calcularTotal(precio);
    document.getElementById("total").innerHTML = "Total es: " + total;
})

//Calcula el IVA
function calcularIVA(precio)
{
    return precio*0.15;
}
//Calcula el TOTAL
function calcularTotal(precio) 
{
    return precio + calcularIVA(precio);
}