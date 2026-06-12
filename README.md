# 🐾 Administrador de Pacientes - Veterinaria (ES Modules)

## 📽️ Demo en Vivo
![Visualización del Proyecto](./img/pacientes-demo.gif)

> Una aplicación web interactiva diseñada para la gestión y control de citas en una clínica veterinaria, permitiendo el registro, edición y eliminación de pacientes en tiempo real con una arquitectura orientada a objetos.


**[🔗 Ver Demo en Vivo]( https://pabloramirezcasas.github.io/administrador-de-citas-JS-Vanilla-POO/)**

![Estado](https://img.shields.io/badge/Estado-Completado-green)

## 🚀 Funcionalidades Principales
- **Gestión CRUD Completa:** Registro, lectura, edición y eliminación de pacientes veterinarios en tiempo real desde una interfaz dinámica.
- **Arquitectura Modular (ESM):** División del proyecto en archivos especializados independientes, eliminando el acoplamiento global del código.
- **Validación con Estructuras Modernas:** Uso de `.some()` para el control de formularios y remoción proactiva de nodos duplicados en el DOM (`alerta?.remove()`).
- **Estado Compartido por Referencia:** Implementación de un objeto de estado dinámico (`editando.value`) para sincronizar el comportamiento del formulario entre múltiples módulos.
- **Sistema de Alertas Efímeras:** Instanciación automatizada de notificaciones basadas en clases con autodestrucción cronometrada a los 2 segundos.

## 🛠️ Conceptos Técnicos Aplicados
- **ECMAScript Modules (ES6):** Uso estricto de directivas `import`, `export` y `export default` para la carga selectiva de scripts desde el navegador.
- **POO Avanzada:** Encapsulamiento de lógica compleja mediante clases independientes (`AdminCitas` y `Notificacion`) con métodos de renderizado dinámico en el DOM.
- **Estrategia de Selectores Centralizada:** Modularización de elementos del DOM en un único punto de verdad (`selectores.js`) para facilitar el mantenimiento.
- **Inmutabilidad y Pasos de Memoria:** Copia superficial de seguridad mediante *spread operator* (`{...citaObj}`) para blindar los registros en el Heap de memoria.
- **Tailwind CSS:** Interfaz limpia y responsiva adaptada a dispositivos móviles con área de scroll asíncrono e independiente.

## 💡 Aprendizajes Clave
Este proyecto profundiza en la **Programación Orientada a Objetos (POO)** aplicada a la gestión de interfaces complejas. El mayor reto resuelto fue la sincronización entre el estado interno de la aplicación (el arreglo de citas) y su representación en el DOM. Comprender el paso de datos por referencia (utilizando el *spread operator* `{...citaObj}` al instanciar registros) resulta una base técnica fundamental e indispensable antes de realizar la transición hacia el ecosistema de **React** y sus flujos de estado unidireccionales.

## 🔧 Cómo ejecutar el proyecto
1. Clona el repositorio:
```bash
git clone https://github.com/PabloRamirezCasas/administrador-de-citas-JS-Vanilla-POO.git