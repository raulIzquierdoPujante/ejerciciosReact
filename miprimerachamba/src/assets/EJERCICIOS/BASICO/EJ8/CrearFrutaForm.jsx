import {  useState } from "react";

const CrearFrutaForm = (props) => {
    
        const [fruta, setFruta] = useState("");
    
        function manejarEnvio(evento) {
            evento.preventDefault();
            props.manejarAccion(fruta);
            setFruta("");
        }
    
        function asignarFruta(evento) {
            setFruta(evento.target.value);
        }
    
        return (
            <form id="formulario" onSubmit={manejarEnvio}>
                <label htmlFor="fruta">Fruta</label>
                <input type="text" id="fruta" value={fruta} onChange={asignarFruta}></input>
                <button>Añadir</button>
            </form>
        )
    }
    export default CrearFrutaForm;