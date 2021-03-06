import {Link} from 'react-router-dom';
import './404.css';
import Lottie from 'lottie-react';
import { configError } from '../../lotties/lotties'

function Error404(){
    return (
        <div className="contenedor__error">
            <h1 className="contenedor__error-titulo">Error 404</h1>
            <Lottie className="contenedor__error-lottie" {...configError}/>
            <h2 className="contenedor__error-subtitulo">Lo sentimos esta pagina no esta disponible.</h2>
            <Link to="/"><button className="contenedor__error-boton">Volver a inicio</button></Link>
        </div>
    );
}

export default Error404;