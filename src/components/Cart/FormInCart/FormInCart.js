import './formInCart.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { CartContext } from '../../../context/CartContext'

function FormInCart() {
    const { enviarCompraFirebase } = useContext(CartContext)

    const inputNombre = useRef(null)
    const inputTelefono = useRef(null)
    const inputEmail = useRef(null)

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const [nombreError, setNombreError] = useState('')
    const [telefonoError, setTelefonoError] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleNombreChange = event => setNombre(event.target.value)
    const handleTelefonoChange = event => setTelefono(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({ nombre, telefono, email })
    }, [nombre, telefono, email])


    function validarCompra(event) {
        event.preventDefault()

        if (validarFormulario() === true) {
            enviarCompraFirebase(user)
        } else {
            validarFormulario()
        }
    }

    function limpiarErrores() {
        setNombreError('')
        setEmailError('')
        setTelefonoError('')
        
        if (inputNombre.current.classList.contains('error') === true) {
            inputNombre.current.classList.remove('error');
        }

        if (inputEmail.current.classList.contains('error') === true) {
            inputEmail.current.classList.remove('error');
        }
        
        if (inputTelefono.current.classList.contains('error') === true) {
            inputTelefono.current.classList.remove('error');
        }
    }

    function validarFormulario() {
        limpiarErrores()

        if (nombre === "" || nombre.length < 3 || email === "" || email.length < 10 || email.includes('@') === false || email.includes('.com') === false || telefono === "" || telefono.length < 6) {

            if (nombre === "") {
                inputNombre.current.classList.add('error')
                setNombreError(`No has completado este campo.`)
            } else if (nombre.length < 3) {
                inputNombre.current.classList.add('error')
                setNombreError(`El nombre ingresado debe tener al menos 3 caracteres, y has introducido ${nombre.length}.`)
            }

            if (telefono === "") {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`No has completado este campo.`)
            } else if (telefono.length < 6) {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`El numero de celular debe tener al menos 6 caracteres, y has introducido ${telefono.length}.`)
            }
            
            if (email === "") {
                inputEmail.current.classList.add('error')
                setEmailError(`No has completado este campo.`)
            } else if (email.length < 10) {
                inputEmail.current.classList.add('error')
                setEmailError(`El correo electrónico debe tener al menos 10 caracteres, y has introducido ${email.length}.`)
            } else if (email.includes('@') === false || email.includes('.com') === false) {
                inputEmail.current.classList.add('error')
                setEmailError('Email invalido.')
            }

            return false;

        } else {
            return true
        }
    }



    return (
        <form className='formUser'>
            <div className='formUser__title'>Completa el formulario para finalizar tu compra</div>
            <div className='formUser__subBox'>
                <div className='formUser__cajaInput'>
                    <p className='formUser__subtitle'>Nombre completo</p>
                    <input ref={inputNombre} value={nombre} placeholder='Juan Suarez' className={nombreError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleNombreChange} type='text' />
                    {nombreError === '' ? '' : <div className='formUser__textError'>{nombreError}</div>}
                </div>
                <div className='formUser__cajaInput'>
                    <p className='formUser__subtitle'>Celular</p>
                    <input ref={inputTelefono} value={telefono} placeholder='54 11 500 798' className={telefonoError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleTelefonoChange} type='tel' />
                    {telefonoError === '' ? '' : <div className='formUser__textError'>{telefonoError}</div>}
                </div>
                <div className='formUser__cajaInput'>
                    <p className='formUser__subtitle'>Email</p>
                    <input ref={inputEmail} value={email} placeholder='usuario@gmail.com' className={emailError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleEmailChange} type='email' />
                    {emailError === '' ? '' : <div className='formUser__textError'>{emailError}</div>}
                </div>
            </div>
            <div className='contenedor__botones'>
                <button className='contenedor__btn btnComprar' type='submit' onClick={validarCompra}>Finalizar compra</button>
            </div>
        </form>
    )
}

export default FormInCart