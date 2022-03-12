import './formInCart.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { CartContext } from '../../../context/CartContext'
import Lottie from 'lottie-react'
import { configError } from '../../../lotties/lotties'

function FormInCart() {
    const { enviarCompraFirebase, compraRechazada, setCompraRechazada } = useContext(CartContext)

    const inputNombre = useRef(null)
    const inputTelefono = useRef(null)
    const inputEmail = useRef(null)
    const inputEmailConfirm = useRef(null)

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    let emailLowerCase = email.toLowerCase()
    let emailConfirmLowerCase = emailConfirm.toLowerCase()

    const [nombreError, setNombreError] = useState('')
    const [telefonoError, setTelefonoError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailConfirmError, setEmailConfirmError] = useState('')

    const handleNombreChange = event => setNombre(event.target.value)
    const handleTelefonoChange = event => setTelefono(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleEmailConfirmChange = event => setEmailConfirm(event.target.value)

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({ nombre, telefono, email })
    }, [nombre, telefono, email])

    function alertaCompraRechazada() {
        return (
            <div className="error__contenedor">
                <div className='error__subcontenedor'>
                    <Lottie className="error__compra" {...configError} />
                    <p className="error__texto">Hubo un error al momento de procesar tu compra, intentemoslo denuevo</p>
                    <button className="contenedor__btn error" onClick={() => setCompraRechazada(false)}>Cerrar</button>
                </div>
            </div>
        )
    }

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
        setEmailConfirmError('')
        setTelefonoError('')

        if (inputNombre.current.classList.contains('error') === true) {
            inputNombre.current.classList.remove('error');
        }

        if (inputEmail.current.classList.contains('error') === true) {
            inputEmail.current.classList.remove('error');
        }

        if (inputEmailConfirm.current.classList.contains('error') === true) {
            inputEmailConfirm.current.classList.remove('error');
        }

        if (inputTelefono.current.classList.contains('error') === true) {
            inputTelefono.current.classList.remove('error');
        }
    }

    function validarFormulario() {
        limpiarErrores()
        console.log(inputNombre.current.validity.patternMismatch)

        if (nombre === "" || nombre.length < 8 || inputNombre.current.validity.patternMismatch || emailLowerCase === "" || emailLowerCase.length < 10 || emailLowerCase.includes('@') === false || emailLowerCase.includes('.com') === false || emailConfirmLowerCase !== emailLowerCase || emailConfirmLowerCase.includes('.com') === false || emailConfirmLowerCase.includes('@') === false || isNaN(telefono) || telefono === "" || telefono.length < 6) {

            if (nombre === "") {
                inputNombre.current.classList.add('error')
                setNombreError(`No has completado este campo.`)
            } else if (nombre.length < 8) {
                inputNombre.current.classList.add('error')
                setNombreError(`El nombre y apellido ingresado deben tener al menos 8 caracteres, y has introducido ${nombre.length}.`)
            } else if (inputNombre.current.validity.patternMismatch) {
                inputNombre.current.classList.add('error')
                setNombreError(`Solo se permite ingresar texto. No se permite ingresar números ni caracteres especiales.`)
            }

            if (telefono === "") {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`No has completado este campo.`)
            } else if (isNaN(telefono)) {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`Solo se puede ingresar caracteres numericos.`)
            } else if (telefono.length < 6) {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`El numero de celular debe tener al menos 6 caracteres, y has introducido ${telefono.length}.`)
            }

            if (emailLowerCase === "") {
                inputEmail.current.classList.add('error')
                setEmailError(`No has completado este campo.`)
            } else if (emailLowerCase.length < 10) {
                inputEmail.current.classList.add('error')
                setEmailError(`El correo electrónico debe tener al menos 10 caracteres, y has introducido ${emailLowerCase.length}.`)
            } else if (emailLowerCase.includes('@') === false || emailLowerCase.includes('.com') === false) {
                inputEmail.current.classList.add('error')
                setEmailError('El email ingresado no es valido.')
            }


            if (emailConfirmLowerCase === "") {
                inputEmailConfirm.current.classList.add('error')
                setEmailConfirmError(`No has completado este campo.`)
            } else if (emailConfirmLowerCase.includes('@') === false || emailConfirmLowerCase.includes('.com') === false) {
                inputEmailConfirm.current.classList.add('error')
                setEmailConfirmError('El email ingresado no es valido.')
            } else if (emailConfirmLowerCase !== emailLowerCase) {
                inputEmailConfirm.current.classList.add('error')
                setEmailConfirmError(`El email ingresado no coincide.`)
            }

            return false;

        } else {
            return true
        }
    }


    return (
        <div className='container__formUser'>
            {compraRechazada ? alertaCompraRechazada() : null}
            <form className='formUser'>
                <div className='formUser__title'>Completa el formulario para finalizar tu compra</div>
                <div className='formUser__subBox'>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Nombre completo</p>
                        <input ref={inputNombre} value={nombre} placeholder='Juan Suarez' maxlength="25" pattern="[a-zA-Z]+" className={nombreError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleNombreChange} type='text' />
                        {nombreError === '' ? '' : <div className='formUser__textError'>{nombreError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Celular</p>
                        <input ref={inputTelefono} value={telefono} placeholder='5411500798' pattern="[0,9]+" maxlength="20" className={telefonoError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleTelefonoChange} type='tel' />
                        {telefonoError === '' ? '' : <div className='formUser__textError'>{telefonoError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Email</p>
                        <input ref={inputEmail} value={email} placeholder='usuario@gmail.com' maxlength="35" className={emailError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleEmailChange} type='email' />
                        {emailError === '' ? '' : <div className='formUser__textError'>{emailError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Confirmar email</p>
                        <input ref={inputEmailConfirm} value={emailConfirm} placeholder='usuario@gmail.com' maxlength="35" className={emailConfirmError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleEmailConfirmChange} type='email' />
                        {emailConfirmError === '' ? '' : <div className='formUser__textError'>{emailConfirmError}</div>}
                    </div>
                </div>
                <div className='contenedor__botones'>
                    <button className='btnComprar' type='submit' onClick={validarCompra}>Finalizar compra</button>
                </div>

            </form>
        </div>
    )
}

export default FormInCart