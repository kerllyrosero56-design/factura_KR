document.getElementById("botonCalcular").addEventListener("click", function(e) {
    e.preventDefault(); 
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    let resultado = document.getElementById("resultado");
    let texto = "IMC: " + imc.toFixed(2);

    if (imc < 18.5) {
        texto += " - Bajo peso";
    } else if (imc < 25) {
        texto += " - Peso normal";
    } else if (imc < 30) {
        texto += " - Sobrepeso";
    } else {
        texto += " - Obesidad";
    }
    resultado.textContent = texto;
});