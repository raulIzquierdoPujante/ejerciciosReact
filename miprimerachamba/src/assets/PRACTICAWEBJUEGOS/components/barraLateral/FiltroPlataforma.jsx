import { useState } from "react";
import plataforma from "../../data/mock-plataformas";

const FiltroPlataforma = (props) => {
    const [nuevaPlataforma, setnuevaPlataforma] = useState("Todas");

    function asignarPlataforma(event){
        props.manejarPlataforma(event.target.value);
        setnuevaPlataforma(event.target.value);
    }

    function muestraPlataformas(plataforma, index) {
        return (
            <option key={index} value={plataforma}>
                {plataforma}
            </option>
            );

        }

    return(
        <div>
            <select onChange={asignarPlataforma} value={nuevaPlataforma} size="3">
            {plataforma.map((plataforma, index) => muestraPlataformas(plataforma, index))}
            </select>
        </div>
    )


}

export default FiltroPlataforma;