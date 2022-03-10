import './buttonMode.css'
import { useRef, useEffect } from 'react'

export default function ButtonMode() {
    const btnMode = useRef(null)
    
    useEffect(() => {
        if ((localStorage.getItem('modoOscuro') === 'activado') === true) {
            btnMode.current.classList.add('active');
            document.body.classList.add('dark');
        } else {
            btnMode.current.classList.remove('active');
            document.body.classList.remove('dark');
        }
    }, [])


    function modoOscuro(){
        if (btnMode.current.classList.contains('active') === false) {
            btnMode.current.classList.add('active');
            document.body.classList.add('dark');
            localStorage.setItem('modoOscuro', 'activado')
        }
        else{
            btnMode.current.classList.remove('active');
            document.body.classList.remove('dark');
            localStorage.setItem('modoOscuro', 'desactivado')
        }
    }


    return (
        <>
            <button ref={btnMode} onClick={modoOscuro} className='caja__BtnMode'>
                <span>
                    <img alt="bitcoin" className='btn__img bitcoin' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1646889003/CryptoMarket/iconos/bitcoin_r9llix.png'>
                    </img>
                </span>
                <span>
                    <img alt="ethereum" className='btn__img ethereum' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1646889193/CryptoMarket/iconos/ethereum_jkpr8q.png'>
                    </img>
                </span>
            </button>
        </>
    )
}