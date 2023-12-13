import React, { useState } from "react";

const Contador = (props) =>{

const [contador, setContador] = useState(+props.contador) //esto se asigna una sola vez

const [parImpar, setParImpar] = useState("") //esto se asigna una sola vez


    function incrementarContador(){
        setContador(contador+1);
    }

    function reiniciarContador(){
        setContador(+props.contador)
        setParImpar("par");
    }

    function tipoNumero(){
        if(contador%2===0){
            setParImpar("impar")
        }
        else if(contador%2!=0){
            setParImpar("par");
        }
    }


    const handleIncrementar = () => {
        tipoNumero();
        incrementarContador();
      };

      const handleReset = () => {
        tipoNumero();
        reiniciarContador();
      };

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={handleIncrementar}>Incrementar contador</button>
            <button onClick={handleReset}>Reiniciar contador</button>
            <h3>{parImpar}</h3>
        </div>
    )
}
export default Contador;