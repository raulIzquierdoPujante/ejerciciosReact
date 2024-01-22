//COMPONENTE PRINCIPAL DE LA BARRA LATERAL
/*Llevará en orden:
 -una etiqueta "ordenacion", 
 -el componente OrdenarAZ
 -eTIQUETA "filtros"
 -etiqueta genero
 -componente filtroGenero
 -etiqueta plataforma
 -componente filtroPlataforma
 */

import React from 'react';
import OrdenarAZ from './OrdenarAZ';
import FiltroGenero from './FiltroGenero';
import FiltroPlataforma from './FiltroPlataforma';

const BarraLateral = () => {


    return (
        <div>
            <div className='bg-dark text-wgite p-3'>
                <h2>Ordenacion</h2>
                <div id="divOrdenacion">
                    <h3>Ordenación</h3>
                    <OrdenarAZ />
                </div>
                <div id="divFiltros">
                    <h2>Filtros</h2>
                    <div id="divGenero">
                        <h3>Género</h3>
                        <FiltroGenero />
                    </div>
                    <div id="divPlataforma">
                        <h3>Plataforma</h3>
                        <FiltroPlataforma />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default BarraLateral;