import { useImc } from "@/contexts/ImcContext"

type Props = {
    imcRes: number,
}

export const Result = ({imcRes}: Props) => {
    const imcCtx = useImc();

    return (
        <div 
            className={`max-sm:py-5 md:ml-7 w-full h-full text-white rounded-md flex flex-col justify-center items-center text-center
                ${imcRes >= 0 && imcRes <= 18.5 ? 'bg-gray-400' : ''}
                ${imcRes > 18.5 && imcRes <= 24.9 ? 'bg-green-600' : ''}
                ${imcRes > 24.9 && imcRes <= 30 ? 'bg-yellow-500' : ''}
                ${imcRes > 30 && imcRes <= 99 ? 'bg-red-600' : ''}
            `}
            style={{position: 'relative'}}
        >
            <div 
                onClick={() => imcCtx.setImcValue(0)}
                className="max-lg:top-0 max-lg:mt-[-30px] max-sm:ml-[-18px] max-lg:ml-[-30px] max-lg:p-[17px] p-5 absolute left-0 rounded-full ml-[-35px]
                    bg-cyan-700 cursor-pointer hover:bg-cyan-600 transition-colors ease-out"
            >
                <img className="w-8" src="/images/leftarrow.png"/>
            </div>

            <img 
                className="w-16 mb-7"
                src={`${imcRes > 18.5 && imcRes <= 24.9 ? '/images/up.png' : '/images/down.png'}`}
            />
            <h1 className="font-bold text-3xl mb-2">
                {imcRes >= 0 && imcRes <= 18.5 ? 'Magreza' : ''}
                {imcRes > 18.5 && imcRes <= 24.9 ? 'Normal' : ''}
                {imcRes > 24.9 && imcRes <= 30 ? 'Sobrepeso' : ''}
                {imcRes > 30 && imcRes <= 99 ? 'Obesidade' : ''}
            </h1>   
            <p className="text-lg mb-16">Seu IMC é de {imcRes} kg/m²</p>
            <p className="text-sm">
                IMC está entre
                {imcRes >= 0 && imcRes <= 18.5 ? ' 0 e 18.5' : ''}
                {imcRes > 18.5 && imcRes <= 24.9 ? ' 18.5 e 24.9' : ''}
                {imcRes > 24.9 && imcRes <= 30 ? ' 24.9 e 30' : ''}
                {imcRes > 30 && imcRes <= 99 ? ' 30 e 99' : ''}
            </p>
        </div>
    )
}