import { generarId, datosCita, submitCita } from "../funciones.js";
import {pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario,contenedorCitas,formularioInput} from "../selectores.js"

//Listeners

pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);
formulario.addEventListener("submit", submitCita);

