function guardarDatos() {
	localStorage.name = document.getElementById('name').value;
	localStorage.password = document.getElementById('password').value;
}
function recuperarDatos() {
	if ((localStorage.name != "") && 
		(localStorage.password != "")) {
			document.getElementById("datos").innerHTML = "Nombre: " + localStorage.name +
			"</br> Contraseña: " + localStorage.password;
	} else {
		document.getElementById("datos").innerHTML += "<p>No has introducido tu nombre y/o contraseña.</p>"
	}
}