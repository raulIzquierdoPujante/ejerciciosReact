import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post'
import PostForm from './componentes/PostForm';
import { getAllPosts } from './servicios/posts/getAllPosts';
import { newPost } from './servicios/posts/newPost';

function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);

  function obtenerPosts(){

      // Usamos el servicio de obtención de posts que hemos creado
      getAllPosts().then(posts => {

          //Cargamos los post en el estado del componente
          setListaPost(posts);


        });                    
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerPosts, []);

  // Esta función se envía al componente hijo como prop para la 
  // inserción de una nueva fruta
  function manejarAccion(post) {

    console.log("valor componente hijo ", post, " lo añadimos a la lista");

    newPost(post).then(post => {

      console.log(post);
      
      // Añadimos el post a la lista
      setListaPost([...listaPost, post]);

    });
    
  }  

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
      <div id="divForm">
        <PostForm manejarAccion={manejarAccion}>
        </PostForm>        
      </div>


    </div>
    );
}
export default App;


