import './subNavBar.css'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { SubNavContext } from '../../../context/SubNavContext'
import { Link } from 'react-router-dom';

export default function SubNavBar() {
    const { sendSearch } = useContext(SubNavContext)

    const inputSearch = useRef(null)
    const [search, setSearch] = useState('')
    const handleSearchChange = event => setSearch(event.target.value)
    let searchMayus = search.toUpperCase()

    function enviarBusqueda(event) {
        event.preventDefault()
        sendSearch(searchMayus)
        setSearch('')
    }

    function pressEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendSearch(searchMayus)
            setSearch('')
        }
    }


    return (
        <div className='header__SubNav'>
            <form className='subNav__form' noValidate>
                <input ref={inputSearch} className='form__Search' type='text' onKeyPress={pressEnter} value={search} placeholder='Encontrá el producto que buscas' onChange={handleSearchChange}></input>
                <Link to={`/search/${search}`} className="form__btnSubmit" onClick={enviarBusqueda}>Buscar</Link>
            </form>
        </div>
    )
}