import { createContext, useEffect, useState } from 'react';

export const ScreenWidthContext = createContext()

export const ScreenWidthProvider = ({ children }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const actualizarWidth = () => {
            const width = document.body.clientWidth
            setWidth(width)
        }
        actualizarWidth()
        window.addEventListener("resize", actualizarWidth)

        return () => {
            window.removeEventListener("resize", actualizarWidth)
        }
    }, [])

    return <ScreenWidthContext.Provider value={{width}}>{children}</ScreenWidthContext.Provider>
}