import React from "react";
import BotonTema from "./BotonTema"

const BarraHerramientas = () => {
    return(
        <div>
            <BotonTema etiqueta="Archivo"></BotonTema>
            <BotonTema etiqueta="Editar"></BotonTema>
            <BotonTema etiqueta="Terminal"></BotonTema>
        </div>
    )
}

export default BarraHerramientas;