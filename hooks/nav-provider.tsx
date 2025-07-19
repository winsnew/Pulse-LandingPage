"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type NavbarContextType = {
    isNavbarVisible: boolean
}

const NavbarContext = createContext<NavbarContextType>({ isNavbarVisible: false })

export const useNavbar = () => useContext(NavbarContext)

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarVisible(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <NavbarContext.Provider value={{ isNavbarVisible }
        }>
            {children}
        </NavbarContext.Provider>
    )
}
