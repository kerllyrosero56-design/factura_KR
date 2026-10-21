let desde = Number(prompt("INICIO"));
let hasta = Number(prompt("FINAL"));

const resul = document.getElementById("resultado");
resul.textContent = `Rango seleccionado: del ${desde} al ${hasta}`;

const cuerpo = document.getElementById("cuerpoTabla");
cuerpo.innerHTML = "";

let htmlFilas = "";

while (desde <= hasta) {
    htmlFilas += `<tr class="table-danger fw-bold"><td colspan="3">Tabla del ${desde}</td></tr>`;

    for (let i = 1; i <= 10; i++) {
        htmlFilas += `<tr>
            <td>${desde}</td>
            <td>${i}</td>
            <td class="fw-semibold">${desde * i}</td>
        </tr>`;
    }
    desde++;
}

cuerpo.innerHTML = htmlFilas;

document.getElementById("resulSuma").addEventListener("click", function() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let suma=num1+num2;
    document.getElementById("resulSuma").innerHTML="La suma es: "+suma;
});