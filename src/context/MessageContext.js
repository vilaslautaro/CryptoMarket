import { createContext, useState } from 'react'

export const MessageContext = createContext()

export const MessageContextProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [state, setState] = useState('')

    function enviarMensaje (mensaje, estado){
        setMessage(mensaje)
        setState(estado)
        setTimeout(() => {
            setMessage('')
        }, 3000);
    }

    return <MessageContext.Provider value={{message, state, enviarMensaje}}>{children}</MessageContext.Provider>
}