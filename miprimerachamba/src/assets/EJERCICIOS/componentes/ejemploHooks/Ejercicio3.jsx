import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState({ clickRed: 0, clickYellow: 0, clickGreen:0 });

   // Función encargada de incrementar el contador rojo
   function incrementarRojo() {
    setContador({ ...contador, clickRed: contador.clickRed + 1 });
  }

  // Función encargada de incrementar el contador amarillo
  function incrementarAmarillo() {
    setContador({ ...contador, clickYellow: contador.clickYellow + 1 });
  }

  // Función encargada de incrementar el contador verde
  function incrementarVerde() {
    setContador({ ...contador, clickGreen: contador.clickGreen + 1 });
  }

  function calculateSum(){
    return contador.clickRed + contador.clickGreen + contador.clickYellow;
  }


  function calculateRed(){
    return contador.clickRed / (contador.clickRed + contador.clickGreen + contador.clickYellow)*100;
  }
  function calculateGreen(){
    return contador.clickGreen / (contador.clickRed + contador.clickGreen + contador.clickYellow)*100;
  }
  function calculateYellow(){
    return contador.clickYellow / (contador.clickRed + contador.clickGreen + contador.clickYellow)*100;
  }


  return (
    <div>
      <button onClick={incrementarRojo}>rojo</button>
      <button onClick={incrementarAmarillo}>amarillo</button>
      <button onClick={incrementarVerde}>verde</button>
      <br/>
      <br />
      <br />
      Pulsaciones rojo: {contador.clickRed}
      <br />
      Pulsaciones amarillo: {contador.clickYellow}
      <br />
      Pulsaciones verde: {contador.clickGreen}
      <br />
      Total pulsaciones: {calculateSum()}
      <br />
      % Rojo: {calculateRed()}%
      <br />
      % Verde: {calculateGreen()}%
      <br />
      % Amarillo: {calculateYellow()}%
    </div>
  );
};

export default Contador;
