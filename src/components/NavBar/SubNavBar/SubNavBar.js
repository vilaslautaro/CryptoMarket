import './subNavBar.css'
import { useRef, useState, useContext } from 'react'
import { SubNavContext } from '../../../context/SubNavContext'
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ScreenWidthContext } from '../../../context/ScreenWidthContext'

export default function SubNavBar() {
    const redireccionar = useNavigate()
    const Url = useLocation()
    const UrlActual = Url.pathname
    const { sendSearch } = useContext(SubNavContext)
    const { width } = useContext(ScreenWidthContext)


    const inputSearch = useRef(null)
    const [search, setSearch] = useState('')
    const handleSearchChange = event => setSearch(event.target.value)
    let searchMayus = search.toUpperCase()

    function enviarBusqueda(event) {
        event.preventDefault()
        if(UrlActual !== '/' || UrlActual !== '/category/product' || UrlActual !== '/category/service'){
            redireccionar('/')
        }
        sendSearch(searchMayus)
        setSearch('')
    }

    function pressEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if(UrlActual !== '/' || UrlActual !== '/category/product' || UrlActual !== '/category/service'){
                redireccionar('/')
            }
            sendSearch(searchMayus)
            setSearch('')
        }
    }


    return (
        <div className='header__SubNav'>
            <form className='subNav__form' noValidate>
                <input ref={inputSearch} className='form__Search' type='text' maxlenght="20git " onKeyPress={pressEnter} value={search} placeholder='Encontrá el producto que buscas' onChange={handleSearchChange}></input>
                <button className="form__btnSubmit" onClick={enviarBusqueda}>
                    {width >= 600 ? 'Buscar' : <FontAwesomeIcon className="form__lottie" icon={faMagnifyingGlass} />}
                </button>
            </form>
        </div>
    )
}