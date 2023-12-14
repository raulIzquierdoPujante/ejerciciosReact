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


  return (
    <div>
      <button onClick={incrementarRojo}>rojo</button>
      <button onClick={incrementarAmarillo}>amarillo</button>
      <button onClick={incrementarVerde}>verde</button>
      
      Contador de rojo wey {contador.clickRed}
    </div>
  );
};

export default Contador;
