import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatosAutor from './componentes/datosAutor'

const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';


  return (
    <div className="tweet">
          <img
            src="https://www.gravatar.com/avatar/763dcd4dad38689d57aa9d83a60bfaa5.jpg"
            className="avatar"
            alt="avatar" />
            <div className="content">
            <DatosAutor nombre={nombre} nick={nick} cuando={cuando} />
             //componente mensaje
              <div className="message" >
                {tweet}
              </div>    
              //componente botones
              <div className="buttons" >
              <i className="fa fa-reply reply-button" />
              <i className="fa fa-retweet retweet-button" />
              <i className="fa fa-heart like-button" />
              <i className="fa fa-ellipsis-h more-options-button" />
              </div>            
            </div>                
    </div>
  )
}

export default App
