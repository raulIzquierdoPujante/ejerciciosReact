//Será un formulario de select con 2 opciones, una para ordenar de A-Z y otra para ordenar de Z-A
//Segun la opción seleccionada, se llamará a la función de ordenación que se le pasa como parámetro

import { useState } from "react";
const OrdenarAZ = (props) => {

    const [nuevaOrdenacion, setnuevaOrdenacion] = useState("A-Z");

   

    function asignarOrden(event){
        setnuevaOrdenacion(event.target.value);
        props.manejarOrden(event.target.value);
    }
    

    return(
        <div>
            <select onChange={asignarOrden} value={nuevaOrdenacion}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )



}
export default OrdenarAZ;