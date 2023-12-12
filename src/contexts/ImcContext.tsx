'use client'

import { ReactNode, createContext, useContext, useState } from "react";

type ImcCtxType = {
    imcValue: number,
    setImcValue: (imc: number) => void
}
const imcDefault: ImcCtxType = {
    imcValue: 0,
    setImcValue: () => {}
}; 
const ImcContext = createContext<ImcCtxType>(imcDefault);

export const ImcProvider = ({children}: {children: ReactNode}) => {
    const [imcValue, setImcValue] = useState(0);
    
    return (
        <ImcContext.Provider value={{imcValue, setImcValue}}>
            {children}
        </ImcContext.Provider>
    )
};
export const useImc = () => useContext(ImcContext);   

