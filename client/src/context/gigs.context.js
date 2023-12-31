import React, { createContext, useState, useEffect } from "react";

export const GigContext = createContext({
    currentGig: null,
    setCurrentGig: () => null
})

export const GigProvider = ({ children }) => {
    const [currentGig, setCurrentGig] = useState(null)
    const value = { currentGig, setCurrentGig}

    useEffect(() => {

    }, [])

    return <GigContext.Provider value={value}>{children}</GigContext.Provider>
}