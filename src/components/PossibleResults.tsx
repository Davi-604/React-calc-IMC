export const PossibleResults = () => {
    return (
        <div className="grid grid-cols-2 gap-5 md:ml-7">
            <div className=""> 
                <div className="max-md:py-3 max-md:px-3 py-5 bg-gray-400 text-center rounded-lg">
                    <div className="p-5 rounded-full inline-flex">
                        <img src="/images/down.png" className=" w-10"/>
                    </div>
                    <h1 className="font-bold max-sm:text-xl text-2xl mt-2">Magreza</h1>
                    <p className="font-semibold mt-4 max-sm:text-xs text-sm">IMC está entre<br/> 0 e 18.5</p>
                </div>
                <div className="max-md:py-3 max-md:px-3 py-5 bg-yellow-500 text-center rounded-lg mt-5">
                    <div className="p-5 rounded-full inline-flex">
                        <img src="/images/down.png" className=" w-10"/>
                    </div>
                    <h1 className="font-bold max-sm:text-xl text-2xl mt-2">Sobrepeso</h1>
                    <p className="font-semibold mt-4 max-sm:text-xs text-sm">IMC está entre<br/> 24.9 e 30</p>
                </div>
            </div>
            <div className="">
                <div className="max-md:py-3 max-md:px-3 py-5 bg-green-600 text-center rounded-lg">
                    <div className="p-5 rounded-full inline-flex">
                        <img src="/images/up.png" className=" w-10"/>
                    </div>
                    <h1 className="font-bold max-sm:text-xl text-2xl mt-2">Normal</h1>
                    <p className="font-semibold mt-4 max-sm:text-xs text-sm">IMC está entre<br/> 18.5 e 24.9</p>
                </div>
                <div className="max-md:py-3 max-md:px-3 py-5 bg-red-600 text-center rounded-lg mt-5">
                    <div className="p-5 rounded-full inline-flex">
                        <img src="/images/down.png" className=" w-10"/>
                    </div>
                    <h1 className="font-bold max-sm:text-xl text-2xl mt-2">Obesidade</h1>
                    <p className="font-semibold mt-4 max-sm:text-xs text-sm">IMC está entre<br/> 30 e 99</p>
                </div>
            </div>
        </div>
    )
}