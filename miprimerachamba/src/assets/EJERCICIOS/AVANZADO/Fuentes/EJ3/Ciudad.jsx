import React, {useContext} from "react";
import rm from "./mock-rm.js";

const Ciudad = (props) => {


    return (
        <div>
            <h1>{props.params.ciudad.toUpperCase()}</h1>
            <p><strong>Poblacion: {rm[props.params.ciudad].poblacion}</strong></p>
            <p><strong>Superficie: {rm[props.params.ciudad].superficie}</strong></p>
            <p><strong>Elevacion: {rm[props.params.ciudad].elevacion}</strong></p>
            <img src={rm[props.params.ciudad].bandera} alt="" />
        </div>
    );
}

  export default Ciudad;
  