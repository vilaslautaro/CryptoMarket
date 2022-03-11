import './navBar.css';
import CartWidget from './CartWidget/CartWidget.js';
import { Link, NavLink } from 'react-router-dom';
import SubNavBar from './SubNavBar/SubNavBar';
import ButtonMode from './ButtonMode/ButtonMode';
import { useContext, useState, useRef } from 'react'
import { SubNavContext } from '../../context/SubNavContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ScreenWidth } from '../../context/screenWidth';

export default function NavBar() {
    const { searchValue, setSearchValue } = useContext(SubNavContext)
    const { width } = useContext(ScreenWidth)
    const [menuAbierto, setMenuAbierto] = useState(false)
    const navMenu = useRef(null)

    function resetSearchValue() {
        setSearchValue('')
    }

    function mostrarMenu() {
        if (navMenu.current.classList.contains('abierto') === false) {
            navMenu.current.classList.add('abierto')
            setMenuAbierto(true)
        } else {
            navMenu.current.classList.remove('abierto')
            setMenuAbierto(false)
        }
    }

    return (
        <div id='layout' className='layout'>
            <header className='header'>
                <div className={width >= 1000 ? 'header__Nav' : 'header__Nav movil'}>
                    <FontAwesomeIcon onClick={mostrarMenu} className="btnMenuMovil" icon={menuAbierto ? faXmark : faBars} />
                    <Link onClick={searchValue !== "" ? resetSearchValue : null} to={'/'} className='nav_Enlace'>
                        <img alt="logo" className='nav__Logo' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257552/CryptoMarket/logos/logo_kny4xe.png'></img>
                    </Link>
                    <ul ref={navMenu} className='nav__Menu'>
                        <NavLink className='menu__Enlaces' onClick={searchValue !== "" ? resetSearchValue : null} to={'/'}>
                            <li className='menu__Categorias'>Inicio</li>
                        </NavLink>
                        <NavLink className='menu__Enlaces' onClick={searchValue !== "" ? resetSearchValue : null} to={'/category/product'}>
                            <li className='menu__Categorias'>Productos</li>
                        </NavLink>
                        <NavLink className='menu__Enlaces' onClick={searchValue !== "" ? resetSearchValue : null} to={'/category/service'}>
                            <li className='menu__Categorias'>Servicios</li>
                        </NavLink>
                        <NavLink className='menu__Enlaces' onClick={searchValue !== "" ? resetSearchValue : null} to={'/'}>
                            <li className='menu__Categorias'>Contacto</li>
                        </NavLink>
                        {menuAbierto 
                        ? <img alt="logo" className='nav__Logo-movil' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257552/CryptoMarket/logos/logo_kny4xe.png'></img> 
                        : null}
                    </ul>
                    <div className="nav__Caja">
                        <CartWidget />
                        <ButtonMode />
                    </div>
                </div>
                <SubNavBar />
            </header>
        </div>
    )
};
