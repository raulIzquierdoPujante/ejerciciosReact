//COMPONENTE PRINCIPAL DE LOS JUEGOS 
//Llevará la lógica para llamar a los servicios y mostrar los juegos
/*This container component will be responsible for fetching data from the freeToGameAPI using the fetch function.
 It will maintain the state of the game list and handle the logic for ordering and filtering based on user interactions. 
This component will render the Sidebar components (OrderButton, GenreFilter, PlatformFilter) and a list of GameCard components. */

import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import { getAllGames } from '../../services/getAllGames';
import OrdenarAZ from '../barraLateral/OrdernarAZ';
import FiltroGenero from '../barraLateral/FiltroGenero';
import FiltroPlataforma from '../barraLateral/FiltroPlataforma';
import AjaxLoader from '../AjaxLoader';
import ScrollUpButton from '../ScrollUpButton';


function Datos() {

    //ESTADOS

  // Estado con la lista de post que recuperamos de la REST API
  const [listaJuegos, setListaJuegos] = useState([]);

  //Estado con booleano para determinar si carga o ya cargó
  const [cargando, setCargando] = useState(false);

  //Estado para almacenar el criterio de ordenación
  const [orden, setOrden] = useState("A-Z");

  //Estado para almacenar el criterio de filtrado por género
  const [genero, setGenero] = useState("Todos");

  //Estado para almacenar el criterio de filtrado por plataforma
  const [plataforma, setPlataforma] = useState("Todas");



  //Antes de solicitar los datos, ponemos el estado de cargando a true
  function obtenerJuegos(){
      setCargando(true);
      // Usamos el servicio de obtención de posts que hemos creado
      getAllGames().then(juegos => {

          //Cargamos los post en el estado del componente
          //y ponemos el estado de cargando a false
          setListaJuegos(juegos);
          setCargando(false);
        });                    
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerJuegos, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraJuegos(juego) {  

    return <GameCard  key={juego.id} juego={juego}></GameCard>;
  }

  //FUNCIONES DE ORDEN Y FILTRADO QUE SE PASAN COMO PROPS A LOS COMPONENTES DE LA BARRA LATERAL

    //Función para ordenar los juegos que recibe como parámetro OrdenarAZ
    function manejarOrden(orden) {
        setOrden(orden);
    }

    //Función para filtrar los juegos que recibe como parámetro FiltroGenero
    function manejarGenero(genero) {
        setGenero(genero);
    }

    //Función para filtrar los juegos que recibe como parámetro FiltroPlataforma
    function manejarPlataforma(plataforma) {  
        setPlataforma(plataforma);
    }


//FUNCIONES DE ORDEN Y FILTRADO QUE USAN LOS DATOS DE LOS ESTADOS PARA ORDENAR Y FILTRAR LOS JUEGOS
//Los datos de los estados son modificados por las funciones que se pasan como props a los componentes de la barra lateral

    //Función para ordenar los juegos
    function ordenar(juego1, juego2) {
        if (orden === "A-Z") return juego1.title.localeCompare(juego2.title);
        else return juego2.title.localeCompare(juego1.title);
    }
    
    //Función para filtrar los juegos por género
    function filtrarGenero(juego) {
        if (genero === "Todos") return true;
        else return juego.genre === genero;
    }

    //Función para filtrar los juegos por plataforma
    function filtrarPlataforma(juego) { 
        if (plataforma === "Todas") return true;
        else return juego.platform === plataforma;
    }
  
  return (
        <div className="container-general">
          <div className="row">
            {/* Barra Lateral (2 columns out of 12) */}
            <div className="col-md-2 bg-dark text-white p-3 mt-20 vh-100 fixed-top" style={{ marginTop: "100px", maxWidth: "250px" }}>
              <div id="divOrdenacion">
                <h1>Ordenación</h1>
                <br></br>
                <h4>Título</h4>
                <OrdenarAZ manejarOrden={manejarOrden} />
                <br />
              </div>
              <div id="divFiltros">
                <h2>Filtros</h2>
                <div id="divGenero">
                    <br />
                  <h4>Género</h4>
                  <FiltroGenero manejarGenero={manejarGenero} />
                </div>
                <div id="divPlataforma">
                    <br />
                  <h4>Plataforma</h4>
                  <FiltroPlataforma manejarPlataforma={manejarPlataforma} />
                </div>
              </div>
            </div>
          
    
      <div id="divJuegos" className="ListaJuegos " style={{ marginLeft: "250px" ,marginTop:"100px"}}>
        {cargando 
        ? 
        <AjaxLoader></AjaxLoader> 
        : 
        <div className='game-card-list'>                        
        {listaJuegos.sort(ordenar).filter(filtrarGenero).filter(filtrarPlataforma).map(muestraJuegos)}
        </div>}
      </div>
          <ScrollUpButton></ScrollUpButton>
    </div>
    </div>
    );
}
export default Datos;


