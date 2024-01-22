//Componente compuesto por una card que muestra los datos de un juego
import './App.css';
const juego = (props) => {

    //Invertir el formato de la fecha
    const invertDateFormat = (originalDate) => {
        const parts = originalDate.split("-");
        return parts[2] + "-" + parts[1] + "-" + parts[0];
      };

    return (
    <li className="card m-2" style={{ maxWidth: '18rem' }}>
        <img src={props.juego.thumbnail} className="card-img-top" alt="" />
        <div className="card-body bg-light p-10">
            <h2 className="card-title"><strong>{props.juego.title}</strong></h2>
            <p className="card-text font-weight-bold">Plataforma: {props.juego.platform}</p>
            <p className="card-text font-weight-bold">Lanzamiento: {invertDateFormat(props.juego.release_date)}</p>
            <p className="card-text font-weight-bold">Género: {props.juego.genre}</p>
            <a href={props.juego.game_url} className="btn btn-primary">Descargatelo</a>
        </div>
    </li>
    )
}

export default juego;