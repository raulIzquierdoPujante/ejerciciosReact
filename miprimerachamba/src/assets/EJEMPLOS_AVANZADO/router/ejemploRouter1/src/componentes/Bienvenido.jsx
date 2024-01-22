import React from 'react'

import {useParams } from "react-router-dom";

const Bienvenido = () => {

    let {name} = useParams();

    return (
        <div>
            <div>Hello, {name}!</div>
        </div>
    )
}
export default Bienvenido;