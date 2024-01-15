import { useState } from "react";

const CocheForm = (props) => {

    // Objeto coche en su estado inicial
    const COCHEINICIAL={modelo    : "",
                        matricula : "",
                        color     : "",
                        npuertas  : 0}
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    const MODELO    = "modelo";
    const MATRICULA = "matricula";
    const COLOR     = "color";
    const PUERTAS   = "puertas";

    // Usamos el hook useState para gestionar el estado del componente
    const [nuevoCoche, setNuevoCoche] = useState(COCHEINICIAL);

    // Función encargada de asignar a cada campo del "nuevoCoche" su valor a traves del hook
    function asignarCoche(event){

        switch(event.target.id) {

            // Si hemos modificado el modelo, actualizamos ese campo, el resto los dejamos como está
            case MODELO: setNuevoCoche({...nuevoCoche,
                                        modelo:event.target.value});
                         break;

            // Si hemos modificado la matrícula, actualizamos ese campo, el resto los dejamos como está
            case MATRICULA: setNuevoCoche({...nuevoCoche,
                                           matricula:event.target.value});
                            break;
            
            // Si hemos modificado el color, actualizamos ese campo, el resto los dejamos como está
            case COLOR: setNuevoCoche({...nuevoCoche,
                                        color:event.target.value});
                         break;

            // Si hemos modificado las puestas, actualizamos ese campo, el resto los dejamos como está
            case PUERTAS: setNuevoCoche({...nuevoCoche,
                                         npuertas:event.target.value});
                          break;
            default: break;
        }
    }

    // Función encargada de actualizar el hook de estado del componente y
    // devolver el coche creado al objeto padre
    function manejarFormulario(event) {

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos el nuevo coche
        // al componente padre para que lo añada a la lista de coches
        props.manejarAccion(nuevoCoche);

        // Reseteamos los campos del formulario al estado inicial
        setNuevoCoche(COCHEINICIAL);
    }
    return (
            <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nuevo vehículo</strong></p>
                <label>Modelo</label> 
                <input id={MODELO} type="text" onChange={asignarCoche} value={nuevoCoche.modelo}></input><br></br>
                <label>Matrícula</label>
                <input id={MATRICULA} type="text" onChange={asignarCoche} value={nuevoCoche.matricula}></input><br></br>
                <label>Color</label>
                <input id={COLOR} type="text" onChange={asignarCoche} value={nuevoCoche.color}></input><br></br>
                <label>Nº Puertas</label>
                <input id={PUERTAS} type="text" onChange={asignarCoche} value={nuevoCoche.npuertas}></input><br></br>
                <button>Añadir Coche</button>
            </form>
    )
}

export default CocheForm;