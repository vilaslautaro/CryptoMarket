import React from 'react';
import './navBar.css';

export default function NavBar() {
    return (
        <div className='layout'>
            <header className='header'>
                <div className='header__Nav'>
                    <img className='nav__Logo' src='/logo.png'></img>
                    <ul className='nav__Menu'>
                        <a href='#' className='menu__Enlaces'><li className='enlaces__Categorias'>Inicio</li></a>
                        <a href='#' className='menu__Enlaces'><li className='enlaces__Categorias'>Productos</li></a>
                        <a href='#' className='menu__Enlaces'><li className='enlaces__Categorias'>Servicios</li></a>
                        <a href='#' className='menu__Enlaces'><li className='enlaces__Categorias'>Comprá Criptos</li></a>
                        <a href='#' className='menu__Enlaces'><li className='enlaces__Categorias'>Contactanos</li></a>
                    </ul>
                    <button className='nav__BtnMode'>Claro/Oscuro</button>
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