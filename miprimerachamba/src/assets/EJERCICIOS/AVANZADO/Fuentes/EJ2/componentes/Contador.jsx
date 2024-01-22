import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
const Contador = (props) => {

const contador = useCounter(props);
    return (
      <div>
        <p>El valor del contador es</p>
        <h1>{contador.valorContador}</h1>
        <button onClick={contador.incrementarContador}> Incrementa contador </button>
        <button onClick={contador.decrementarContador}> Decrementa contador </button>
        <button onClick={contador.resetearContador}> Resetear contador </button>
      </div>
    )
}

export default Contador;

