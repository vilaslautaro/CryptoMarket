import './formInCart.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { CartContext } from '../../../context/CartContext'
import Lottie from 'lottie-react'
import { configError } from '../../../lotties/lotties'
import ReCaptcha from 'react-google-recaptcha'

function FormInCart() {
    const { enviarCompraFirebase, compraRechazada, setCompraRechazada } = useContext(CartContext)

    const inputNombre = useRef(null)
    const inputTelefono = useRef(null)
    const inputEmail = useRef(null)
    const inputEmailConfirm = useRef(null)
    const inputReCaptcha = useRef(null)
    const divReCaptcha = useRef(null)

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [reCaptcha, setReCaptcha] = useState(false)

    let emailLowerCase = email.toLowerCase()
    let emailConfirmLowerCase = emailConfirm.toLowerCase()

    const [nombreError, setNombreError] = useState('')
    const [telefonoError, setTelefonoError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailConfirmError, setEmailConfirmError] = useState('')
    const [reCaptchaError, setReCaptchaError] = useState('')

    const handleNombreChange = event => setNombre(event.target.value)
    const handleTelefonoChange = event => setTelefono(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleEmailConfirmChange = event => setEmailConfirm(event.target.value)
    const handleReCaptchaChange = () => inputReCaptcha.current.getValue() ? setReCaptcha(true) : setReCaptcha(false)  

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

    function pressEnter(e) {
        if (e.key === 'Enter') {
           validarCompra()
        }
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
        setReCaptchaError('')

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

        if(divReCaptcha.current.classList.contains('error') === true){
            divReCaptcha.current.classList.remove('error');
        }

    }

    function validarFormulario() {
        limpiarErrores()

        if (nombre === "" || nombre.length < 8 || inputNombre.current.validity.patternMismatch || emailLowerCase === "" || emailLowerCase.length < 10 || emailLowerCase.includes('@') === false || emailLowerCase.includes('.com') === false || emailConfirmLowerCase !== emailLowerCase || emailConfirmLowerCase.includes('.com') === false || emailConfirmLowerCase.includes('@') === false || inputTelefono.current.validity.patternMismatch || telefono === "" || telefono.length < 9 || reCaptcha === false) {

            if (nombre === "") {
                inputNombre.current.classList.add('error')
                setNombreError(`No has completado este campo.`)
            } else if (inputNombre.current.validity.patternMismatch) {
                inputNombre.current.classList.add('error')
                setNombreError(`Solo se permite ingresar texto. No se permite ingresar números ni caracteres especiales.`)
            } else if (nombre.length < 8) {
                inputNombre.current.classList.add('error')
                setNombreError(`El nombre y apellido ingresado deben tener al menos 8 caracteres, y has introducido ${nombre.length}.`)
            }

        
            if (telefono === "") {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`No has completado este campo.`)
            } else if (inputTelefono.current.validity.patternMismatch) {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`Solo se puede ingresar caracteres numericos.`)
            } else if (telefono.length < 8) {
                inputTelefono.current.classList.add('error')
                setTelefonoError(`El numero de celular debe tener al menos 8 caracteres, y has introducido ${telefono.length}.`)
            }

            if (emailLowerCase === "") {
                inputEmail.current.classList.add('error')
                setEmailError(`No has completado este campo.`)
            } else if (emailLowerCase.includes('@') === false || emailLowerCase.includes('.com') === false) {
                inputEmail.current.classList.add('error')
                setEmailError('El email ingresado no es valido.')
            } else if (emailLowerCase.length < 10) {
                inputEmail.current.classList.add('error')
                setEmailError(`El correo electrónico debe tener al menos 10 caracteres, y has introducido ${emailLowerCase.length}.`)
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

            if(reCaptcha === false){
                divReCaptcha.current.classList.add('error')
                setReCaptchaError('Captcha no completado.')
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
                        <input ref={inputNombre} onKeyPress={pressEnter} value={nombre} placeholder='Juan Suarez' maxLength="30" pattern="^[a-zA-Z\s]+" className={nombreError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleNombreChange} type='text' />
                        {nombreError === '' ? '' : <div className='formUser__textError'>{nombreError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Celular</p>
                        <input ref={inputTelefono} onKeyPress={pressEnter} value={telefono} placeholder='54 11 500 798' pattern="[0-9\s]+" maxLength="17" className={telefonoError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleTelefonoChange} type='tel' />
                        {telefonoError === '' ? '' : <div className='formUser__textError'>{telefonoError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Email</p>
                        <input ref={inputEmail} onKeyPress={pressEnter} value={email} placeholder='usuario@gmail.com' maxLength="30" className={emailError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleEmailChange} type='email' />
                        {emailError === '' ? '' : <div className='formUser__textError'>{emailError}</div>}
                    </div>
                    <div className='formUser__cajaInput'>
                        <p className='formUser__subtitle'>Confirmar email</p>
                        <input ref={inputEmailConfirm} onKeyPress={pressEnter} value={emailConfirm} placeholder='usuario@gmail.com' maxLength="30" className={emailConfirmError === '' ? 'formUser__input' : 'formUser__input error'} onChange={handleEmailConfirmChange} type='email' />
                        {emailConfirmError === '' ? '' : <div className='formUser__textError'>{emailConfirmError}</div>}
                    </div>
                </div>
                <div className="container__recaptcha" ref={divReCaptcha}>
                    <ReCaptcha
                        className="recaptcha"
                        ref={inputReCaptcha}
                        sitekey="6LdG_PAeAAAAAHmFcmNl_ORrqowi0sJ1BbMBs8j1"
                        onChange={handleReCaptchaChange}
                        />
                        {reCaptchaError === '' ? '' : <div className='formUser__textError captcha'>{reCaptchaError}</div>}
                </div>
                <div className='contenedor__botones'>
                    <button className='btnComprar' type='submit' onClick={validarCompra}>Finalizar compra</button>
                </div>

            </form>
        </div>
    )
}

export default FormInCart