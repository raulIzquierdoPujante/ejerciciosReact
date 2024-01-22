import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post'

function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);

  function obtenerPosts(){


      // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
      // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
      // una promesa, la respuesta de la REST API la convertimos a json y luego actualizamos
      // el estado de nuestro componente
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
          
          //Cargamos los post en el estado del componente
          setListaPost(json);

        })
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez, ponemos el array de dependencias como vacío para ello
  useEffect(obtenerPosts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  key={post.id} post={post}></Post>;
  }

  return (
    <div>
      <div id="divPost">
        <h1>Post</h1>
        <ul>                        
        {listaPost.map(muestraPost)}
        </ul>
      </div>
    </div>
    );
}
export default App;







  /*
  // Función encargada de cambiar el estado del hook creado para mostrar o no mostrar
  // todas las notas. Hacemos un toogle del booleano, si es true lo ponemos a false y
  // viceversa.
  function manejarMostarNotas() {

    setmostrarTodos(!mostrarTodos);
    
  }
 
  // Esta función se envía al componente hijo como prop
  function manejarAccion(nota) {

    console.log("valor componetne hijo ", nota, " lo añadimos a la lista");

    // Le asigno el ID a la nota
    nota.id = listaNotas.length + 1;

    // Añadimos el coche a la lista de coches
    setListaNotas([...listaNotas, nota]);

}  
*/