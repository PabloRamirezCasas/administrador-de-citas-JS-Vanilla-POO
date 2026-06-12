import Notificacion from "./clases/Notificacion.js";
import AdminCitas from "./clases/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import {formulario, formularioInput,pacienteInput,propietarioInput,emailInput,fechaInput,sintomasInput} from "./selectores.js"



export function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

const nuevaCita = new AdminCitas();
export function submitCita(e) {
  e.preventDefault();

 
  const alerta = document.querySelector('.alert');

  //Usamos esta nueva sintaxis para evitar que aparezcan multiples alertas
  alerta?.remove();

  //Usamos .some para evaluar si hay algun campo vacio en al array de valores del objeto citaObj
  if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
    //Instanciamos el clase y le pasamos el objeto como argumento
    new Notificacion ({
        texto : 'Todos los campos son obligatorios',
        tipo : 'error'
    })
    return;
  }
 

    if(editando.value){
       nuevaCita.editar({...citaObj});
       new Notificacion ({
        texto: 'Guardado correctamente',
        tipo: 'exito'
       })
    }else{

        nuevaCita.agregar({...citaObj});

        new Notificacion ({
            texto : 'Paciente registrado',
            tipo : 'exito'
        })
    }
  
    formulario.reset();
    reiniciarObjeto();
    formularioInput.value = 'Registrar Pacientes';
    editando.value = false;

}

export function reiniciarObjeto() {
    citaObj.paciente = "";
    citaObj.propietario = "";
    citaObj.email = "";
    citaObj.fecha = "";
    citaObj.sintomas = "";
    citaObj.id = generarId();
}

export function cargarEdicion(cita){
    Object.assign(citaObj, cita);
    
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;

    formularioInput.value = 'Guardar Cambios';
}
export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}