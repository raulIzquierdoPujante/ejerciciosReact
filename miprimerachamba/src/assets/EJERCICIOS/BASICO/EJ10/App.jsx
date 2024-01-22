/*FUNCIONAMIENTO
1.En TemaContext.jsx definimos el contexto y lo exportamos. Los elementos que se quieran beneficiar de este contexto estarán dentro del proveedor del contexto.
2.Creamos un componente BotonTema.jsx que importa el contexto y lo usa para definir los estilos del botón.
3.Creamos un componente BarraHerramientas.jsx que importa el componente BotonTema.jsx y lo usa para crear tres botones.
4.En App.jsx importamos el componente BarraHerramientas.jsx y lo usamos dentro del proveedor del contexto.
5.Creamos una función en App.jsx que se encarga de cambiar el tema con una ternaria y la pasamos como props a BarraHerramientas.jsx.
6.En SelectorTema.jsx creamos un componente que recibe como props el tema seleccionado y la función que se encarga de cambiar el tema.
7.En SelectorTema.jsx creamos un estado para guardar el tema seleccionado y una función que se encarga de cambiar el tema.
*/


import React from 'react';
import './App.css';
import BarraHeramientas from './assets/EJERCICIOS/componentes/EJ10/componentes/BarraHeramientas';
import TemaContext from './assets/EJERCICIOS/componentes/EJ10/contextos/TemaContext';
import temas from './assets/EJERCICIOS/componentes/EJ10/mock-temas';
import { useState } from 'react';
import SelectorTema from './assets/EJERCICIOS/componentes/EJ10/SelectorTema';

function App() {

    // Usamos este estado para que cuando cambiemos el tema se renderice de nuevo el componente
    const [temaElegido, setTemaElegido] = useState(temas.light);
  
    function manejarSeleccion(valor)  {
  
      // En función del valor seleccionado, actualizamos el tema elegido
      setTemaElegido(valor==="1"?temas.light:temas.dark);
  
    }
  
    return (
      <div>
        <SelectorTema tema={1} manejarSeleccion={manejarSeleccion} ></SelectorTema>
        {/*Definimos el proveedor del contexto.*/}
        <TemaContext.Provider value={temaElegido}>
          <BarraHeramientas></BarraHeramientas>
        </TemaContext.Provider>
      </div>
    );
  }
  
  export default App;
  