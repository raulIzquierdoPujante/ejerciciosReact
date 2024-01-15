import "./App.css";
import Fruta from "./Fruta";
import { useState } from "react";
import frutas from "./mock-frutas";
import CrearFrutaForm from "./CrearFrutaForm";
import BorrarFrutaForm from "./BorrarFrutaForm";

function App() {

    //MANEJO DE LA LISTA DE FRUTAS
    const [listaFrutas, setListaFrutas] = useState(frutas);

    //Como no tengo ID, uso el index del array como key
    function muestraFrutas(fruta,index) {
        return <Fruta key={index} fruta={fruta}></Fruta>;
    }

    //Funcion para añadir una fruta a la lista, se mandará al componente hijo
    function manejarAccion(fruta) {
        setListaFrutas([...listaFrutas, fruta]);
    }

    function manejarBorrado(id){
        //Eliminar elemento de la lista
        /*comparamos cada elemento con el elemento de la posicion especificada
        en el formulario */
        setListaFrutas(listaFrutas.filter(item => item !== listaFrutas[id]));    }
    
    return (
        <div>
        <h1>Frutas</h1>
        <ol>{listaFrutas.map(muestraFrutas)}</ol>
        <CrearFrutaForm manejarAccion={manejarAccion}></CrearFrutaForm>
        <BorrarFrutaForm manejarBorrado={manejarBorrado} elementos={listaFrutas.length}></BorrarFrutaForm>
        </div>
    );
}

export default App;