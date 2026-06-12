import { generarId } from "./funciones.js";

let editando = {
    value: false
}

//Objeto Global
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
  id: generarId(),
};

export {
    editando,
    citaObj
}