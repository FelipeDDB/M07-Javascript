const formBusc = document.getElementById('formBuscadorId');
const formReg = document.getElementById('formRegistroId');
const formLog = document.getElementById('formLoginId');

const botonBusc = document.getElementById('botonBuscadorId');
const botonReg = document.getElementById('botonRegistroId');
const botonLog = document.getElementById('botonLoginId');

// Validación del furmulario de REGISTRO
function validacionRegistro() {
	var acumErrores = 0;
	let regNombre = document.forms["formRegistro"]["regNombre"];
	let regApellido = document.forms["formRegistro"]["regApellido"];
	let regTelefono = document.forms["formRegistro"]["regTelefono"];
	let regProvincia = document.forms["formRegistro"]["regProvincia"];
	let regUsr = document.forms["formRegistro"]["regUsr"];
	let regPwd = document.forms["formRegistro"]["regPwd"];
	let regPwdConf = document.forms["formRegistro"]["regPwdConf"];

	formLog.classList.remove('is-invalid');

	// En el registro comprobamos que la contraseña cumpla con el formato requerido
	// En el campo comprobación de la contraseña sólo comprobamos que coincida con el campo original. No comprobamos el formato.
	acumErrores = esObligatorio(regNombre) + esObligatorio(regApellido) + esObligatorio(regTelefono) + esObligatorio(regProvincia) + validarUsr(regUsr) + validarPwd(regPwd) + confirmarPwd(regPwd,regPwdConf);

	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

// Devuelve 0 si el campo está informado
// Devuelve 1 (error) si el campo está vacío
function esObligatorio(vTexto) {
	let error = 0;

	// textContent es similar a innerHTML
	if(vTexto.value == '') {
		vTexto.classList.add("is-invalid");
		vTexto.nextElementSibling.textContent = "Campo Obligatorio";
		++error;
	} else {
		vTexto.classList.remove("is-invalid");
	}

	return error;

}

// Validación de usuario/email
// Comprobamos que esté informado y que cumpla con el formato
function validarUsr(vUsr) {
	// Comprobamos que el campo esté informado
	let error = esObligatorio(vUsr);

	if(error == 0) {
		if(!validar_email(vUsr.value)){
			vUsr.classList.add("is-invalid");
			vUsr.nextElementSibling.textContent = "El email no cumple el formato";
			++error;
		} else {
			vUsr.classList.remove("is-invalid");
		}
	}

	return error;
}


// Exercici NIVELL 2 - Validació camp contrasenya que tingui:
// Mínim una majúscula
// Mínim un número
// Mínim 8 caràcters
// Comprobamos que esté informado con la función "esObligatorio"
function validarPwd(vPwd) {
	// let regex = /[A-Z]+[0-9]/;
	let error = esObligatorio(vPwd);

	if(error == 0) {
		if(vPwd.value.length < 8) {
			vPwd.classList.add("is-invalid");
			vPwd.nextElementSibling.textContent = "La contraseña ha de tener como mínimo 8 caracteres";
			++error;
		} else if (!(/[A-Z]/.test(vPwd.value))){
			// Regular expression para controlar que hay al menos una letra mayúscula
			vPwd.classList.add("is-invalid");
			vPwd.nextElementSibling.textContent = "La contraseña ha de contener al menos una Mayúscula";
			++error;
		} else if (!(/[0-9]/.test(vPwd.value))){
			// Regular expression para controlar que hay al menos un número
			vPwd.classList.add("is-invalid");
			vPwd.nextElementSibling.textContent = "La contraseña ha de contener al menos un número";
			++error;
		} else {
			vPwd.classList.remove("is-invalid");
		}
    }

	return error;
}

// En el confirmación de la contraseña sólo comprobamos que esté informado y que coincida con el campo original. No comprobamos el formato.
function confirmarPwd(vPwd,vPwdConf) {
	let error = esObligatorio(vPwdConf);

	if(error == 0) {
		if(vPwd.value != vPwdConf.value) {
			vPwdConf.classList.add("is-invalid");
			vPwdConf.nextElementSibling.textContent = "Los campos Contraseña no son iguales";
			++error;
		} else {
			vPwdConf.classList.remove("is-invalid");
		}
	}
	return error;
}

// Validación del furmulario de LOGIN
// En el login no comprobamos formato de la contraseña. Sólo comprobaríamos que fuese correcta en BBDD
function validacionLogin() {
	var acumErrores = 0;
	let usrLogin = document.forms["formLogin"]["usrLogin"];
	let usrPwd = document.forms["formLogin"]["pwdLogin"];

	formLog.classList.remove('is-invalid');
	acumErrores = validarUsr(usrLogin) + esObligatorio(usrPwd);

	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}


// Validación del email con una expresión regular
// El email ha de estar compuesto por:
// - Caracteres alfanuméricos permitiendo además . y -
// - Una @ obligatoria
// - Caracteres alfanuméricos
// - Un . obligatorio
// - Caracteres alfanuméricos con longitud entre 2 y 4
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(email)) {
		// Si el email pasado cumple con la expresión regular devuelve TRUE
		return true;
	} else {
		return false;
	}
}

// Validación del furmulario BUSCADOR
function validacionBuscador() {
	let error = 0;
	let inputBuscador = document.forms["formBuscador"]["inputBuscador"];

	formBusc.classList.remove('is-invalid');

	if(esObligatorio(inputBuscador) != 0) {
        ++error;
	} else if(inputBuscador.value.length <= 3) {
		inputBuscador.classList.add("is-invalid");
		inputBuscador.nextElementSibling.textContent = "El texto ha de tener más de 3 caracteres";
        ++error;
	} else {
		inputBuscador.classList.remove("is-invalid");
	}

	if (error > 0){
        return false;
    }else{		
		return true;
	}
}


botonBusc.addEventListener('click', validarBusc, false);
botonReg.addEventListener('click', validarReg, false);
botonLog.addEventListener('click', validarLog, false);


function validarBusc(e) {
	if (validacionBuscador()){
		// Simulamos el resultado de la búsqueda abriendo un nuevo modal y sin refrescar la página.
		$('#modal-buscador').modal('hide');
		$('#modal-resultBuscador').modal('show');
		formBusc.reset();
		e.preventDefault();
		// return true;
	} else {
		e.preventDefault();
		return false; //Salimos de la función devolviendo false
	}
}

function validarReg(e) {
	if (validacionRegistro()){
		// Simulamos el resultado del registro abriendo un nuevo modal y sin refrescar la página.
		$('#modal-registro').modal('hide');
		$('#modal-resultRegistro').modal('show');
		formReg.reset();
		e.preventDefault();
		// return true;
	} else {
		e.preventDefault();
		return false; //Salimos de la función devolviendo false
	}
}

function validarLog(e) {

	if (validacionLogin()){
		// Simulamos el resultado del registro abriendo un nuevo modal y sin refrescar la página.
		$('#modal-login').modal('hide');
		$('#modal-resultLogin').modal('show');
		formLog.reset();
		e.preventDefault();
		// return true;
	} else {
		e.preventDefault();
		return false; //Salimos de la función devolviendo false
	}
}


botonBusc.addEventListener('click', validarBusc, false);
botonReg.addEventListener('click', validarReg, false);
botonLog.addEventListener('click', validarLog, false);


formLog.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid'); {
	 	// document.getElementById("demo").innerHTML = event.relatedTarget.id;
		validacionLogin();
	}
}, true);

formReg.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    validacionRegistro();
}, true);

formBusc.addEventListener('blur', validacionBuscador, true);

