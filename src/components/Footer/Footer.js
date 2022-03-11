import './footer.css'

export default function Footer() {
    let año = new Date().getFullYear();

    return (
        <div className="container__footer">
            <p className="container__textos cripto">Todos los derechos reservados por CryptoMarket {año}</p>
            <p className="container__textos">Sitio web realizado por
                <a href="https://lautarovilas.com" target="_blank" rel="noopener noreferrer" className="container__enlace">Lautaro Vilas</a>
            </p>
        </div>
    )
}