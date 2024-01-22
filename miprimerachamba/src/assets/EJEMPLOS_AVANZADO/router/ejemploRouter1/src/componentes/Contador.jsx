import React, { useState } from 'react'

const Contador = () => {

    
    const  [contador, setContador] = useState({left :  0,
                                               right : 0});

    // Función encargada de incrementar el contador izquierdo
    function incrementarIzquierdo() {

        setContador ({...contador,
                      left: contador.left +1});
    }

    // Función encargada de incrementar el contador derecho
    function incrementarDerecho() {

        setContador ({...contador,
                      right: contador.right +1});
    }
    
    return (
        <div>
            {contador.left}
            <button onClick={incrementarIzquierdo}>left</button>
            <button onClick={incrementarDerecho}>rigth</button>
            {contador.right}
        </div>
    )
}
export default Contador;