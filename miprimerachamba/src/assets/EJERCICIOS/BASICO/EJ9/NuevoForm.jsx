import {useState} from 'react';

const NuevoForm = (props) => {
    //Objeto contacto con estado inicial
    const CONTACTOINICIAL = {id:0, //id que se asignará al nuevo contacto
                            nombre: "",
                             telefono: ""};

    //Identificadores campos formulario
    const NOMBRE = "nombre";
    const TELEFONO = "telefono";

    //Usamos hook useState para gestionar estado componente
    const [nuevoContacto, setNuevoContacto] = useState(CONTACTOINICIAL);

    //Función encargada de asignar a cada campo del "nuevoContacto" su valor a través del hook
    function asignarContacto(event) {
        switch(event.target.id) {
            case NOMBRE: setNuevoContacto({...nuevoContacto,
                                           nombre:event.target.value});
                         break;
            case TELEFONO: setNuevoContacto({...nuevoContacto,
                                              telefono:event.target.value});
                            break;
            default: break;
        }
    }

    //Función para manejar el formulario
    function manejarFormulario(event) {
        //Evitamos comportamiento por defecto del onSubmit del formulario
        event.preventDefault();

        //A través de la función que recibe el componente como props, devolvemos el nuevo contacto
        //al componente padre para que lo añada a la lista de contactos
        props.manejarNuevoContacto(nuevoContacto);

        //Reseteamos los campos del formulario al estado inicial
        setNuevoContacto(CONTACTOINICIAL);
    }

    return(
        <form id="formulario" onSubmit={manejarFormulario}>
            <h1>Nuevo contacto</h1>
            <label>Nombre</label>
            <input type="text" id={NOMBRE} onChange={asignarContacto} value={nuevoContacto.nombre} /><br /><br />
            <label>Telefono</label>
            <input type="text" id={TELEFONO} onChange={asignarContacto} value={nuevoContacto.telefono} /><br /><br />
            <button>Añadir contacto</button>
        </form>
    )

}   

export default NuevoForm;
