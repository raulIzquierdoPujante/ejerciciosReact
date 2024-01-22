//aquí renderiza el componente Datos.jsx
import React from 'react';
import './App.css';
import Datos from './assets/PRACTICAWEBJUEGOS/components/datos/Datos';
import Cabecera from './assets/PRACTICAWEBJUEGOS/components/Cabecera';
const App = () => {
    return (
        <div>
            <Cabecera />
            <Datos />
        </div>
    );
};

export default App;
