import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post'
import { getAllPosts } from './servicios/posts/getAllPosts';
import AjaxLoader from './componentes/AjaxLoader';


function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);


  //Estado con booleano para determinar si carga o ya cargó
  const [cargando, setCargando] = useState(false);

  //Antes de solicitar los datos, ponemos el estado de cargando a true
  function obtenerPosts(){
      setCargando(true);
      // Usamos el servicio de obtención de posts que hemos creado
      getAllPosts().then(posts => {

          //Cargamos los post en el estado del componente
          //y ponemos el estado de cargando a false
          setListaPost(posts);
            setCargando(false);
        });                    
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
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
        {cargando 
        ? 
        <AjaxLoader></AjaxLoader> 
        : 
        <ul>                        
        {listaPost.map(muestraPost)}
        </ul>}
      </div>
    </div>
    );
}
export default App;


