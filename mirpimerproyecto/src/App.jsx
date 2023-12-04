import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./index.css'
import DatosAutor from './componentes/datosAutor'
import Mensaje from './componentes/mensaje'
import Botones from './componentes/botones'

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
            <Mensaje tweet ={tweet}/>    
            <Botones/>    
            </div>                
    </div>
  )
}

export default App
