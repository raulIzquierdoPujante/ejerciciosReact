import AjaxLoader from './AjaxLoader.jsx';
import usePost from '../hooks/usePost.jsx';
import Post from './Post.jsx'

const TodosPostAZ= () => {

  const posts = usePost();

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  key={post.id} post={post}></Post>;
  }

  function sortZA(p1, p2) {

    if (p1.title>p2.title) return -1;
		if (p1.title<p2.title) return 1;
		return 0;    

  }

    return (

        <div>
            <h1>Todos Post AZ</h1>
            {posts.buscando ? <AjaxLoader></AjaxLoader> 
                            : <ul>{posts.listaPost.toSorted(sortZA).map(muestraPost)}</ul>}
      </div>



    )

}

export default TodosPostAZ;