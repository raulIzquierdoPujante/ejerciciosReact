import React from 'react'
import {useLocation, useNavigate, useParams } from "react-router-dom";

const Nosotros = () => {

    const url = useLocation();
    const navegar = useNavigate();

    const handleClick = () => {
        navegar('/')    
    }

    return (
        <div>
            Sobre nosotros
            La ruta actual es {url.pathname}
            <button onClick={handleClick}>VOlver al home</button>
        </div>
    )
}
export default Nosotros;