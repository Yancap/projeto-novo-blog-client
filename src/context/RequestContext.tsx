import { Categories } from "@/pages/articles/article";
import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface RequestContextValues {
    categories: Categories[] | null
    setCategories: Dispatch<SetStateAction<Categories[] | null>>
}

const RequestContext = createContext({} as RequestContextValues);

interface RequestProviderProps{
    children: ReactNode
}
export function RequestProvider({children}: RequestProviderProps){
    const [categories, setCategories] = useState<Categories[] | null>(null)
    return (
        <RequestContext.Provider value={{categories, setCategories}}>
            {children}
        </RequestContext.Provider>
    )
}

export const useRequest = () => useContext(RequestContext)