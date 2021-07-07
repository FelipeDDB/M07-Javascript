const formBusc = document.getElementById('formBuscadorId');
const formLog = document.getElementById('formLoginId');

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
	acumErrores = validarRegNombre(regNombre) + validarRegApellidos(regApellido) + validarRegTelefono(regTelefono) + validarRegProvincia(regProvincia) + validarRegUsr(regUsr) + validarRegPwd(regPwd) + confirmarRegPwd(regPwd,regPwdConf);

	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

function validarRegNombre(regNombre) {
	let error = 0;

    // textContent es similar a innerHTML
	if(regNombre.value == "") {
		regNombre.classList.add("is-invalid");
		document.getElementById("errorRegNombre").textContent = "El nombre es obligatorio";
		++error;
	} else {
		regNombre.classList.remove("is-invalid");
    }

	return error;

}

function validarRegApellidos(regApellido) {
	let error = 0;
	if(regApellido.value == "") {
		regApellido.classList.add("is-invalid");
		document.getElementById("errorRegApellido").textContent = "El apellido es obligatorio";
		++error;
	} else {
		regApellido.classList.remove("is-invalid");
    }

	return error;
}

function validarRegTelefono(regTelefono) {
	let error = 0;
	if(regTelefono.value == "") {
		regTelefono.classList.add("is-invalid");
		document.getElementById("errorRegTelefono").textContent = "El teléfono es obligatorio";
		++error;
	} else {
		regTelefono.classList.remove("is-invalid");
    }

	return error;	
}

function validarRegProvincia(regProvincia) {
	let error = 0;
	if(regProvincia.value == "") {
		regProvincia.classList.add("is-invalid");
		document.getElementById("errorRegProvincia").textContent = "La provincia es obligatoria";
		++error;
	} else {
		regProvincia.classList.remove("is-invalid");
    }

	return error;	
}

function validarRegUsr(regUsr) {
	let error = 0;
	if(regUsr.value == "") {
		regUsr.classList.add("is-invalid");
		document.getElementById("errorRegUsr").textContent = "El campo es obligatorio";
		++error;
    } else if(!validar_email(regUsr.value)){
		regUsr.classList.add("is-invalid");
		document.getElementById("errorRegUsr").textContent = "El email no cumple el formato";
		++error;
	} else {
		regUsr.classList.remove("is-invalid");
    }

	return error;
}

// Exercici NIVELL 2 - Validació camp contrasenya que tingui:
// Mínim una majúscula
// Mínim un número
// Mínim 8 caràcters
function validarRegPwd(regPwd) {
	let error = 0;
 	let regex = /[A-Z]+[0-9]/;

	if(regPwd.value.length < 8) {
		regPwd.classList.add("is-invalid");
		document.getElementById("errorRegPwd").textContent = "La contraseña ha de tener como mínimo 8 caracteres";
		++error;
	} else if (!(/[A-Z]/.test(regPwd.value))){
		// Regular expression para controlar que hay al menos una letra mayúscula
		regPwd.classList.add("is-invalid");
		document.getElementById("errorRegPwd").textContent = "La contraseña ha de contener al menos una Mayúscula";
		++error;
	} else if (!(/[0-9]/.test(regPwd.value))){
		// Regular expression para controlar que hay al menos un número
		regPwd.classList.add("is-invalid");
		document.getElementById("errorRegPwd").textContent = "La contraseña ha de contener al menos un número";
		++error;
	} else {
		regPwd.classList.remove("is-invalid");
    }


	return error;
}

function confirmarRegPwd(regPwd,regPwdConf) {
	let error = 0;
	if(regPwdConf.value == "") {
		regPwdConf.classList.add("is-invalid");
		document.getElementById("errorRegPwdConf").textContent = "Campo obligatorio";
		++error;
	} else if(regPwd.value != regPwdConf.value) {
		regPwdConf.classList.add("is-invalid");
		document.getElementById("errorRegPwdConf").textContent = "Los campos Contraseña no son iguales";
		++error;
	} else {
		regPwdConf.classList.remove("is-invalid");
    }


	return error;
}



function validacionLogin() {
	var acumErrores = 0;
	let usrLogin = document.forms["formLogin"]["usrLogin"];
	let usrPwd = document.forms["formLogin"]["pwdLogin"];

	formLog.classList.remove('is-invalid');
	acumErrores = validarUsr(usrLogin) + validarPwd(usrPwd);


	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

function validarUsr(usrLogin) {
	let error = 0;

	if(usrLogin.value == "") {
		usrLogin.classList.add("is-invalid");
		document.getElementById("errorUsrLogin").textContent = "El campo es obligatorio";
		++error;
    } else if(!validar_email(usrLogin.value)){
		usrLogin.classList.add("is-invalid");
		document.getElementById("errorUsrLogin").textContent = "El email no cumple el formato";
		++error;
	} else {
		usrLogin.classList.remove("is-invalid");
    }

	return error;
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

function validarPwd(usrPwd) {
	let error = 0;

	if(usrPwd.value == "") {
		usrPwd.classList.add("is-invalid");
		document.getElementById("errorPwdLogin").textContent = "La contraseña es obligatoria";
		++error;
	} else {
		usrPwd.classList.remove("is-invalid");
    }

	return error;
}

function validacionBuscador() {
	var acumErrores = 0;
	
	formBusc.classList.remove('is-invalid');
	
	// var inputBuscador = document.getElementById('inputBuscador');
	var inputBuscador = document.forms["formBuscador"]["inputBuscador"];

	if(inputBuscador.value == "") {
		inputBuscador.classList.add("is-invalid");
		document.getElementById("errorBuscador").textContent = "El campo es obligatorio";
		acumErrores ++;
    } else if(inputBuscador.value.length <= 3) {
		inputBuscador.classList.add("is-invalid");
		document.getElementById("errorBuscador").textContent = "El texto ha de tener más de 3 caracteres";
		acumErrores ++;
	} else {
		inputBuscador.classList.remove("is-invalid");
    }

	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}


