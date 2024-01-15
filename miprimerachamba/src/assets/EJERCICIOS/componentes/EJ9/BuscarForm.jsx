import { useState } from "react";

const BuscarForm = (props) => {

   
    

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevaBusqueda, setnuevaBusqueda] = useState("");

    function asignarContacto(event){

        setnuevaBusqueda(event.target.value);
    }

    function devolverBusqueda(){

        // A través de la función que recibe el componente como props, devolvemos el nuevo contacto
        // al componente padre para que lo añada a la agenda
        props.manejarBusqueda(nuevaBusqueda);
    }

    return (
        <div>
            <input type="text" onChange={asignarContacto} onKeyUp={devolverBusqueda} value={nuevaBusqueda}></input><br></br>
        </div>
    )


}

export default BuscarForm;