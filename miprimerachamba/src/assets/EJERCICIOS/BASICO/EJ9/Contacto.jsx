const Contacto = (props) => {
    return(
        <li>
            {props.contacto.nombre} - {props.contacto.telefono}
        </li>
    )

}
export default Contacto;