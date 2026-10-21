let nombre = document.getElementById('nombre').value;
let edad = parseInt(document.getElementById('edad').value);
let mensaje = document.getElementById('mensajeResultado');

if (edad < 18) {
  mensaje.innerHTML = "Acceso denegado. Debes ser mayor de 18 años.";
} 
else if (edad >= 18 && edad <= 25) {
  mensaje.innerHTML = "Bienvenido " + nombre + ". Eres Estudiante, tu horario es hasta las 22:00.";
} 
else if (edad >= 26 && edad <= 35) {
  mensaje.innerHTML = "Bienvenido " + nombre + ". Eres Oficinista, tu horario es hasta las 00:00.";
} 
else if (edad >= 36 && edad <= 45) {
  mensaje.innerHTML = "Bienvenido " + nombre + ". Eres Adulto General, tu horario es hasta las 02:00.";
} 
else {
  mensaje.innerHTML = "Bienvenido " + nombre + ". Eres VIP, tienes acceso libre.";
}