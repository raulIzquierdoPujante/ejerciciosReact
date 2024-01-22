import {Link } from 'react-router-dom';

const Menu = () => {

    return (<div>

        <Link to="/">
            Home
        </Link>
        <br></br>
        <Link to="/users/1">
            Bienvenida
        </Link>
        <br></br>
        <Link to="/inbox">
            Contador
        </Link>
        <br></br>
        <Link to="/about">
            Nosotros
        </Link>
        <br></br>

    </div>
    )

}
export default Menu;