import React from 'react';
import './navBar.css';
import CartWidget from './CartWidget/CartWidget.js';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div id='layout' className='layout'>
            <header className='header'>
                <div className='header__Nav'>
                    <Link to={'/'} className='nav_Enlace'><img alt="logo" className='nav__Logo' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257552/CryptoMarket/logos/logo_kny4xe.png'></img></Link>
                    <ul className='nav__Menu'>
                        <NavLink className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Inicio</li></NavLink>
                        <NavLink className='menu__Enlaces' to={'/category/product'}><li className='menu__Categorias'>Productos</li></NavLink>
                        <NavLink className='menu__Enlaces' to={'/category/service'}><li className='menu__Categorias'>Servicios</li></NavLink>
                        <NavLink className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Comprá Criptos</li></NavLink>
                        <NavLink className='menu__Enlaces' to={'/'}><li className='menu__Categorias'>Contactanos</li></NavLink></ul>
                    <div className="nav__Caja">
                        {/* componente del carrito */}
                        <CartWidget></CartWidget>
                        {/* boton modo claro/nocturno */}
                        <button id="btnMode" className='caja__BtnMode'>
                            <span><img alt="sol" className='btn__img Sun' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/sun_dkwveg.png'></img></span>
                            <span><img alt="luna" className='btn__img Moon' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/moon_t1sjur.png'></img></span>
                        </button>
                    </div>
                </div>
                {/* barra de busqueda */}
                <div className='header__SubNav'>
                    <form className='subNav__form'>
                        <input className='form__Search' type='text' placeholder='Encontrá el producto que buscas'></input>
                        <input className='form__btnSubmit' type='submit' value='Buscar'></input>
                    </form>
                </div>
            </header>
        </div>
    )
};

export default NavBar;

