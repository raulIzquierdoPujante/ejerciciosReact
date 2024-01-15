import React, { useState } from 'react';
import './App.css';
import TemaContext from './contextos/TemaContext';
import temas from './assets/EJERCICIOS/componentes/ejemploHooks/mock-temas';
import BarraHerramientas from "./assets/EJERCICIOS/componentes/ejemploHooks/useContext/BarraHerramientas";

function App() {
  // State to hold the current theme
  const [currentTheme, setCurrentTheme] = useState(temas.light);

  // Function to toggle between themes
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === temas.light ? temas.dark : temas.light);
  };

  return (
    <TemaContext.Provider value={currentTheme}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <BarraHerramientas></BarraHerramientas>
      </div>
    </TemaContext.Provider>
  );
}

export default App;
