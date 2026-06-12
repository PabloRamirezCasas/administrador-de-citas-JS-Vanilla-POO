import { formulario } from "../selectores.js";

export default class Notificacion {

    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;
        this.mostrar();
    }

    mostrar(){
        //Creamnos la alerta
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'w-full','p-3', 'my-5','uppercase', 'font-bold', 'text-sm', 'alert');

        //Evaluamos el tipo de alerta
        this.tipo === 'error'? divAlerta.classList.add('bg-red-500'): divAlerta.classList.add('bg-green-500');
        
        //Insertamos el texto a la alerta
        divAlerta.textContent = this.texto;

        //La insertamos en el HTML
        formulario.parentElement.insertBefore(divAlerta, formulario);

        //La borramos después de 2 segundos
        setTimeout( () => {
            divAlerta.remove();
        },2000)
    }
}