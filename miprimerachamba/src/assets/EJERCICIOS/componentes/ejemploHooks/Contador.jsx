import React, { useState } from "react";

const Contador = (props) =>{

const [contador, setContador] = useState(+props.contador) //esto se asigna una sola vez

    function incrementarContador(){
        setContador(contador+1)
    }

    function reiniciarContador(){
        setContador(+props.contador)
    }

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={resetearContador}>Reiniciar contador</button>
        </div>
    )
}
export default Contador;