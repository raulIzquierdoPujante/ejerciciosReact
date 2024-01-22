import React, { useState } from "react";

const Contador = (props) =>{

const [contador, setContador] = useState(+props.contador) //esto se asigna una sola vez

const [parImpar, setParImpar] = useState("") //esto se asigna una sola vez

const [clicks, setClicks] = useState([]);



    function incrementarContador(){
        setContador(contador+1);
        setClicks(clicks.concat("i"));
    }


    function reiniciarContador(){
        setContador(+props.contador)
        setParImpar("par");
        setClicks(clicks.concat("r"));
    }

    function tipoNumero(){
        if(contador%2===0){
            setParImpar("impar")
        }
        else if(contador%2!=0){
            setParImpar("par");
        }
    }

    function filtrarI(letra) {
        return letra === "i";
      };

    function filtrarR(letra) {
        return letra === "r";
      };  

    const handleIncrementar = () => {
        tipoNumero();
        incrementarContador();
        incrementarNumClicks();
        incrementarNumClicksLeft();
      };

      const handleReset = () => {
        tipoNumero();
        reiniciarContador();
        incrementarNumClicks();
        incrementarNumClicksRight();
      };

    return (
        <div>
            <img src="data:image/jpeg;base64,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" alt="" />
            <h1>{contador}</h1>
            <button onClick={handleIncrementar}>Incrementar contador</button>
            <button onClick={handleReset}>Reiniciar contador</button>
            <h3>{parImpar}</h3>
            <h4>{clicks}</h4>
            <h5>{clicks.length}</h5>
            <h3>{(clicks.filter(filtrarI)).length} Clicks izquierda  Clicks derecha {(clicks.filter(filtrarR)).length}</h3>
        </div>
    )
}
export default Contador;