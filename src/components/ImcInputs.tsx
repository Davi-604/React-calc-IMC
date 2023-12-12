'use client'

import { useState } from "react"
import { useImc } from "@/contexts/ImcContext";

export const ImcInputs = () => {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');

    const imcCtx = useImc();

    const calcImcBtn = (height: number, weight: number) => {
        if ((height === 0 || weight === 0) || (heightValue === '' || weightValue === '')) {
            return
        } else {
            const imcCalcRes = weight / (height * height)  
            imcCtx?.setImcValue(parseFloat(imcCalcRes.toFixed(2)));

            setHeightValue('');
            setWeightValue('');
        }
    }

    return (
        <>
            <div className="flex flex-col max-w-md">
                <input 
                    type="number"
                    placeholder="Digite a sua altura. Ex: 1.50 (em metros)"
                    className={`max-sm:placeholder:text-sm py-2 outline-none bg-transparent border-b-2 border-gray-500 mb-5 text-gray-800
                        ${imcCtx.imcValue === 0 ? '' : 'opacity-50'}`}
                    value={heightValue}
                    onChange={e => setHeightValue(e.target.value)}
                    disabled={imcCtx.imcValue !== 0}
                />
                <input 
                    type="number"
                    placeholder="Digite o seu peso. Ex: 50 (em quilos)"
                    className={`max-sm:placeholder:text-sm py-2 outline-none bg-transparent border-b-2 border-gray-500 text-gray-800
                        ${imcCtx.imcValue === 0 ? '' : 'opacity-50'}`}
                    value={weightValue}
                    onChange={e => setWeightValue(e.target.value)}
                    disabled={imcCtx.imcValue !== 0}
                />
            </div>
            <button 
                onClick={() => calcImcBtn(parseFloat(heightValue), parseFloat(weightValue))}
                className={`inline-flex py-2 max-sm:mt-9 max-sm:mb-12 mt-12 justify-center rounded-lg bg-cyan-700
                    ${imcCtx.imcValue === 0 ? 'hover:bg-cyan-600 transition-colors ease-out cursor-pointer' 
                        : 'opacity-60 cursor-auto' }`}
                disabled={imcCtx.imcValue !== 0}
            >
                Calcular
            </button>
        </>
    )
}