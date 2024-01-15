import { useState } from 'react';
import './App.css';
import Nota from './componentes/Nota'
import notas from './mock-notas';
import NotaForm from './componentes/NotaForm';

function App() {

  // Creamos un estado asociado al botón para ver si mostramos todas las notas
  // o solo las importantes. Inicialmente mostraremos todas las notas (true)
  const [mostrarTodos, setmostrarTodos] = useState(true);  
  
  // Función encargada de cambiar el estado del hook creado para mostrar o no mostrar
  // todas las notas. Hacemos un toogle del booleano, si es true lo ponemos a false y
  // viceversa.
  function manejarMostarNotas() {

    setmostrarTodos(!mostrarTodos);
    
  }

  // Función encargada de llamar al componente Nota con la nota
  // que recibe como parámetro implícito de la función map
  function muestraNotas(nota) {  

    return <Nota  key={nota.id} nota={nota}></Nota>;
    
  }

  // Función encargada de filtrar la nota en función del valor del estado
  //Si es true mostramos todas las notas, si es false solo las importantes
  function filtrarNotas(nota) {

    if (mostrarTodos) return true;
    else return nota.importante===true;

  }

  //MANEJAR NUEVA NOTA AÑADIDA

  const  [listaNotas, setListaNotas] = useState(notas);

  // Función encargada de añadir una nueva nota a la lista de notas, que se manda al componente hijo
  
  function manejarNuevaNota(nuevaNota) {

    // Añadimos la nueva nota a la lista de notas
    setListaNotas([...listaNotas, nuevaNota]);
    
  }

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={manejarMostarNotas}>{mostrarTodos ? "Mostar importantes" : "MostrarTodos"}</button>
      <ul>
      {notas.filter(filtrarNotas)
            .map(muestraNotas)}
      </ul>
      {/*Enviamos al componente hijo la función manejarAccion como prop*/}
     <NotaForm manejarNuevaNota={manejarNuevaNota}></NotaForm>
    </div>
    );
}
export default App;





