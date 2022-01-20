import React from 'react';
import './navBar.css';

export default function NavBar() {
    return (
        <div id='layout' className='layout'>
            <header className='header'>
                <div className='header__Nav'>
                    <a href="#" className='nav_Enlace'><img className='nav__Logo' src='/logo.png'></img></a>
                    <ul className='nav__Menu'>
                        <a href='#' className='menu__Enlaces'><li className='menu__Categorias'>Inicio</li></a>
                        <a href='#' className='menu__Enlaces'><li className='menu__Categorias'>Productos</li></a>
                        <a href='#' className='menu__Enlaces'><li className='menu__Categorias'>Servicios</li></a>
                        <a href='#' className='menu__Enlaces'><li className='menu__Categorias'>Comprá Criptos</li></a>
                        <a href='#' className='menu__Enlaces'><li className='menu__Categorias'>Contactanos</li></a>
                    </ul>
                    <button id="btnMode" className='nav__BtnMode'>
                        <span><img className='btn__img Sun' src='/sun.png'></img></span>
                        <span><img className='btn__img Moon' src='/moon.png'></img></span>
                    </button>
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


// funcion para el boton de modo Nocturno
// const btnMode = document.getElementById('btnMode');
// const divLayout = document.getElementById('layout');

// export function modoNocturno(e){
//     divLayout.classList.toogle('dark');
//     btnMode.classList.toogle('activado');

//     e.preventDefault();
//     e.stopPropagation();
// }


