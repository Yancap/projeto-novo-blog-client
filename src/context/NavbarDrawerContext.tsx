import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

const NavbarDrawerContext = createContext({} as UseDisclosureReturn);

interface NavbarDrawerProviderProps{
    children: ReactNode
}
export function NavbarDrawerProvider({children}: NavbarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    return (
        <NavbarDrawerContext.Provider value={disclosure}>
            {children}
        </NavbarDrawerContext.Provider>
    )
}

export const useNavbarDrawer = () => useContext(NavbarDrawerContext)