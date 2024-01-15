import {useState} from 'react';

const NotaForm = (props) => {
    //Ojeto nota en su estado inicial, con los campos vacíos
    const NOTAINICIAL={
        contenido:"",
        importante:false,
        fecha:""
    }

    //Identificadores de los campos del formulario, se los asignaremos al atributo id
    const CONTENIDO="contenido";
    const IMPORTANTE="importante";
    const FECHA="fecha";

    //Usamos el hook useState para gestionar el estado del objeto nota que se creará
    const [nuevaNota, setNuevaNota]=useState(NOTAINICIAL);

    //Función encargada de asignar a cada campo de la "nuevaNota" su valor a través del hook
    function asignarParametrosNota(event){
        switch(event.target.id){
            case CONTENIDO: setNuevaNota({...nuevaNota,contenido:event.target.value});
            break;
            case IMPORTANTE: setNuevaNota({...nuevaNota,importante:event.target.value==="importante"});
            break;
            case FECHA: setNuevaNota({...nuevaNota,fecha:event.target.value});
            break;
            default: break;
        }
    }

    //Función encargada de actualizar el hook de estado del componente y devolver la nota creada al objeto padre
    function manejarFormulario(event){
        //Evitamos el comportamiento por defecto del onSubmit del formulario
        event.preventDefault();

        //A través de la función que recibe el componente como props, devolvemos la nueva nota al componente padre para que lo añada a la lista de notas
        props.manejarNuevaNota(nuevaNota);

        //Reseteamos los campos del formulario al estado inicial
        setNuevaNota(NOTAINICIAL);
    }
    //Formulario para crear una nueva nota
    return(
        <form id="formulario" onSubmit={manejarFormulario}>
            <p><strong>Nueva nota</strong></p>
            <label>Contenido</label>
            <input type="text" id={CONTENIDO} value={nuevaNota.contenido} onChange={asignarParametrosNota}></input><br /><br />
            <label>Importante</label>
            <select id={IMPORTANTE} value={nuevaNota.importante ? "importante" : "no-importante"} onChange={asignarParametrosNota}>
                <option value="importante">Importante</option>
                <option value="no-importante">No importante</option>
            </select><br /><br />
            <label>Fecha</label>
            <input type="date" id={FECHA} value={nuevaNota.fecha} onChange={asignarParametrosNota}></input><br /><br />
            <button>Añadir nota</button>
        </form>
    )
    
}
export default NotaForm;   