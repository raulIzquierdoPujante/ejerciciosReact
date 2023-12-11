import React from "react";

function datosAutor(props){
    return(
        <span className="author">
            <span className="name" > {props.nombre} </span>
            <span className="handle" > {props.nick} </span>
            <span className="time" > {props.cuando} </span>
        </span>
    )
}

export default datosAutor;

