import React from "react";

function MiprimerComponente(props){
    return(
        <div>
            <h1>Mi primer componente</h1>
            <p>Nombre {props.nombre}</p>
            <p>Apellido {props.apellido}</p>
            <p>Edad {props.edad}</p>
        </div>
    )
}

export default MiprimerComponente;