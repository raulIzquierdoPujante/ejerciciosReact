import {useState} from "react";

const BorrarFrutaForm = (props) => {
        
            const [frutaBorrada, setFruta] = useState("");

            function asignarFruta(evento) {
                setFruta(evento.target.value);
            }
        
          
                //Manejamos el control de errores aquí, no se lo pasamos al padre
                function manejarBorrado(evento){

                    // Evitamos el componrtamiento por defecto del onSubmmit del formulario
                    evento.preventDefault();
            
                    // Solo borramos si el elemento insertado es menor o igual que el número de 
                    // elementos de la lista
                    if (props.elementos===0) alert ("No hay elementos en la lista");
                    else if (frutaBorrada === "") alert ("Debes introducir un número de fruta a borrar");
                   //OJO el + delante de frutaBorrada lo convierte en número
                    else if (props.elementos >= +frutaBorrada)
            
                        // A través de la función que recibe el componente como props, devolvemos el id de la fruta 
                        // a borrar al componente padre para que lo elimine de la lista de frutas. Le envíamos
                        // uno menos ya que el array empieza por 0 y la lista por 1.
                        //OJO el + delante de frutaBorrada lo convierte en número
                        props.manejarBorrado(+frutaBorrada-1);
            
                    else alert ("Ese elemento no existe en la lista");
            
                     // Reseteamos el campo de borrado del formulario al estado inicial
                    setFruta("");
                }
                
            
        
           
        
            return (
                <form id="formulario" onSubmit={manejarBorrado}>
                    <label >Numero fruta eliminar</label>
                    <input type="text" id="fruta" value={frutaBorrada} onChange={asignarFruta}></input>
                    <button>Eliminar fruta</button>
                </form>
            )
        }

        export default BorrarFrutaForm;