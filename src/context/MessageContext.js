import { createContext, useState } from 'react'

export const MessageContext = createContext()

export const MessageContextProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [state, setState] = useState('')
    const [time, setTime] = useState(2500)

    function enviarMensaje (mensaje, estado, tiempo){
        setMessage(mensaje)
        setState(estado)
        setTime(tiempo)
        setTimeout(() => {
            setMessage('')
        }, time);
    }

    return <MessageContext.Provider value={{message, state, time, enviarMensaje}}>{children}</MessageContext.Provider>
}