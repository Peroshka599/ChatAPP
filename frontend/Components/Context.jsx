"use client"
import React, { createContext, useState } from 'react'

export const authContext = createContext();

const Context = ({ children }) => {
    const [isUserLoggedin, setIsUserLoggedin] = useState(false);
    const [userData, setUserData] = useState();
    return (
        <authContext.Provider value={{ isUserLoggedin, setIsUserLoggedin, userData, setUserData }}>{children}</authContext.Provider>
    )
}

export default Context