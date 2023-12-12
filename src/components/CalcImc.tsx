'use client'

import { ImcInputs } from "./ImcInputs"

export const CalcImc = () => {
    return (
        <div className="flex flex-col max-w-md">
            <img 
                src="/images/powered.png" 
                className="w-48 mb-10"
            />
            <h1 className="font-semibold text-5xl text-gray-800 mb-3">Calcule o seu IMC.</h1>
            <p className="text-md text-gray-500 font-semibold mb-5">
                IMC é a sigla para índice de Massa Corpórea, parâmetro
                adotado pela Organização Mundial de Saúde para
                calcular o peso ideal de cada pessoa.
            </p>

            <ImcInputs />
        </div>
    )
}