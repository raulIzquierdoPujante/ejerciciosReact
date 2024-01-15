//Utilidades de React


//Añadir un elemento a un array de objetos, usando el operador spread en un useState
function manejarAccion(coche) {

    console.log("valor componetne hijo ", coche, " lo añadimos a la lista");

    // Añadimos el coche a la lista de coches
    setListaCoches([...listaCoches, coche]);

}

//Funcion para mostrar los valores de un componente pasandolo como parámetro

function muestraNotas(nota) {  

    return <Nota  key={nota.id} nota={nota}></Nota>;
    
  }

//Función para filtrar un array de objetos en función de una propiedad

function filtrarNotas(nota) {

    if (mostrarTodos) return true;
    else return nota.importante===true;

  }




//Utilidades varias
//Crear un texto condicional según el valor de una variable

const importante = (props.nota.importante) ? "(importante)" : ""
//LO llamamos así:
<p>{props.nota.contenido} <span className="importante">{importante}</span></p>

//Botón que cambia de texto según el valor de una variable
const [mostrarTodos, setmostrarTodos] = useState(true);  
//LO llamamos así:
<button onClick={manejarMostarNotas}>{mostrarTodos ? "Mostar importantes" : "MostrarTodos"}</button>

//Función que cambia el valor de una variable booleana
function manejarMostarNotas() {

    setmostrarTodos(!mostrarTodos);
    
  }

  