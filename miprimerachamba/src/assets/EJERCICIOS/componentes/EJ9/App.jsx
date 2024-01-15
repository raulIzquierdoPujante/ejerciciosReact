/*COMO FUNCIONA
El componente buscar tan solo recoge el valor del estado de la busqueda y lo manda
al padre, que tiene un componente idéntico con el valor del estado de la búsqueda,
que utiliza la función filtrar para mostrar los contactos que coincidan con el valor.
Finalmente al estado de la lista, se le hace un filter con la función filtrar, para
mostrar los contactos que coincidan con el valor de la búsqueda.
*/



import { useState } from 'react';
import './App.css';
import Contacto from './assets/EJERCICIOS/componentes/EJ9/Contacto';
import listinTelefonico from './assets/EJERCICIOS/componentes/EJ9/mock-telefonos';
import BuscarForm from './assets/EJERCICIOS/componentes/EJ9/BuscarForm';
import NuevoForm from './assets/EJERCICIOS/componentes/EJ9/NuevoForm';

function App() {
    //FUNCIONES DE LA LISTA
    //Estado lista de contactos original
    const [listaContactos, setListaContactos] = useState(listinTelefonico);

     // Estado para almacenar el criterio de búsqueda
    const [busqueda, setBusqueda] = useState("");


    //Mostrar contacto
    function mostrarContacto(contacto) {
        return <Contacto key={contacto.id} contacto={contacto}></Contacto>;
    }
    

function manejarNuevoContacto(nuevoContacto) {
    nuevoContacto.id = listaContactos.length + 1;
    setListaContactos([...listaContactos, nuevoContacto]);
}

        // Esta función se le envía al BusquedaForm como prop para que nos devuelva
        // el criterio de búsqueda
    function manejarBusqueda(busqueda) {
    console.log("valor componetne hijo ", busqueda);
    setBusqueda(busqueda);
  }

    // Función encargada de filtrar la nota en función del valor del estado
    function filtrar(entrada){

        // Si el filtro de búsqueda está en el nombre de la entrada devolvemos TRUE
        // en caso contrario FALSE
        if (entrada.nombre.indexOf(busqueda) !== -1) return true;
        else return false;
      }


    return(
        <div>
            <h1>Buscar</h1>
            <BuscarForm manejarBusqueda={manejarBusqueda}></BuscarForm>
            <NuevoForm manejarNuevoContacto={manejarNuevoContacto}></NuevoForm>
            <h1>Agenda</h1>
             <ul>
                {listaContactos.filter(filtrar).map(mostrarContacto)}
             </ul>
        </div>
       
    );


}
export default App;


