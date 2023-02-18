const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

// expresiones

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    numero: /^\d{7,14}$/ 
}

// --campos
const campos = {
    nombre: false,
    correo: false,
    numero: false
}


const validarFormulario = (e) => {
    switch(e.target.name) {        
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "numero":
            validarCampo(expresiones.numero, e.target, "numero");
        break;       
    }
}

// --iconos validar cambio
const validarCampo = (expresion, input, campo) =>{
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
        console.log("Funciona");
    }
}

//  presionar y validar el form
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const $terminos = document.getElementById("terminos");
        if(campos.nombre && campos.correo && campos.numero && $terminos.checked) {
            // formulario.reset();
    
            document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        
            setTimeout(() => {
                document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
                document.getElementById("formulario__grupo-terminos").style.display = "none";
                
            }, 3000);
            
            document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
                icono.classList.remove("formulario__grupo--correcto");
            });
            
            setTimeout(() => {
                location.reload();
            }, 3100);
    
        } else {
            document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
        }
    });
});