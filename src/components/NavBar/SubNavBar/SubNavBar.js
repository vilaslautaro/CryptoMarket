import './subNavBar.css'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { SubNavContext } from '../../../context/SubNavContext'

export default function SubNavBar() {
    const { sendSearch } = useContext(SubNavContext)

    const inputSearch = useRef(null)
    const [search, setSearch] = useState('')
    const handleSearchChange = event => setSearch(event.target.value)

    function enviarBusqueda(event) {
        event.preventDefault()
        const searchMayus = search.toUpperCase()
        sendSearch(searchMayus)
        setSearch('')
    }

    return (
        <div className='header__SubNav'>
            <form className='subNav__form'>
                <input ref={inputSearch} className='form__Search' type='text' value={search} placeholder='Encontrá el producto que buscas' onChange={handleSearchChange}></input>
                <button className='form__btnSubmit' type='submit' value='Buscar' onClick={enviarBusqueda}>Buscar</button>
            </form>
        </div>
    )
}