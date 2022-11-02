window.addEventListener('load', () => {
    // console.log('aca estoy');

    const form = document.querySelector('#register');

    validateName = (nombre) => {
        let errorMsg = '';
        if (nombre.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un nombre</p>`;
        };
        return errorMsg;
    };

    validateSurname = (apellido) => {
        let errorMsg = '';
        if (apellido.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un apellido</p>`;
        };
        return errorMsg;
    };

    validateDireccion = (direccion) => {
        let errorMsg = '';
        if (direccion.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    validateCiudad = (ciudad) => {
        let errorMsg = '';
        if (ciudad.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    validateEstado = (estado_provincia) => {
        let errorMsg = '';
        if (estado_provincia.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    validatePais = (pais) => {
        let errorMsg = '';
        if (pais.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    validateEmail = (email) => {
        let errorMsg = '';
        let regEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (email.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un correo electrónico</p>`;
        } else if (!regEX.test(email)) {
            errorMsg = `<p class="error">Debes escribir un formato de correo válido</p>`;
        };
        return errorMsg;
    };

    validateTelefono = (telefono) => {
        let errorMsg = ''
        let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        if (!regEx.test(telefono)) {
            errorMsg = `<p class="error">Completar</p>`;
        } else if (telefono.length < 12) {
            errorMsg = `<p class="error">Superaste el límite de caracteres</p>`;
        };
        return errorMsg;
    };

    validateCodigoPostal = (codigo_postal) => {
        let errorMsg = ''
        let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        if (!regEx.test(codigo_postal), codigo_postal.length < 5) {
            errorMsg = `<p class="error">Completar</p>`;
        }
        return errorMsg;
    };

    validatePassword = (password) => {
        let errorMsg = '';
        if (password.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir una contraseña</p>`;
        };
        return errorMsg;
    };

    validateImg = (profile_image) => {
        let acceptedExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
        let cont = 0;
        let errorMsg = '';
        acceptedExtensions.forEach(extension => {
            profile_image.includes(extension) ? cont += 1 : null
        });
        cont == 0 ? errorMsg = `<p class="error">Archivo no valido</p>` : null;
        return errorMsg;
    };

    form.addEventListener('submit', (event) => {
        let errors = 0;
        // INPUTS
        const nombre = document.querySelector('#nombre');
        const apellido = document.querySelector('#apellido');
        const direccion = document.querySelector('#direccion');
        const ciudad = document.querySelector('#ciudad');
        const estado = document.querySelector('#estado');
        const pais = document.querySelector('#pais');
        const codigoPostal = document.querySelector('#codigo_postal');
        const profileImage = document.querySelector('#profile_image');
        const email = document.querySelector('#email');
        const telefono = document.querySelector('#telefono');
        const password = document.querySelector('#password');

        // DIV's
        const nombreErrors = document.querySelector('.nombre-errors');
        const apellidoErrors = document.querySelector('.apellido-errors');
        const direccionErrors = document.querySelector('.direccion-errors');
        const ciudadErrors = document.querySelector('.ciudad-errors');
        const estadoErrors = document.querySelector('.estado-errors');
        const paisErrors = document.querySelector('.pais-errors');
        const codigo_postalErrors = document.querySelector('.codigo-errors');
        const telefonoErrors = document.querySelector('.telefono-errors');
        const emailErrors = document.querySelector('.email-errors');
        const passwordErrors = document.querySelector('.password-errors');
        const profileImageErrors = document.querySelector('.image-errors');

        // NOMBRE VALIDATION
        let nombreValidation = validateNombre(nombre.value);
        if (nombreValidation) {
            nombreErrors.innerHTML = nombreValidation
            nombre.classList.add('nombre-errors')
        } else {
            nombreErrors.innerHTML = '';
            avatar.classList.remove('nombre-errors')
        }

        // APELLIDO VALIDATION
        let apellidoValidation = validateApellido(apellido.value);
        if (apellidoValidation) {
            apellidoErrors.innerHTML = apellidoValidation
            apellido.classList.add('apellido-errors')
        } else {
            apellidoErrors.innerHTML = '';
            avatar.classList.remove('apellido-errors')
        }

        // DIRECCION VALIDATION
        let direccionValidation = validateDireccion(direccion.value);
        if (direccionValidation) {
            direccionErrors.innerHTML = direccionValidation
            direccion.classList.add('direccion-errors')
        } else {
            direccionErrors.innerHTML = '';
            avatar.classList.remove('direccion-errors')
        }

        // CIUDAD VALIDATION
        let ciudadValidation = validateCiudad(ciudad.value);
        if (ciudadValidation) {
            ciudadErrors.innerHTML = ciudadValidation
            ciudad.classList.add('ciudad-errors')
        } else {
            ciudadErrors.innerHTML = '';
            avatar.classList.remove('ciudad-errors')
        }

        // ESTADO VALIDATION
        let estadoValidation = validateEstado(estado.value);
        if (estadoValidation) {
            estadoErrors.innerHTML = estadoValidation
            estado.classList.add('estado-errors')
        } else {
            estadoErrors.innerHTML = '';
            avatar.classList.remove('estado-errors')
        }

        // PAIS VALIDATION
        let paisValidation = validatePais(pais.value);
        if (paisValidation) {
            paisErrors.innerHTML = paisValidation
            pais.classList.add('pais-errors')
        } else {
            paisErrors.innerHTML = '';
            avatar.classList.remove('pais-errors')
        }

        // CODIGO POSTAL VALIDATION
        let codigoPostalValidation = validateCodigoPostal(codigoPostal.value);
        if (codigoPostalValidation) {
            codigo_postalErrors.innerHTML = codigoPostalValidation
            codigoPostal.classList.add('codigo-errors')
        } else {
            codigo_postalErrors.innerHTML = '';
            avatar.classList.remove('codigo-errors')
        }

        // TELEFONO VALIDATION
        let telefonoValidation = validateTelefono(telefono.value);
        if (telefonoValidation) {
            telefonoErrors.innerHTML = telefonoValidation
            telefono.classList.add('telefono-errors')
        } else {
            telefonoErrors.innerHTML = '';
            telefono.classList.remove('telefono-errors')
        }

        // EMAIL VALIDATION
        let emailValidation = validateEmail(email.value);
        if (emailValidation) {
            emailErrors.innerHTML = emailValidation
            email.classList.add('email-errors')
        } else {
            emailErrors.innerHTML = '';
            email.classList.remove('email-errors')
        }

        // PASSWORD VALIDATION
        let passwordValidation = validatePassword(password.value);
        if (passwordValidation) {
            passwordErrors.innerHTML = passwordValidation
            password.classList.add('password-errors')
        } else {
            passwordErrors.innerHTML = '';
            password.classList.remove('password-errors')
        }

        // PERFIL IMAGEN VALIDATION
        let profileImageValidation = validateImg(profileImage.value);
        if (profileImageValidation) {
            profileImageErrors.innerHTML = profileImageValidation
            profileImage.classList.add('invalid')
        } else {
            profileImageErrors.innerHTML = '';
            profileImage.classList.remove('invalid')
        }
        errors != 0 ? event.preventDefault() : null;
    })
});