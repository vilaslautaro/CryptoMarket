import { createContext, useState } from 'react'

export const SubNavContext = createContext()

export const SubNavContextProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')
    const [productoId, setProductoId] = useState()

    function sendSearch(value) {
        setSearchValue(value)
    }


    return <SubNavContext.Provider value={{ searchValue, setSearchValue, sendSearch, productoId, setProductoId }}>{children}</SubNavContext.Provider>
}