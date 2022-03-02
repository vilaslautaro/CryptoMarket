import React from 'react';
import './navBar.css';
import { useContext } from 'react'
import CartWidget from './CartWidget/CartWidget.js';
import { Link, NavLink } from 'react-router-dom';
import SubNavBar from './SubNavBar/SubNavBar';
import ButtonMode from './ButtonMode/ButtonMode';
import { CartContext } from '../../context/CartContext';



function NavBar() {
    const { resetID } = useContext(CartContext)
    return (
        <div id='layout' className='layout'>
            <header className='header'>
                <div className='header__Nav'>
                    <Link to={'/'} onClick={resetID}className='nav_Enlace'><img alt="logo" className='nav__Logo' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257552/CryptoMarket/logos/logo_kny4xe.png'></img></Link>
                    <ul className='nav__Menu'>
                        <NavLink onClick={resetID}className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Inicio</li></NavLink>
                        <NavLink onClick={resetID}className='menu__Enlaces' to={'/category/product'}><li className='menu__Categorias'>Productos</li></NavLink>
                        <NavLink onClick={resetID}className='menu__Enlaces' to={'/category/service'}><li className='menu__Categorias'>Servicios</li></NavLink>
                        <NavLink onClick={resetID}className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Comprá Criptos</li></NavLink>
                        <NavLink onClick={resetID}className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Contactanos</li></NavLink></ul>
                    <div className="nav__Caja">
                        {/* componente del carrito */}
                        <CartWidget />
                        {/* boton modo claro/nocturno */}
                        <ButtonMode />
                    </div>
                </div>
                {/* barra de busqueda */}
                <SubNavBar />
            </header>
        </div>
    )
};

export default NavBar;

