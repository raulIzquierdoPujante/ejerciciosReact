import React, { useState } from 'react'

const PostForm = (props) => {

    // Objeto post en su estado inicial
    const POSTINICIAL={userid : 1,   // Por defecto le asignaremos el POST al usuario con id=1
                      id      : 0,   // ID que luego se sustituirá 
                      title   : "",
                      body    : ""}
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    const TITULO  = "titulo";
    const CUERPO  = "cuerpo";

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevoPost, setNuevoPost] = useState(POSTINICIAL);

    function asignarPost(event){

        console.log(event.target.id);
        console.log(event.target.value);

        switch(event.target.id) {

            // Si hemos modificado el título, actualizamos ese campo, el resto los dejamos como está
            case TITULO: setNuevoPost({...nuevoPost,
                                       title:event.target.value});
            break;

            // Si hemos modificado la cuerpo, actualizamos ese campo, el resto los dejamos como está
            case CUERPO: setNuevoPost({...nuevoPost,
                                       body:event.target.value});
            break;

            default: break;
        }
    }
    
    function manejarFormulario(event){

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos el nuevo Post
        // al componente padre para que lo añada a la lista de post
        props.manejarAccion(nuevoPost);

        // Reseteamos los campos del formulario al estado inicial
        setNuevoPost(POSTINICIAL);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nueva nota</strong></p>
                <label>Contenido</label> 
                <input id={TITULO} type="text" onChange={asignarPost} value={nuevoPost.title}></input><br></br>
                <label>Contenido</label> 
                <input id={CUERPO} type="text" onChange={asignarPost} value={nuevoPost.body}></input><br></br>
                <button>Añadir Post</button>

        </form>

    )
}

export default PostForm;