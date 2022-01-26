import React from 'react';
import './navBar.css';
import CartWidget from './CartWidget/CartWidget.js';

import logo from '../../assets/images/logo.png';
import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png';


function NavBar() {
    return (
        <div id='layout' className='layout'>
            <header className='header'>
                <div className='header__Nav'>
                    <a href="google.com" className='nav_Enlace'><img alt="logo" className='nav__Logo' src={logo}></img></a>
                    <ul className='nav__Menu'>
                        <a href='google.com' className='menu__Enlaces'><li className='menu__Categorias'>Inicio</li></a>
                        <a href='google.com' className='menu__Enlaces'><li className='menu__Categorias'>Productos</li></a>
                        <a href='google.com' className='menu__Enlaces'><li className='menu__Categorias'>Servicios</li></a>
                        <a href='google.com' className='menu__Enlaces'><li className='menu__Categorias'>Comprá Criptos</li></a>
                        <a href='google.com' className='menu__Enlaces'><li className='menu__Categorias'>Contactanos</li></a>
                    </ul>
                    <div className="nav__Caja">
                        <CartWidget></CartWidget>
                        <button id="btnMode" className='caja__BtnMode'>
                            <span><img alt="sol" className='btn__img Sun' src={sun}></img></span>
                            <span><img alt="luna" className='btn__img Moon' src={moon}></img></span>
                        </button>
                    </div>
                </div>
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

// funcion para el boton de modo Nocturno
// const btnMode = document.getElementById('btnMode');
// const divLayout = document.getElementById('layout');

// export function modoNocturno(e){
//     divLayout.classList.toogle('dark');
//     btnMode.classList.toogle('activado');

//     e.preventDefault();
//     e.stopPropagation();
// }


