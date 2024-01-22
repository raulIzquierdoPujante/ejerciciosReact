import './App.css';
import Coche from './componentes/Coche';
import CocheForm from './componentes/CocheForm';
import losCoches from './mock-coches';
import { useState } from "react";

function App() {

  const [listaCoches, setListaCoches] = useState(losCoches);

  function muestraCoches(coche) {  

    return <Coche  key={coche.matricula} coche={coche}></Coche>;
    
  }

  // Esta función se envía al componente hijo como prop
  function manejarAccion(coche) {

    console.log("valor componetne hijo ", coche, " lo añadimos a la lista");

    // Añadimos el coche a la lista de coches
    setListaCoches([...listaCoches, coche]);

}
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Matricula</th>
            <th>Color</th>
            <th>Puertas</th>
          </tr>
        </thead>
        <tbody >
        {listaCoches.map(muestraCoches)}
        </tbody>
      </table>
      {/*Enviamos al componente hijo la función manejarAccion como prop*/}
      <CocheForm manejarAccion={manejarAccion}></CocheForm>
    </div>
    );
}
export default App;





