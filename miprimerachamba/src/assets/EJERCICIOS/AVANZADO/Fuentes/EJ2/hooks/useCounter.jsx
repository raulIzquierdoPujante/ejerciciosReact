import { useState } from "react";

const useCounter = (props) => {
const [valorContador, setContador] = useState(+props.contador);

// Función encargada de incrementar el contador haciendo
// uso del hook
function incrementarContador() {
  setContador(valorContador + 1);
}
function decrementarContador() {
    setContador(valorContador - 1);
}
function resetearContador() {
    setContador(+props.contador);
}

return {valorContador, incrementarContador, decrementarContador, resetearContador};
}

export default useCounter;