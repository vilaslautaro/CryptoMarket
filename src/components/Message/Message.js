import {useContext} from 'react'
import {MessageContext} from '../../context/MessageContext'
import './message.css'

function Message(){
    const {message, state} = useContext(MessageContext)
    return(
        
        message === '' ? (
            <div className="oculto"></div>
        ) :
        <div className={message === '' ? 'oculto' : state}>{message}</div>
    )
}

export default Message