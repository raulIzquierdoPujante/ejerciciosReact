import React, { useState, useEffect } from 'react';

const Contador = (props) => {

    const [valorContador,setContador] =useState(+props.contador);

    //Incrementar contador con useState

    function incrementarContador(){
        setContador(valorContador=>valorContador+1);
    }

    function contador(){
        setInterval(incrementarContador,1000);
    }

    //Con [] solo se ejecuta una vez, esa es la "condicion"
    useEffect(contador,[]);

    return(
        <div>
            <p>El valor del contador es</p>
            <h1>{valorContador}</h1>
        </div>
    )

};

export default Contador;
