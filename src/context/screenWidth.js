import { createContext, useEffect, useState } from 'react';

export const ScreenWidth = createContext()

export const ScreenWidthProvider = ({ children }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const actualizarWidth = () => {
            const width = document.body.clientWidth
            setWidth(width)
            console.log(width)
        }
        actualizarWidth()
        // nos suscribimos al evento resize de window
        window.addEventListener("resize", actualizarWidth)

        // devolvemos una función para anular la suscripción al evento
        return () => {
            window.removeEventListener("resize", actualizarWidth)
        }
    }, [])

    return <ScreenWidth.Provider value={{width}}>{children}</ScreenWidth.Provider>
}