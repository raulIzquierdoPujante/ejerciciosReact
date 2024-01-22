import { useState } from "react";
import genero from "../../data/mock-genero";

const FiltroGenero = (props) => {
    const [nuevoGenero, setnuevoGenero] = useState("Todos");

    function asignarGenero(event){
        props.manejarGenero(event.target.value);
        setnuevoGenero(event.target.value);
    }

    function muestraGeneros(genero, index) {
        return (
          <option key={index} value={genero}>
            {genero}
          </option>
        );
      }

    return(
        <div>
            <select onChange={asignarGenero} value={nuevoGenero} size="14">
            {genero.map((genero, index) => muestraGeneros(genero, index))}
            </select>
        </div>
    )


}

export default FiltroGenero;